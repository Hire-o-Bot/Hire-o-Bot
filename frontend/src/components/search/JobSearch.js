import { useState } from "react";
import TextField from "../form/TextField";
import SubmitButton from "../form/SubmitButton";
import Jobs from "./Jobs";

const JobSearch = () => {
  const [formData, setFormData] = useState({
    string: "",
  });
  const { string } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className=''>
      <div
        className='h-60 bg-cover bg-center '
        style={{ backgroundImage: "url('media/jobsearch.jpg')" }}>
        <div className='bg-gradient-to-tr from-[rgb(0,30,43,.8)] to-[rgb(0,30,43,.3)] h-full flex flex-col justify-center'>
          <h2 className='text-center text-4xl mb-8 font-semibold text-white'>
            Job Search
          </h2>
          <form className='max-w-3xl w-full mx-auto relative'>
            <div className='shadow-md rounded-md'>
              <TextField
                type='text'
                name='string'
                value={string}
                onChange={(e) => onChange(e)}
                placeholder='search...'
                label='Search'
              />
              <div className='absolute top-0 right-0'>
                <SubmitButton
                  submitForm={(e) => console.log("Click")}
                  value='Search'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='py-20 bg-[#eaeaea]'>
        <div className='w-4/5 mx-auto'>
          <h2 className='text-4xl text-center font-bold text-[#001E2B] mb-8'>
            Found Jobs...
          </h2>
        </div>
        <Jobs />
      </div>
    </div>
  );
};

export default JobSearch;
