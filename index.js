const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.kjpmx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  await client.connect();
  const taskCollection = client.db('todoDb').collection('taskCollection');

  try {
    app.post('/addtask', async (req, res) => {
      const task = req.body;
      const result = await taskCollection.insertOne(task);
      res.send(result);
    });

    app.get('/addtask', async (req, res) => {
      const query = {};
      const result = await taskCollection.find(query).toArray();
      res.send(result);
    });

  } finally {
  }
};

run().catch(console.dir);

app.listen(port, () => {
  console.log('App is listening at ', port);
});
