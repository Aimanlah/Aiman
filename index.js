const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3004; // Change the port number

app.use(express.json());

//new user registration
app.post('/user:username', async (req, res) => {
  //console.log(req.body);

  //insertOne
  let result = await clientdb.db('Maybank').collection('users').insertOne({
    username: req.body.username,  
    password: req.body.password,
    name: req.body.name,
    email: req.body.email
  });

  res.send(result);
});

//get user profile
app.get('/user', (req, res) => {
  //findOne
  console.log("get user profile");
});

//update user account
app.patch('/user', (req, res) => {
  //updateOne
  console.log("update user account");
});

//delete user account
app.delete('/user', (req, res) => {
  //deleteOne
  console.log("delete user account");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const uri = "mongodb+srv://Aiman:Aiman@aiman.tycm03i.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    // Perform necessary actions, if any, when connection is closed
  }
}
run().catch(console.dir);
