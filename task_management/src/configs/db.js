const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://db_user:Zejofa5obk0jm2e5@task.mmeddea.mongodb.net/task");
        console.log(`Connected to Mongo ${mongoose.connection.name}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToDB