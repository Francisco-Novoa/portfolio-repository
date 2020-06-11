//library imports
const emailHandler = require("../utils/email")

//create the router function
const emailRouter = require("express").Router()

emailRouter.post("/",async (request,response) => {
    //grabs the sender,subject,body.
    const {sender,subject,body}=request.body

    //checks if everything arrived
    if(!sender)return response.status(400).send({ error: "sender missing" })
    if(!subject)return response.status(400).send({ error: "subject missing" })
    if(!body)return response.status(400).send({ error: "body missing" })

    try {
        await emailHandler(sender,subject,body)
        response.status(200).json({message:"message sent"})
    } catch (error) {
        response.status(400).json({error:"problem sending the message"})
    }

})

module.exports=emailRouter