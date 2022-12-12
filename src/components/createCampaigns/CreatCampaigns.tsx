import "./createCampaigns.css";
import upload from "../../images/campaing/upload.svg";
import removeIcon from "../../images/campaing/remove.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import internal from "stream";
import { isNullishCoalesce } from "typescript";
// import Campaigns from "../createCampaigns/createFormvalidation";
type CreateCampaignsProps = {
  setOpenModal: Function;
  
};
 
 
  
const CreatCampaigns = ({ setOpenModal }: CreateCampaignsProps) => {
  const [title,setTitle]=useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [description,setDescription]=useState("");
  const [isDescriptionTouched, setDescriptionTouched] = 
    useState(false);
  const[selectimage,setImage]=useState<File| Blob>(); 
  const [isImageTouched, setIsImageTouched] = useState(false);

  const isTitleValid= title.trim()!=="";
  const hasTitleError=!isTitleValid && isTitleTouched;
  const isDescriptionValid=description.trim()!=="";
  const hasDescriptionError=!isDescriptionValid && 
isDescriptionTouched;
  const isImageValid=File!
  const hasImageError=isImageValid && isImageTouched;
  let isFormValid=false;
  if(isTitleValid && isDescriptionValid && isImageValid){
    isFormValid=true;
  }
  let errMessage = "";
  
  const handleChangetitle=(e: any) =>{
    setTitle(e.target.value)
  }
  const handleblurTitle=( )=>{
   setIsTitleTouched(true);

  }
const handleChangedescription=(e: any)=> {
    setDescription(e.target.value)
  }
  const handleblurDescription=()=>{
 setDescriptionTouched(true);
  }
const handleChangeImage=(e: any)=> {
  if (!e.target.files) {
    return;
  }
    setImage(e.target.files[0])
  }
  const handleblurImage=()=>{
setIsImageTouched(true);
  }
  const handleSubmit = (e: any) => {
  e.preventDefault();
  setTitle("");
  setIsTitleTouched(false);
  setDescription("");
  setDescriptionTouched(false);
 
  setIsImageTouched(false)

console.log(title, description, selectimage);
   
    // axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/posts ",
    //   data: { setDescription,setTitle },
    // }).then(({ data }) => {
    //   console.log("Succesfully uploaded: ", JSON.stringify(data));
    // });

    console.log(handleSubmit)
  };
  return (
    <div className="campaign-form">
      <form onSubmit={handleSubmit} className="campian-form">
        <div className="campaignTitle">
          <div>
            <h2>Create New Campaign</h2>
          </div>
          <div>
            <h5>Select Devices</h5>
          </div>
        </div>
         
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value='All'
               
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              value='Retail'
               
            />
            Retail
          </label>
          <label>
            <input
              type="checkbox"
              value='Corporate'
               

            />
            Corporate
          </label>

         
        </div>
        <div className="input-box">
          <div className="addTitle">
           
            <label>Add Campaign Title</label>
          </div>
          <input
            type="text"
             onChange={handleChangetitle}
            placeholder="Enter title"
            value={title}
            onBlur={handleblurTitle}
           
          />
    

          <div className="addTitle">
            <label>Add Campaign Description</label>
          </div>
          <input
            type="text"
            value={description}
            onBlur={handleblurDescription}
             onChange={handleChangedescription}
            name="description"
            className="description"
            placeholder="Enter description"
          />
           
        </div>
        <div className="uploadFile">
          
          <h4>Upload Icon</h4>
        </div>
        <div className="uploadIcon">
          <label>
            <input
              type="file"
            onChange={handleChangeImage}
              name="image"
              className="file"
              autoComplete="off"
              onBlur={handleblurImage}
            />
            <img
              src={upload}
              alt=""
              placeholder="Drag and Drop or browse to choose file"
            /><br/>
          
{selectimage ? (
<div>
  <p>Filename: {File.name}</p> 

</div>

) : (

<p>Select a file to show details</p>

)}
          </label>
          <p>Drag and Drop or browse to choose a file</p>
          
      
        </div>
        <div className="form-actions">
          <div className="btn-icons">
            <button>
              <img src={removeIcon} alt="Remove" /> <span>Remove</span>
            </button>
          </div>
          <div className="action-right">
            <div>
              <button>Cancel</button>
            </div>
            <div>
              <button type="submit" disabled={!isFormValid ? true: false}> Create </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatCampaigns;
 