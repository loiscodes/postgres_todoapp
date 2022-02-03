const MAIN_PATH = '/api'

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const pgp = require("pg-promise")();
const app = express();
const PORT = 3000;
const db = pgp("postgres://localhost:5505/todoapp");

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Used to connect to the Javascript file which is being sourced in the index.ejs file
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

// Our main page
app.get("/", async (_, res) => {
    res.render('index');
});

// GETs, POSTs, PUTs, DELETEs

app.listen(PORT, () => {
    console.log(`Express application is running on port ${PORT}`);
  });