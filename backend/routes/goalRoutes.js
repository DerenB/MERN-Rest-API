// ROUTES
const express = require('express')
const router = express.Router()

// GET REQUEST
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

// CREATE REQUEST
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set Goal' })
})

// UPDATE GOALS
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// DELETE REQUEST
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})


module.exports = router