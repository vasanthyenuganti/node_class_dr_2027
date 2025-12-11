// get data by roll

const getUserByRoll = (req, res) => {
    try {
        const roll = req.params.roll;
        res.send({ roll_number: roll });

    } catch (error) {
        res.send({ message: error.message })
    }
}

// add new user

// export default getUserByRoll;

module.exports = { getUserByRoll }