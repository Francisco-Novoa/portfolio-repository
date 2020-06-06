
//saves the enviroment variables
const config = require("./utils/config")

// router library express
const express = require("express")

//this one catches every async error in the use of routes
require("express-async-errors")

//creates the express intacne that is the core of the app's backend
const app = express()

//allows to use content from more than one source usefull for the separation of backend and front end
const cors = require("cors")




// here go the router imports

const usersRouter = require("./controllers/users")
const loginRouter = require ("./controllers/login")



//calls my custom console.log functions
const { info } = require("./utils/logger")

//imports the request logger middleware
const { requestLogger } = require("./utils/requestlogger")

//imports the error handler middleware
const { errorHandler } = require("./utils/errorHandler")

//imports the unknown endpoint middleware
const { unknownEndpoint } = require("./utils/unknownEndPoint")




//calls the ODM mongoose
const mongoose = require("mongoose")

//connection proccess
const connection = async function () {
    info("connecting to ", config.MONGODB_URI)
    info("-----")
    try {
        await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        info("connected to MongoDB!")
        info("-----")

    } catch (e) {
        error("error connecting to MongoDB", e.message)
    }
}()

//actually uses cors
app.use(cors())

//middleware made to serve static files autonomously in the file system, addon for express
app.use('/cardsorter', express.static("./proyects/cardsorter"));
app.use('/tictactoe', express.static("./proyects/tictactoe"));



//middleware that parses the body of the requests.
//from here onwards the  request object is accesible
app.use(express.json())

//calls the request logger middleware
app.use(requestLogger)

//here go the controllers
app.use("/api/users/", usersRouter)
app.use("/api/login", loginRouter)

//here went the controllers from here onward the request
//object has already been handled

//unknown endpoint 404 handler middleware
app.use(unknownEndpoint)

//error handler middleware, so everything doesnt crash
app.use(errorHandler)


module.exports = app