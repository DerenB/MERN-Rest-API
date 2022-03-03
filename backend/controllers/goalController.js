// @desc    GET GOALS
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

// @desc    SET GOAL
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set Goal' })
}

// @desc    UPDATE GOAL
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc    DELETE GOAL
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

// EXPORTS
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}