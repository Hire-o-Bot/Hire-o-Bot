const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./database/mongoose");

const userRouter = require("./routes/user");
const companyRouter = require("./routes/company");
const candidateRouter = require("./routes/candidate");

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(companyRouter);
app.use(candidateRouter);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
