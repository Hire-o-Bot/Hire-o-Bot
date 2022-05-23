const express = require("express");
const Jobs = require("../database/models/jobs");
const router = new express.Router();

// Create a new job
router.post("/api/addnewjob", async (req, res) => {
  const job = new Jobs(req.body);
  try {
    await job.save();
    res.status(201).send(job);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
