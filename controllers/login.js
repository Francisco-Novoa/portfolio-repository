//here go the imports
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require("../utils/config")

// import user model
const User = require("../models/users")

// creates the router
const loginRouter = require("express").Router()

//login route
loginRouter.post("/", async (request, response) => {

    //password and username validation
    const { username, password } = request.body
    if (!username || !password) return response.status(401).json({ error: "username or password missing" })

    //looks if the user is in the db
    const user = await User.findOne({ username: username })
    if (!user) return response.status(401).json({ error: "invalid username or password" })

    //compares both passwords
    const match = await bcrypt.compare(password, user.passwordHash)
    if (!match) return response.status(401).json({ error: "invalid username or password" })

    //creates and signs the token
    const token = jwt.sign( { username: user.username, id: user.id } , config.SECRET)

    //sends the token back and user data
    response.status(200).send({ token, username: user.username, id: user.id })
})

module.exports = loginRouter