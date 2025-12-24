const mongoose = require("mongoose");

const taskModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isPrimary: {
        type: Boolean
    },
    endDate: {
        type: String,
        required: true
    },
    taskAddedDate: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("userTask",taskModel);