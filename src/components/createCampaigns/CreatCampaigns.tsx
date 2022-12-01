
import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from '../../images/campaing/remove.svg'
import {useRef, useState } from 'react';
import axios from 'axios';
import { text } from 'stream/consumers';
import { title } from 'process';
type CreateCampaignsProps = {
  setOpenModal: Function
}
const CreatCampaigns = ({ setOpenModal }: CreateCampaignsProps) => {
  const post_title = useRef(null);
  const post_description = useRef(null);
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [os, setOs] = useState()
  const [details, setDetails] = useState ({
    title:'',
    description:''});
  const [fileName, setFileName] = useState<File>();
  const handlecheckBox=(evt: any)=> {
    console.log(evt.target.value)
    setOs(evt.target.value)

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value }
    })
    if (e.target.files) {
      setFileName(e.target.files[0]);
  };
}
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!fileName) {
      return;
    }
    
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts ",
      data: {details, fileName}
    }).then(({ data }) => {
      console.log("Succesfully uploaded: ", JSON.stringify(data));
    });
    console.log(details);
  }
  return (
    <div className="campaign-form">
      <form className="campian-form">
        <div className='campaignTitle'> 
        <div>
          <h3>Add New Feature</h3>
        </div>
        <div><h3>Select Devices</h3></div>
        </div>
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
          <input type="text" name='title'onChange={handleChange} placeholder="Enter title" />

          <div className='addTitle'><label>Add  Campaign Description</label></div>
          <input type="text" name="description" className='description' onChange={handleChange} placeholder="Enter description" />
        </div>
        <div className='uploadFile'> <h4>Upload Icon</h4></div>
        <div className="uploadIcon">
          <label> 
          <input type="file" name="file"   onChange={handleChange}  />
          <img
            src={upload} alt=""
            placeholder="Drag and Drop or browse to choose a file"
          />
           </label>
          <p>Drag and Drop or browse to choose a file</p>
          <div>{fileName && `${fileName.name}`}</div>
        </div>

        <div className="form-actions">
          <div className="btn-icons">
            <button>
              
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
