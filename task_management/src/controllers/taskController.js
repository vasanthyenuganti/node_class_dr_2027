const Task = require("../models/taskModel")


const addTask = async (req, res) => {
    try {
        const { title, description, isPrimary, endDate } = req.body;
        const task = new Task({
            title: title,
            description: description,
            isPrimary: isPrimary == undefined ? false : isPrimary,
            endDate: endDate
        });

        await task.save();
        res.status(201).json(task);


    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addTask }