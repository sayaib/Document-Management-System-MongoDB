const mongoose = require('mongoose')



// Create user schema for storing the data of Users
const vendorDetails = new mongoose.Schema({
    name: {
        type: String,
    },
    surname: {
        type: String
    },
    id: {
        type: String
    }
})

const VendorDetailsSchema = new mongoose.model('VendorDetailsSchemas', vendorDetails)

module.exports = VendorDetailsSchema;