import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from  '../../images/campaing/remove.svg'
import { useState } from 'react';
 
 
type CreateCampaignsProps ={
  setOpenModal: Function
}
const CreatCampaigns = ({setOpenModal }:CreateCampaignsProps) => {  const [os, setOs] =useState("All")

const campaignData = [{ 
campaignTitle:"",
campaignDescription:"",
campaignFile:""
}]
const [details, setDetails]=useState(campaignData 
      
);
 
function handlecheckBox (evt:any){
  console.log(evt.target.value)
  setOs(evt.target.value)
 console.log(details);
 }
    
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

 
return (
<div className='campaign-form'>
 <form className='campian-form'>
<div className="heading">
<h3>Add New Feature</h3>
</div><br/>
<h4>Select Devices</h4>
<div className='os-check'>
<div className='os-check'>
   <label><input type="checkbox" checked={ os === 'All'}  value='All' onChange={handlecheckBox}/>All</label>
    <label><input type="checkbox" checked={os === 'web'} value='web' onChange={handlecheckBox} />Web</label>
    <label><input type="checkbox" checked={os === 'Android'} value='Android' onChange={handlecheckBox} />Android</label>
    <label><input type="checkbox" checked={os === 'iOS'} value='iOS' onChange={handlecheckBox} />iOS</label>
    <label><input type="checkbox" checked={os ==='Corprate'} value='Corprate' onChange={handlecheckBox}  />Corprate</label>
  </div></div>
<div className="input-box ">
 <h4>Add Title</h4>
<input type="text" name="campaignTitle" onChange={handleChange} placeholder='Enter title'/>
<h4>Add Description</h4>
<input type="text" className='description' name="campaignDescription" onChange={handleChange} placeholder='Enter description'/>
 </div>
<div><h4>Upload Files</h4>
<div className="btn-icons uploadIcon">
<div className='upload'>
 <label > 
<input type="file"  onChange={handleChange} name="campaignFile"/>
<img src={upload}    alt="" placeholder='Drag and Drop or browse to choose a file'/>
<p>Drag and Drop or browse to choose a file</p>
  </label>
  </div>  
</div>
</div>
<div className="form-actions">
<div className="action-right">
<button className="btn-icons"> <img src={removeIcon}  alt="Remove" /><span btn-icons >Remove</span> </button>
<button className="btn1">Cancel</button> 
<button className="btn2" onClick={handleSubmit }>Save</button> 
 </div>
</div>
 </form>
</div>
)
}

export default CreatCampaigns