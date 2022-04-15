import { useState } from "react";
import { CheckBox } from "../form/CheckBox";
import EmailField from "../form/EmailField";
import PasswordField from "../form/PasswordField";
import SubmitButton from "../form/SubmitButton";

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = userCredentials;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (password === password2) {
      console.log(userCredentials);
    } else {
      console.log("Password do not match");
    }
  };

  const onChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#EFEFEF]'>
      <form className='w-1/3 p-10' onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className='text-center text-3xl mb-8 font-semibold'>Register</h2>
        <EmailField
          type='text'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          placeholder='Email'
          label='Email'
        />
        <PasswordField
          type='password'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          placeholder='Password'
          label='Password'
        />
        <PasswordField
          type='password'
          name='password2'
          value={password2}
          onChange={(e) => onChange(e)}
          placeholder='Confirm Password'
          label='Password'
        />
        <CheckBox
          label='I agree to Terms and Conditions'
          id='password'
          value='rememberpassword'
        />
        <SubmitButton submitForm={handleFormSubmission} />
        <p className='w-full text-center'>
          Don't have an account?{" "}
          <a className='font-semibold hover:text-[#2A2A4A]' href='/login'>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
