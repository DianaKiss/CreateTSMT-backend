'use strict';

// import { express } from 'express';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.use(express.json());

const conn = mysql.createConnection({
  
});

app.get('/api/excercises', (req, res) => {

  let sql = `SELECT * FROM tsmt_data.excercises;`;
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

app.post('/api/excercises', (req, res) => {
  let {picUrl, description, category, effect} = req.body;
  let sql = `INSERT INTO tsmt_data.excercises (Pic_URL, Description, Category, Effect) VALUES ('${picUrl}', '${description}', '${category}', '${effect}');`;
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

// app.delete('api/excercises', (req, res) => {
//   let sql = `DELETE FROM tsmt_data.excercises WHERE id_excercises='2';`;

// });

module.exports = app;
