import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from  '../../images/campaing/remove.svg'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
 

const CreateCampaignsProps=()=>{
const campaignData = [{ 
      id: uuid(),
      campaignTitle:"Term Deposit Renewal",
campaignDescription:"New Term Deposit",
 campaignFile:"jpeg"
}]
const [details, setDetails]=useState(campaignData 
      
);
 
//function handlecheckBox (e){
// setOs(e.target.value)
//}
const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target 
 setDetails((prev)=>{
      return {...prev,[name]: value};
      
 })

};
const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
e.preventDefault();
console.log(details);
}
//const CreatCampaigns = ({setOpenModal }:CreateCampaignsProps) => {  const [os, setOs] =useState("All")

//function handlecheckBox (evt:any){
 //console.log(evt.target.value)
// setOs(evt.target.value)
//console.log(details);
   
   
return (
<div className='campaign-form'>
 
 <form className='campian-form'>
<div className="heading">
<h2>Add New Feature</h2>
</div>
<h3>Select Devices</h3>
<div className='os-check'>
<label><input type="checkbox"  />All</label>
<label><input type="checkbox" />Web</label>
<label><input type="checkbox"    />Android</label>
<label><input type="checkbox"   />iOS</label>
<label><input type="checkbox"   />Corprate</label>
</div>
<div className="input-box ">
 <label>Add Title</label>
<input type="text" name="campaignTitle" onChange={handleChange} placeholder='Enter title'/>
<label>Add Description</label>
<input type="text" name="campaignDescription" onChange={handleChange} placeholder='Enter description'/>
</div><div className="btn-icons uploadIcon">
<h4>Upload Files</h4>
 <label> 
<input type="file"  onChange={handleChange} name="campaignFile"/>
<img src={upload}    alt="" placeholder='Drag and Drop or browse to choose a file'/>
<p>Drag and Drop or browse to choose a file</p>
  </label>
    
</div>
<div className="form-actions">
<div className="btn-icons">
<button> <img src={removeIcon} alt="Remove" /> </button>
</div>
<div className="action-right">
 <div className="btn1"><button>Cancel</button></div> 
<div id="btn2"><button onClick={handleSubmit }>Save</button></div>
 </div>
</div>
 </form>
</div>
)
}

export default CreateCampaignsProps