const express = require("express");
const router = express.Router();
const Company = require("../database/models/company");
const auth = require("../middlewares/auth");

//ROUTE TO CREATE A NEW COMPANY PROFILE
router.post("/api/profile/company", auth, async (req, res) => {
  //Checking if the profile already exists
  const foundCompany = await Company.findOne({ user: req.user._id });
  if (foundCompany) {
    return res.status(400).send({ err: "Profile already exists" });
  }
  const company = new Company({ user: req.user._id, ...req.body });
  try {
    await company.save();
    await Company.populate(company, "user");
    res.status(201).send(company);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
