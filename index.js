// const mongoose = require('mongoose');
// const genres = require('./routes/genres');


const express = require('express');
const app = express();



// test call serve

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));