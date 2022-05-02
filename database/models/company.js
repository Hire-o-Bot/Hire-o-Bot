const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  //REFERENCE TO USER
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //NAME OF THE COMPANY
  name: {
    type: String,
    trim: true,
    required: true,
  },
  //DESCRIPTION
  description: {
    type: String,
    trim: true,
  },
  //WEBSITE URL OF COMPANY
  website: {
    type: String,
    trim: true,
  },
  //PHONE NUMBER OF COMPANY
  phone: {
    type: String,
    trim: true,
  },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
