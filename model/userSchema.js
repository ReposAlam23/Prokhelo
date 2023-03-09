const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true }
})

const user = mongoose.model("usersDetail", userSchema)

module.exports = user