import { useState } from "react";
import { CheckBox } from "../form/CheckBox";
import EmailField from "../form/EmailField";
import PasswordField from "../form/PasswordField";
import SubmitButton from "../form/SubmitButton";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#EFEFEF]'>
      <form className='w-1/3 p-10' onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className='text-center text-3xl mb-8 font-semibold'>Log In</h2>
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
        <CheckBox
          label='Remember my password'
          id='password'
          value='rememberpassword'
        />
        <SubmitButton />
        <p className='w-full text-center'>
          Don't have an account?{" "}
          <a className='font-semibold hover:text-[#2A2A4A]' href='/register'>
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
