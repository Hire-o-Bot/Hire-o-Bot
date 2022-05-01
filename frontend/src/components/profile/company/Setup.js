import { useState } from "react";
import TextField from "../../form/TextField";
import SubmitButton from "../../form/SubmitButton";
import TextBox from "../../form/TextBox";
const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    phone: "",
    email: "ahmadzaheerdev@gmail.com",
  });

  const { name, description, website, phone, email } = formData;

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <div className='min-h-screen py-16 flex items-center justify-center bg-[#001E2B]'>
      <div className='w-4/5 max-w-3xl border border-[#cccccc] border-t-8 rounded-md shadow-lg bg-white'>
        <div className='py-5 px-8'>
          <h1 className='text-2xl font-bold'>Setup your Company's Profile</h1>
        </div>
        <div className='h-[1px] bg-[#cccccc] w-full'></div>
        <div className='py-8 px-8'>
          <form className='' onSubmit={(e) => handleFormSubmission(e)}>
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Name
            </label>
            <TextField
              type='text'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              placeholder='Name'
              label='Name'
            />
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Description
            </label>
            <TextBox
              type='text'
              name='description'
              value={description}
              onChange={(e) => onChange(e)}
              placeholder='Description'
              label='Description'
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
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Website
            </label>
            <TextField
              type='text'
              name='website'
              value={website}
              onChange={(e) => onChange(e)}
              placeholder='Website'
              label='Website'
            />
            <label
              className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
              htmlFor='name'>
              Email Address
            </label>
            <TextField
              type='text'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              placeholder={email}
              label='email'
              showIcon={true}
              disabled={true}
            />
            <SubmitButton
              submitForm={handleFormSubmission}
              value='Create Profile'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
