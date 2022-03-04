//FIELDS FOR GOAL RESOURCE


const mongoose = require('mongoose');
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timeStamps: true
})

// EXPORTS
module.exports = mongoose.model('Goal', goalSchema);