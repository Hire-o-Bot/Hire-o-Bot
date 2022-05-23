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

//DELETE A JOB
router.delete("/api/jobs/delete", async (req, res) => {
  console.log("Delete a job");
});

//GET ALL THE JOBS
router.get("/api/jobs", async (req, res) => {
  console.log("Route Called");
  try {
    let allJobs = await Jobs.find();
    res.status(201).send(allJobs);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
