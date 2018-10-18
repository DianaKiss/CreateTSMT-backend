'use strict';

// import { express } from 'express';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.use(express.json())

const connection = mysql.createConnection({


});

app.get('/api/excercises', (req, res) => {

});

// app.post()

module.exports = app;
