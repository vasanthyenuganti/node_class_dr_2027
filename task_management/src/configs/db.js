const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/task");
        console.log(`Connected to Mongo ${mongoose.connection.name}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToDB