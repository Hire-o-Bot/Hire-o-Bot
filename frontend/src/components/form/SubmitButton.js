const SubmitButton = ({ submitForm, value }) => {
  return (
    <input
      className='w-full p-2.5 mb-4 bg-[#00ed64] text-white font-semibold tracking-wide cursor-pointer hover:bg-[#00ed64] transition rounded-md overflow-hidden'
      type='submit'
      onClick={(e) => submitForm(e)}
      value={value}
    />
  );
};
export default SubmitButton;
