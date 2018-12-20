const mongoose = require('mongoose');
const genres = require('./routes/genres');
const express = require('express');
const app = express();


// connect to mongodb
mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


// path
app.use(express.json());
app.use('/api/genres', genres);


// call serve
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));