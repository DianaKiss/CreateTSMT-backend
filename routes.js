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

  let sql = `SELECT * FROM table`;
  conn.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });

});

// app.post()

module.exports = app;
