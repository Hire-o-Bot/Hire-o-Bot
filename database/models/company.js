const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//DEFINING THE COMPANY SCHEMA
const companySchema = mongoose.Schema({
  //COMPANY NAME
  name: {
    type: String,
    trim: true,
    required: [true, "Company Name is required"],
  },

  //COMPANY EMAIL
  email: {
    type: String,
    trim: true,
    required: [true, "Company Email is required"],
    unique: [true, "Email is already taken"],
    validate(value) {
      //USING VALIDATOR NPM PACKAGE TO VALIDATE EMAIL
      if (!validator.isEmail(value)) {
        throw new Error("The email you provided is not a valid Email");
      }
    },
  },

  //PASSWORD FOR THE EMAIL
  password: {
    type: String,
    trim: true,
    required: true,
  },

  //AUTHENTICATION TOKENS
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

companySchema.methods.generateAuthToken = async function () {
  const company = this;
  const token = jwt.sign(
    { _id: company._id.toString() },
    "thisiscompanyverification"
  );

  company.tokens = company.tokens.concat({ token });
  await company.save();

  return token;
};

companySchema.statics.findByCredentials = async (email, password) => {
  const company = await Company.findOne({ email });
  if (!company) {
    throw new Error("Invalid Credentials");
  }
  const validPassword = await bcrypt.compare(password, company.password);
  if (validPassword) {
    return company;
  } else {
    throw new Error("Invalid Credentials");
  }
};

companySchema.pre("save", async function (next) {
  const company = this;
  if (company.isModified("password")) {
    company.password = await bcrypt.hash(company.password, 8);
  }
  next();
});

const Company = mongoose.model("Company", companySchema);
