import { useState } from "react";
import TextField from "../../../form/TextField";
import SubmitButton from "../../../form/SubmitButton";
import { Education } from "./Education";
import Modal from "react-modal";
import Button from "../../../items/Button";
import { v4 as uuidv4 } from "uuid";

const customStylesForModal = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "1px solid #cccccc",
    borderTop: "7px solid #001E2B",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
  },
  overlay: {
    backdropFilter: "blur(5px)",
  },
};

const EducationList = ({ educationList = [], setEducationList }) => {
  const [formData, setFormData] = useState({
    institute: "",
    joinDate: "",
    endDate: "",
    degree: "",
    marks: "",
  });

  const handleDeleteEducation = (id) => {
    setEducationList([...educationList.filter((cur) => cur.id !== id)]);
  };

  const [openModal, setOpenModal] = useState(false);

  const { institute, joinDate, endDate, degree, marks } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (
      !institute.length ||
      !joinDate.length ||
      !endDate.length ||
      !degree.length ||
      !marks.length
    ) {
      return;
    }
    const id = uuidv4();
    setEducationList([...educationList, { ...formData, id }]);
    setFormData({
      institute: "",
      joinDate: "",
      endDate: "",
      degree: "",
      marks: "",
    });
    setOpenModal(false);
  };

  return (
    <div className='mb-16'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8'>Education</h2>
        <Button
          handleClick={(e) => setOpenModal(true)}
          value='Add New Education'
        />
      </div>

      <div className='mb-8'>
        {educationList && educationList.length > 0 ? (
          educationList.map((cur) => (
            <Education
              institute={cur.institute}
              joinDate={cur.joinDate}
              endDate={cur.endDate}
              marks={cur.marks}
              degree={cur.degree}
              setEducationList={setEducationList}
              id={cur.id}
              handleDeleteEducation={() => handleDeleteEducation(cur.id)}
            />
          ))
        ) : (
          <p className='text-md text-[#555555]'>
            You haven't added your Education details yet
          </p>
        )}
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={customStylesForModal}>
        <div className='py-5 px-8 flex justify-between items-center '>
          <h3 className='text-2xl font-bold'>Add a New Education</h3>
          <button
            onClick={() => setOpenModal(false)}
            className='text-sm uppercase font-bold hover:text-[#ff615d] transition cursor-pointer'>
            x Close
          </button>
        </div>
        <div className='h-[1px] bg-[#cccccc] w-full'></div>
        <form className='py-5 px-8'>
          <label
            className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
            htmlFor='name'>
            Institute Name
          </label>
          <TextField
            type='text'
            name='institute'
            value={institute}
            onChange={(e) => onChange(e)}
            placeholder='Institute'
            label='Institute'
          />
          <label
            className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
            htmlFor='name'>
            Degree Name
          </label>
          <TextField
            type='text'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            placeholder='Degree Name'
            label='Degree'
          />
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label
                className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
                htmlFor='name'>
                Joining Date
              </label>
              <TextField
                type='text'
                name='joinDate'
                value={joinDate}
                onChange={(e) => onChange(e)}
                placeholder='Join Date'
                label='Join Date'
              />
            </div>
            <div>
              <label
                className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
                htmlFor='name'>
                End Date
              </label>
              <TextField
                type='text'
                name='endDate'
                value={endDate}
                onChange={(e) => onChange(e)}
                placeholder='End Date'
                label='End Date'
              />
            </div>
          </div>
          <label
            className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
            htmlFor='name'>
            Obtained Marks
          </label>
          <TextField
            type='text'
            name='marks'
            value={marks}
            onChange={(e) => onChange(e)}
            placeholder='Obtained Marks (CGPA, %)'
            label='Marks'
          />

          <SubmitButton
            submitForm={(e) => handleFormSubmission(e)}
            value='Add Education'
            alignRight={true}
          />
        </form>
      </Modal>
    </div>
  );
};

export default EducationList;
