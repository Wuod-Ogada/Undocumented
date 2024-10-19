const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql2 = require("mysql2");
const path = require("path");
require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const author = require('./backend/routes/authorDash');
const users = require('./backend/routes/user');

const port = process.env.PORT || 3000;


app.listen(port, ()=>{
  console.log(`server listening to port ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressLayouts);

//route setting
app.use('/', author);
app.use('/', users)

app.set('layouts', path.join(__dirname, 'layouts'));
app.set('view engine', 'ejs' );
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));

const db = mysql2.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWORD,
  database: process.env.DB_NAME
});

db.getConnection((err, connection) =>{
  if (err) throw err;

  console.log('Connected to Undocumented_blog DB');
  connection.release();
});

