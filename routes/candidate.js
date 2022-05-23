const express = require("express");
const router = express.Router();
const Candidate = require("../database/models/candidate");
const auth = require("../middlewares/auth");

//ROUTE TO CREATE A NEW CANDIDATE PROFILE
router.post("/api/profile/candidate", auth, async (req, res) => {
  //Checking if the profile already exists
  const foundCandidate = await Candidate.findOne({ user: req.user._id });
  if (foundCandidate) {
    return res.status(400).send({ err: "Profile already exists" });
  }
  const candidate = new Candidate({ user: req.user._id, ...req.body });
  try {
    await candidate.save();
    await Candidate.populate(candidate, "user");
    res.status(201).send(candidate);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
