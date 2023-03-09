const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
async function getConnection() {
    await mongoose.connect('mongodb://localhost:27017/restapi');
    console.log("connection to DB success");
}

module.exports = getConnection;