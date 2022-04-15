const SubmitButton = ({ submitForm }) => {
  return (
    <input
      className='w-full p-3 mb-4 bg-[#2A2A4A] text-white font-semibold tracking-wide cursor-pointer hover:bg-[#1A1A3C] transition'
      type='submit'
      onClick={(e) => submitForm(e)}
    />
  );
};
export default SubmitButton;
