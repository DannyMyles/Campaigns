import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg'
import removeIcon from '../../images/campaing/remove.svg'
import { useForm } from 'react-hook-form'
import axios from 'axios'; 
import { title } from 'process'
// import Campaigns from "../createCampaigns/createFormvalidation";
type CreateCampaignsProps = {
  setOpenModal: Function}
type FormValues = {
  title: string;
  description: string;
  image:any
}
  const CreatCampaigns = ({ setOpenModal }: CreateCampaignsProps) => {
  const {register, handleSubmit, formState:{errors}} = useForm<FormValues>(); 
  const onSubmit =( Data:any)=>{
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
               
              value="All"
               
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
             
              value="web"
               
            />
            Web
          </label>
          <label>
            <input
              type="checkbox"
               
              value="Android"
               
            />
            Android
          </label>
          <label>
            <input
              type="checkbox"
              
              value="iOS"
               
            />
            iOS
          </label>
          <label>
            <input
              type="checkbox"
               
              value="Corprate"
               
            />
            Corprate
          </label>
        </div>
        <div className="input-box">
          <div className='addTitle'> <label>Add Campaign Title</label></div>
          <input type="text"  {...register('title',{required:true})}
           name='title'  placeholder="Enter title"  />
           {errors.title && <p className='alert'>Enter title ! </p>}
          
          <div className='addTitle'><label>Add  Campaign Description</label></div>
          <input  type="text"  {...register('description',{required:true}) } name='description'     className='description'   placeholder="Enter description" />
          {errors.description && <p className='alert'>Enter Description </p>}
        
        </div>
        <div className='uploadFile'> <h4>Upload Icon</h4></div>
        <div className="uploadIcon">
          <label> 
    
          <input type="file"   {...register('image',{required:true})} name='image'  className="file" autoComplete='off'     />
          {errors.image && <p>upload image  </p>}
          <img
            src={upload} alt=""
            placeholder="Drag and Drop or browse to choose a file"
             />
           </label>
          <p>Drag and Drop or browse to choose a file</p>
         
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
            
              >
                Cancel
              </button>
            </div>
            <div>
              <button type='submit'   >  Create </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
 

export default CreatCampaigns;
