require('dotenv').config();
const express = require('express');
const path = require('path');
// const db = require('./db.js')
const morgan = require('morgan');

const app = express();
app.listen(process.env.PORT, console.log(`listening on Port: ${process.env.PORT}`))

app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.json());
app.use(morgan('dev'))