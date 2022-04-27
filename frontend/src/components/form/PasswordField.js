import { useState } from "react";
import { IconLock, IconEye, IconInvisible } from "../icons/index";

const PasswordField = ({ value, onChange, name, placeholder, label }) => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className='w-full relative mb-4 rounded-md overflow-hidden'>
      <div className='w-7 absolute top-1/2 -translate-y-1/2 left-4'>
        <IconLock fill='#444444' />
      </div>
      <input
        className='w-full py-2.5 pr-3 pl-14 border border-[#cccccc] outline-none'
        type={viewPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
      />
      <div className='w-6 cursor-pointer absolute top-1/2 -translate-y-1/2 right-4'>
        {viewPassword ? (
          <div onClick={() => setViewPassword(false)}>
            <IconInvisible fill='#444444' />
          </div>
        ) : (
          <div onClick={() => setViewPassword(true)}>
            <IconEye fill='#444444' />
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordField;
