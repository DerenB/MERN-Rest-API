
const asyncHandler = require('express-async-handler');

// @desc    GET GOALS
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' });
})

// @desc    SET GOAL
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        // 400 ERROR STATUS
        res.status(400);
        throw new Error('Please add a text field.');
    }
    res.status(200).json({ message: 'Set Goal' });
})

// @desc    UPDATE GOAL
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
})

// @desc    DELETE GOAL
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
})

// EXPORTS
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}