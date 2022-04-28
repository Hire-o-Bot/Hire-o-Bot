const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

//Connecting to database
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to database"))
  .catch(() => console.error("Error connecting to database"));
