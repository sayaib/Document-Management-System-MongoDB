const dotenv = require('dotenv')
const express = require('express');
const app = express();
const path = require('path');


dotenv.config({
    path: './config.env'
})

app.use(express.static(path.join(__dirname, 'documents')));


require('./database/connection')

app.use(express.json({
    limit: '10mb'
}))
// app.use(express.json())
// app.use(express.limit(100000000));

app.use(require(path.join(__dirname, './controller/auth')));


//build folder path
app.use(express.static(path.join(__dirname, 'build')));

// index file path
app.get('/*', (req, res) => {
    return res.status(200).sendFile(__dirname + '/build/index.html')
})


app.get('/', (req, res) => {
    return res.status(200).sendFile(__dirname + '/build/index.html')
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT} `)
})