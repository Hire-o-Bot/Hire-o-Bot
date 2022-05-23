import { useState } from "react";
import TextField from "../../../form/TextField";
import SubmitButton from "../../../form/SubmitButton";
import Experience from "./Experience";
import Modal from "react-modal";
import Button from "../../../items/Button";
import { v4 as uuidv4 } from "uuid";
import TextBox from "../../../form/TextBox";

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

const ExperienceList = ({ experienceList = [], setExperienceList }) => {
  const [formData, setFormData] = useState({
    company: "",
    joinDate: "",
    endDate: "",
    position: "",
    description: "",
  });

  const handleDeleteExperience = (id) => {
    setExperienceList([...experienceList.filter((cur) => cur.id !== id)]);
  };

  const [openModal, setOpenModal] = useState(false);

  const { company, joinDate, endDate, position, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (
      !company.length ||
      !joinDate.length ||
      !endDate.length ||
      !position.length ||
      !description.length
    ) {
      return;
    }
    const id = uuidv4();
    setExperienceList([...experienceList, { ...formData, id }]);
    setFormData({
      company: "",
      joinDate: "",
      endDate: "",
      position: "",
      description: "",
    });
    setOpenModal(false);
  };

  return (
    <div className='mb-16'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8'>Experience</h2>
        <Button
          handleClick={(e) => setOpenModal(true)}
          value='Add New Experience'
        />
      </div>

      <div className='mb-8'>
        {experienceList && experienceList.length > 0 ? (
          experienceList.map((cur) => (
            <Experience
              company={cur.company}
              joinDate={cur.joinDate}
              endDate={cur.endDate}
              position={cur.position}
              description={cur.description}
              setExperienceList={setExperienceList}
              id={cur.id}
              handleDeleteExperience={() => handleDeleteExperience(cur.id)}
            />
          ))
        ) : (
          <p className='text-md text-[#555555]'>
            You haven't added your Experience details yet
          </p>
        )}
      </div>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={customStylesForModal}>
        <div className='py-5 px-8 flex justify-between items-center '>
          <h3 className='text-2xl font-bold'>Add new Experience</h3>
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
            Company Name
          </label>
          <TextField
            type='text'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            placeholder='Company'
            label='Company'
          />
          <label
            className='text-sm font-semibold text-[#001E2B] pl-3 uppercase mb-1.5 block'
            htmlFor='name'>
            Position
          </label>
          <TextField
            type='text'
            name='position'
            value={position}
            onChange={(e) => onChange(e)}
            placeholder='Position'
            label='Position'
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
            Description
          </label>
          <TextBox
            type='text'
            name='description'
            value={description}
            onChange={(e) => onChange(e)}
            placeholder='Description'
            label='Description'
          />

          <SubmitButton
            submitForm={(e) => handleFormSubmission(e)}
            value='Add Experience'
            alignRight={true}
          />
        </form>
      </Modal>
    </div>
  );
};

export default ExperienceList;
