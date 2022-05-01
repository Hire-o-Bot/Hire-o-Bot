const mongoose = require("mongoose");

//DEFINING THE NEW JOB SCHEMA FOR NEW JOB MODEL
const jobSchema = mongoose.Schema({
  //DEFINING THE JOB POSITION PROPERTY
  jobPosition: {
    type: String,
    required: true,
    trim: true,
  },

  //DEFINING THE MINIMUM EXPERIENCE PROPERTY
  minExperience: {
    type: String,
    required: true,
    trim: true,
  },

  //DEFINING THE UPPER SALARY RANGE PROPERTY
  lowerRange: {
    type: String,
    require: true,
    trim: true,
  },

  //DEFINING THE LOWER SALARY RANGE PROPERTY
  upperRange: {
    type: String,
    require: true,
    trim: true,
  },

  //DEFINING JOB DESCRIPTION PROPERTY
  jobDescription: {
    type: String,
    require: true,
    trim: true,
  },

  //DEFINING TECHNOLOGIES PROPERTY
  technologies: {
    type: String,
    require: true,
    trim: true,
  },
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
