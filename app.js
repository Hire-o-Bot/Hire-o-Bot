const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./database/mongoose");

const userRouter = require("./routes/user");
const jobRouter = require("./routes/jobs");
const companyRouter = require("./routes/company");

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(jobRouter);
app.use(companyRouter);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
