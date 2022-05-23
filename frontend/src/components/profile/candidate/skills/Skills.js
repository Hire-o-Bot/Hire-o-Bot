import { useState } from "react";
import TextField from "../../../form/TextField";
import SubmitButton from "../../../form/SubmitButton";

const Skills = ({ skillsList, setSkillsList }) => {
  const [formData, setFormData] = useState({
    skill: "",
  });

  const { skill } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e) => {
    console.log("before Submission");
    e.preventDefault();
    setSkillsList([...skillsList, { skill }]);
    console.log(skillsList);
    setFormData({ skill: "" });
  };

  return (
    <div>
      <div className='flex mb-3'>
        {skillsList &&
          skillsList.length > 0 &&
          skillsList.map((cur) => (
            <div className='py-1.5 px-2.5 border border-[#cccccc] bg-[#abedb6] mr-1 rounded-md'>
              {cur.skill}
            </div>
          ))}
      </div>

      <form onSubmit={(e) => handleFormSubmission(e)} className='flex'>
        <TextField
          type='text'
          name='skill'
          value={skill}
          onChange={(e) => onChange(e)}
          placeholder='Add Skill'
          label='Add Skill'
        />

        <div className='ml-3'>
          <SubmitButton
            submitForm={(e) => handleFormSubmission(e)}
            value='Add'
          />
        </div>
      </form>
    </div>
  );
};

export default Skills;
