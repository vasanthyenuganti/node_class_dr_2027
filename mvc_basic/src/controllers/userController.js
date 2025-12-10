

const addUser = (req, res) => {
    try {
        const { roll, name } = req.body;
        //
        res.send({
            rollNumber: roll,
            firstName: name
        });
    } catch (error) {
        res.send({ message: error.message })
    }
}

const getUserByRoll = (req, res) => {
    try {
        res.send({ roll: `${req.params.roll}` })
    } catch (error) {
        res.send({ message: error.message });
    }
}

module.exports = { addUser, getUserByRoll};