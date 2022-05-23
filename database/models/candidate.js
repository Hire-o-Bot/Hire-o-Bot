const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  //CANDIDATE NAME
  name: {
    type: String,
    required: true,
    trim: true,
  },

  //WEBSITE LINK FOR PORTFOLIO
  portfolio: {
    type: String,
    trim: true,
  },

  //LINKEDIN PROFILE LINK
  linkedIn: {
    type: String,
    required: true,
    trim: true,
  },

  //Phone of Candidate
  phone: {
    type: String,
    trim: true,
  },

  //GITHUB PROFILE URL
  github: {
    type: String,
    trim: true,
  },

  //EDUCATION ARRAY
  education: [
    {
      institute: {
        type: String,
        required: true,
      },
      joinDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      marks: {
        type: String,
        required: true,
      },
    },
  ],

  //EXPERIENCE ARRAY
  experience: [
    {
      company: {
        type: String,
        required: true,
        trim: true,
      },
      joinDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],

  //SKILLS
  skills: [
    {
      skill: {
        type: String,
        required: true,
      },
    },
  ],
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
