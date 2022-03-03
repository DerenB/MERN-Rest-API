const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

// EXPORTS
module.exports = {
    getGoals
}