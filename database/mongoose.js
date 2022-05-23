const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose
  .connect(
    "mongodb://hireobot:ahmadzaheer32@fyp-shard-00-00.wz5mc.mongodb.net:27017,fyp-shard-00-01.wz5mc.mongodb.net:27017,fyp-shard-00-02.wz5mc.mongodb.net:27017/fyp?ssl=true&replicaSet=atlas-ghms2l-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
