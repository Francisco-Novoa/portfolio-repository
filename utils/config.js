require("dotenv").config()

let PORT = process.env.PORT
let MONGODB_URI= process.env.MONGODB_URI
let SECRET = process.env.MONGODB_URI
let MAILJET0 = process.env.MAILJET0
let MAILJET1 = process.env.MAILJET0

if (process.env.NODE_ENV === "test"){
    MONGODB_URI = process.env.TEST_MONGODB_URI
}


module.exports={
    PORT,
    MONGODB_URI,
    SECRET,
    MAILJET0,
    MAILJET1
}