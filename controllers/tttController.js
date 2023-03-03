const TTT_model = require('../models/ttt_model')
const mongoose = require('mongoose')

// get all ttt
const getTTTs = async (req, res) => {
    const ttt_model = await TTT_model.find({}).sort({createdAt: -1})

    res.status(200).json(ttt_model)
}

// get a single ttt
const getTTT = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    const ttt_model = await TTT_model.findById(id)

    if (!ttt_model) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    res.status(200).json(ttt_model)
}

// create new ttt
const createTTT = async (req, res) => {
    const {title, load, reps} = req.body
    
    // add doc to db
    try {
        const ttt_model = await TTT_model.create({title, load, reps})
        res.status(200).json(ttt_model)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a ttt
const deleteTTT = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    const ttt_model = await TTT_model.findOneAndDelete({_id: id})

    if (!ttt_model) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    res.status(200).json(ttt_model)
}

// update a ttt
const updateTTT = async (req, res) => {
    const {id} = req.params
    

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    const ttt_model = await TTT_model.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!ttt_model) {
        return res.status(404).json({error: 'No such ttt_model'})
    }

    res.status(200).json(ttt_model)
}


module.exports = {
    createTTT,
    getTTTs,
    getTTT,
    deleteTTT,
    updateTTT
}