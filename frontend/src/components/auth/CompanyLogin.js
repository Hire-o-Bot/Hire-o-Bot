import { useState } from "react";
import { CheckBox } from "../form/CheckBox";
import EmailField from "../form/EmailField";
import PasswordField from "../form/PasswordField";
import SubmitButton from "../form/SubmitButton";
import { login } from "../../state/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CompanyLogin = ({ login }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-[#001E2B] bg-cover'
      style={{ backgroundImage: `url("/media/auth-bg.png")` }}>
      <form className='w-1/3 p-10' onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className='text-center text-4xl mb-8 font-semibold text-white'>
          Company Log In
        </h2>
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
        <SubmitButton submitForm={handleFormSubmission} value='Log In' />
        <p className='w-full text-center text-white'>
          Don't have an account?{" "}
          <Link
            className='font-semibold text-white hover:text-[#00ed64] transition'
            to='/register/company'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default connect(null, { login })(CompanyLogin);
