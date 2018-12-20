const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
}));


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});


// exports module
module.exports = router;
  