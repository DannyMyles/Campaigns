import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg'
import removeIcon from '../../images/campaing/remove.svg'
import  { useForm  } from 'react-hook-form'
import { useEffect, useState  } from 'react';
import axios from 'axios'; 
// import Campaigns from "../createCampaigns/createFormvalidation";
type CreateCampaignsProps = {
  setOpenModal: Function}
type FormValues = {
  title: string;
  description: string;
  image:any
}
  const CreatCampaigns = ({ setOpenModal }: CreateCampaignsProps) => {
  const {register, handleSubmit, reset, formState:{errors,isSubmitted}} = useForm<FormValues>(); 
  const [os, setOs] = useState("All")
  function handlecheckBox(evt: any) {
    console.log(evt.target.value)
    setOs(evt.target.value)
  }

  const onSubmit =(Data: any)=>{
 
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts ",
      data: {register}
    }).then(({ data }) => {
      console.log("Succesfully uploaded: ", JSON.stringify(data));
    });
   
  
  console.log(Data)

   

  }
  return (
 
    <div className="campaign-form">
      <form onSubmit={handleSubmit(onSubmit)} className="campian-form">
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
        <div className="input-box">
          <div className='addTitle'> <label>Add Campaign Title</label></div>
          <input type="text"   {...register('title',{required:true})}
           name='title'  placeholder="Enter title"  />
           {errors.title && <p className='alert'>Enter title ! </p>}
          
          <div className='addTitle'><label>Add  Campaign Description</label></div>
          <input  type="text"    {...register('description',{required:true}) } name='description'     className='description'   placeholder="Enter description" />
          {errors.description && <p className='alert'>Enter Description </p>}
        
        </div>
        <div className='uploadFile'> <h4>Upload Icon</h4></div>
        <div className="uploadIcon">
          <label> 
    
          <input type="file"   {...register('image',{required:true})} name='image'  className="file" autoComplete='off'     />
          <img
            src={upload} alt=""
            placeholder="Drag and Drop or browse to choose a file"
             />
           </label>
          <p>Drag and Drop or browse to choose a file</p>
          
        </div>
        {errors.image && <p>upload image  </p>}
        <div className="form-actions">
          <div className="btn-icons">
            <button>
              
              <img src={removeIcon} alt="Remove" />{" "}
              <span>Remove</span>
            </button>
          </div>
          <div className="action-right">
            <div>
              <button  >
                Cancel
              </button>
            </div>
            <div>
              <button type='submit' >  Create </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
 

export default CreatCampaigns;
