const express=require("express")
const app=express();



const db = require('./config/database');
const port = process.env.PORT || 8000;
const router = require("./routes/index")
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(router);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});