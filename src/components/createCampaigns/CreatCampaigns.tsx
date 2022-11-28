
import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from '../../images/campaing/remove.svg'
import { useState } from 'react';

type CreateCampaignsProps = {
  setOpenModal: Function
}
const CreatCampaigns = ({ setOpenModal }: CreateCampaignsProps) => {
  const [os, setOs] = useState("All")
  const campaignData = [{
    campaignTitle: "",
    campaignDescription: "",
    campaignFile: ""
  }]
  const [details, setDetails] = useState(campaignData);
  const [fileName, setFileName] = useState("No Selected File ")

  function handlecheckBox(evt: any) {
    console.log(evt.target.value)
    setOs(evt.target.value)
    console.log(details);

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDetails((prev) => {
      return { ...prev, [name]: value };

    })

  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(details);
  }

  return (
    <div className="campaign-form">
      <form className="campian-form">
        <div className="heading">
          <h2>Create New Campaign</h2>
        </div>
        <div className='subheading'>
          <h3>Select Devices</h3></div>
        <div className="os-check">
          <label>
            <input
              type="checkbox"
              checked={os === "All"}
              value="All"
              onChange={handlecheckBox}
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              checked={os === "web"}
              value="web"
              onChange={handlecheckBox}
            />
            Web
          </label>
          <label>
            <input
              type="checkbox"
              checked={os === "Android"}
              value="Android"
              onChange={handlecheckBox}
            />
            Android
          </label>
          <label>
            <input
              type="checkbox"
              checked={os === "iOS"}
              value="iOS"
              onChange={handlecheckBox}
            />
            iOS
          </label>
          <label>
            <input
              type="checkbox"
              checked={os === "Corprate"}
              value="Corprate"
              onChange={handlecheckBox}
            />
            Corprate
          </label>
        </div>
        <div className="input-box ">
          <div className='addTitle'> <label>Add Campaign Title</label></div>
          <input type="text" name='campaignTitle'onChange={handleChange} placeholder="Enter title" />

          <div className='addTitle'><label>Add  Campaign Description</label></div>
          <input type="text" name='campaignDescription' className='description' onChange={handleChange} placeholder="Enter description" />
        </div>
        <div className='uploadFile'> <h4>Upload Icon</h4></div>
        <div className="uploadIcon">
          <label> 
          <input type="file" onChange={handleChange}  />
          <img
            src={upload}
            alt=""
            placeholder="Drag and Drop or browse to choose a file"
          />
           </label>
          <p>Drag and Drop or browse to choose a file</p>
           
        </div>

        <div className="form-actions">
          <div className="btn-icons">
            <button>
              {" "}
              <img src={removeIcon} alt="Remove" />{" "}
              <span>Remove</span>
            </button>
          </div>
          <div className="action-right">
            <div>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
            <div>
              <button onClick={handleSubmit}>  Create </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatCampaigns;
