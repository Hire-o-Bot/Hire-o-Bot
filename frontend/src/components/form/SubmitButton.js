const SubmitButton = ({
  submitForm,
  value,
  fullWidth = false,
  alignRight = false,
}) => {
  return (
    <div className={`${alignRight ? "flex justify-end" : null}`}>
      <input
        className={`${
          fullWidth ? "w-full" : "inline-block"
        } py-2.5 px-4 mb-4 bg-[#00ed64] text-white font-semibold tracking-wide cursor-pointer hover:bg-[#00ed64] transition rounded-md overflow-hidden`}
        type='submit'
        onClick={(e) => submitForm(e)}
        value={value}
      />
    </div>
  );
};
export default SubmitButton;
