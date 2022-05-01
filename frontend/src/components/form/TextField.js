import { IconEmail } from "../icons/index";
const TextField = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  showIcon = false,
  disabled = false,
}) => {
  return (
    <div className='w-full relative mb-4 rounded-md overflow-hidden'>
      {showIcon ? (
        <div className='w-7 absolute top-1/2 -translate-y-1/2 left-4'>
          <IconEmail fill='#444444' />
        </div>
      ) : null}

      <input
        className={`w-full py-2.5 pr-3 ${
          showIcon ? "pl-14" : "pl-3"
        } border border-[#cccccc] outline-none rounded-md ${
          disabled ? "bg-[#eaeaea]" : "bg-white"
        }`}
        type='text'
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
