import { useState } from "react";
import TextField from "../../form/TextField";
import SubmitButton from "../../form/SubmitButton";
import { connect } from "react-redux";
import EducationList from "./Education/EducationList";
import ExperienceList from "./Experience/ExperienceList";
import { useNavigate } from "react-router-dom";
import Skills from "./skills/Skills";
import { createProfile } from "../../../state/actions/candidateProfile";

const Dashboard = ({ createProfile, isLoading, userEmail }) => {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    portfolio: "",
    phone: "",
    linkedIn: "",
    github: "",
  });

  const { fullname, portfolio, phone, linkedIn, github } = personalInfo;

  const onChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleFormSubmission = (e) => {
    console.log({ ...personalInfo, educationList, experienceList, skills });
    createProfile(
      personalInfo,
      educationList,
      experienceList,
      skills,
      navigate
    );
  };

  return (
    <div className='min-h-screen py-16 bg-[#eaeaea]'>
      <div className='w-[85%] mx-auto'>
        <h1 className='text-4xl font-bold'>Setup your Profile</h1>
        <div className='w-full h-[1px] bg-[#cccccc] mt-5 mb-8'></div>
        <div className='flex items-center justify-between mb-16'>
          <div className='w-40 h-40 rounded-full overflow-hidden'>
            <img
              src='/media/img-placeholder.jpeg'
              alt='Profile Icon Placeholder'
            />
          </div>
        </div>
        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-8'>Personal Info</h2>
          <form>
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Full Name
            </label>
            <TextField
              type='text'
              name='fullname'
              value={fullname}
              onChange={(e) => onChange(e)}
              placeholder='Full Name'
              label='Full Name'
            />

            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Portfolio Link
            </label>
            <TextField
              type='text'
              name='portfolio'
              value={portfolio}
              onChange={(e) => onChange(e)}
              placeholder='Portfolio'
              label='Portfolio'
            />
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Github Link
            </label>
            <TextField
              type='text'
              name='github'
              value={github}
              onChange={(e) => onChange(e)}
              placeholder='Github'
              label='Github'
            />
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              LinkedIn Profile
            </label>
            <TextField
              type='text'
              name='linkedIn'
              value={linkedIn}
              onChange={(e) => onChange(e)}
              placeholder='LinkedIn'
              label='LinkedIn'
            />
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Phone
            </label>
            <TextField
              type='text'
              name='phone'
              value={phone}
              onChange={(e) => onChange(e)}
              placeholder='Phone'
              label='Phone'
            />
          </form>
        </div>
        <div className=''>
          <EducationList
            educationList={educationList}
            setEducationList={setEducationList}
          />
        </div>
        <div className=''>
          <ExperienceList
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          />
        </div>
        <div className='mb-4'>
          <h2 className='text-3xl font-bold mb-8'>Skills and Technologies</h2>
          <Skills skillsList={skills} setSkillsList={setSkills} />
        </div>
        <div>
          <SubmitButton
            submitForm={(e) => handleFormSubmission(e)}
            value='Create Profile'
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  userEmail: state.auth.user.email,
});

export default connect(mapStateToProps, { createProfile })(Dashboard);
