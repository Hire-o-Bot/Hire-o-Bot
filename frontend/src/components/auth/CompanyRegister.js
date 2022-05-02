import { useState } from "react";
import { CheckBox } from "../form/CheckBox";
import TextField from "../form/TextField";
import PasswordField from "../form/PasswordField";
import SubmitButton from "../form/SubmitButton";
import { register } from "../../state/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CompanyRegister = ({ register }) => {
  const navigate = useNavigate();
  const [companyCredentials, setCompanyCredentials] = useState({
    email: "",
    password: "",
    password2: "",
    role: "COMPANY",
  });

  const { email, password, password2, role } = companyCredentials;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (password === password2) {
      register(email, password, role, navigate);
    } else {
      console.log("Password do not match");
    }
  };

  const onChange = (e) => {
    setCompanyCredentials({
      ...companyCredentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#001E2B] bg-cover'>
      <form
        className='w-11/12 max-w-md p-10'
        onSubmit={(e) => handleFormSubmission(e)}>
        <h2 className='text-center text-4xl mb-8 font-semibold text-white'>
          Company Register
        </h2>
        <TextField
          type='text'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          placeholder='Email'
          label='Email'
          showIcon={true}
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
          dark={true}
        />
        <SubmitButton submitForm={handleFormSubmission} value='Register' />
        <p className='w-full text-center text-white'>
          Don't have an account?{" "}
          <Link
            className='font-semibold text-white hover:text-[#00ed64] transition'
            to='/login/company'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default connect(null, { register })(CompanyRegister);
