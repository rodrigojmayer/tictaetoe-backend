const express = require('express')
const {
    createTTT,
    getTTTs,
    getTTT,
    deleteTTT,
    updateTTT
} = require('../controllers/tttController')

const router = express.Router()

// GET all ttt docs
router.get('/', getTTTs)

// GET a single ttt
router.get('/:id', getTTT)

// POST a new ttt
router.post('/', createTTT)

// DELETE a ttt
router.delete('/:id', deleteTTT)

// UPDATE a ttt
router.patch('/:id', updateTTT)

module.exports = router