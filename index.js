const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log('App is listening at ', port);
});
