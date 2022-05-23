import SalaryBox from "./SalaryInputBox";
import React from "react";

const ExpectedSalary = ({ onChange, lowerRange, upperRange }) => {
  return (
    <div className='pl-8 pt-5 w-full pr-8 flex flex-row justify-between items-center'>
      <h1 className='font-medium text-[#333333] text-base '>
        Expected Salary Between
      </h1>

      <SalaryBox
        onChange={onChange}
        name='lowerRange'
        value={lowerRange}
        placeholder='Lower Range'
        label='Lower Range'
      />

      <h1 className='font-medium text-[#333333] text-base '>And</h1>

      <SalaryBox
        onChange={onChange}
        name='upperRange'
        value={upperRange}
        placeholder='Upper Range'
        label='Upper Range'
      />
    </div>
  );
};

export default ExpectedSalary;
