import { IconEmail } from "../icons/index";
const EmailField = ({ value, onChange, name, placeholder, label }) => {
  return (
    <div className='w-full relative mb-4'>
      <div className='w-7 absolute top-1/2 -translate-y-1/2 left-4'>
        <IconEmail fill='#444444' />
      </div>

      <input
        className='w-full py-3 pr-3 pl-14 border border-[#cccccc] outline-none'
        type='text'
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default EmailField;
