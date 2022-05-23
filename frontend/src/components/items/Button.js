const SubmitButton = ({
  handleClick,
  value,
  fullWidth = false,
  alignRight = false,
  type,
}) => {
  return (
    <div className={`${alignRight ? "flex justify-end" : null}`}>
      <button
        className={`${fullWidth ? "w-full" : null} py-2.5 px-4 inline-block ${
          type === "danger" ? "bg-[#ff726f] hover:bg-[#ff615d]" : "bg-[#00ed64]"
        }  text-white font-semibold tracking-wide cursor-pointer transition rounded-md overflow-hidden`}
        type='submit'
        onClick={handleClick}>
        {value}
      </button>
    </div>
  );
};
export default SubmitButton;
