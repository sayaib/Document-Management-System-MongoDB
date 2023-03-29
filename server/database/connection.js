const mongoose = require('mongoose')
const DB = process.env.DATABASE;

//connection with database
mongoose.connect(DB).then(() => {
    console.log("MongoDB Connection Successful")
}).catch((error) => {
    console.log("No connection")
})
