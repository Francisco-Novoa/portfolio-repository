//library imports
const bcrypt = require("bcrypt")
const config = require("../utils/config")
const jwt = require("jsonwebtoken")

//imports the model
const User = require("../models/users")

//create the router function
const usersRouter = require("express").Router()

usersRouter.post("/", async (request, response) => {
    //grabs the body from the request
    const {password,username} = request.body

    //checks if the username and password actually arrived 
    if (!password || !username) return response.status(400).send({ error: "password or username missing" })

    //checks if the username and password are the correct length more strict rules can be checked here
    if (password.length<=6) return response.status(400).send({ error: "password length is too short"})
    if (username.length<=6) return response.status(400).send({ error: "username length is too short"})

    //user is hashed with bcrypt
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    //creates a new entry in the database using the mongoose model
    const user = new User({ username,passwordHash })
    await user.save()

    //creates jwt token
    const token = jwt.sign({username: user.username, id: user._id}, config.SECRET)

    //answers back to the user with the username, id and token
    response.status(201).json({token,user:user.username, id: user.id})

})

module.exports=usersRouter