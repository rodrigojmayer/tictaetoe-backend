const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tttSchema = new Schema({
    turn: {
        type: String,
        required: true
    },
    buttonsState: { 
        type: Array,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('TTT_model', tttSchema)