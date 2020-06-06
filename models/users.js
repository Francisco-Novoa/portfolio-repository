// this will be a mongodb model thus i need to call mongose that will be my odm
const mongoose = require("mongoose")

const uniqueValidator = require("mongoose-unique-validator")


//configuration of mongoose
mongoose.set("useFindAndModify", false)
mongoose.set("useCreateIndex", true)

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true
    },
    passwordHash: {
        type:String,
        required:true
    }
})

userSchema.plugin(uniqueValidator)

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User=mongoose.model("User", userSchema)

module.exports = User

