'use strict';

require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.use(express.json());

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/api/exercises', (req, res) => {

  let sql = `SELECT * FROM tsmt_data.exercises;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });

});

app.post('/api/exercises', (req, res) => {
  let {picUrl, description, category, effect} = req.body;
  let sql = `INSERT INTO tsmt_data.exercises (Pic_URL, Description, Category, Effect) VALUES ('${picUrl}', '${description}', '${category}', '${effect}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: 'OK',
    });
  });
});

// app.delete('api/exercises', (req, res) => {
//   let sql = `DELETE FROM tsmt_data.exercises WHERE id_exercises='2';`;

// });

module.exports = app;
