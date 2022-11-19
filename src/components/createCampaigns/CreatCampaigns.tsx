import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from  '../../images/campaing/remove.svg'
import { useState } from 'react';
 
type CreateCampaignsProps ={
  setOpenModal: Function
}

const CreatCampaigns = ({setOpenModal }:CreateCampaignsProps) => {  const [os, setOs] =useState("All")

function handlecheckBox (evt:any){
 console.log(evt.target.value)
 setOs(evt.target.value)
}

return (
<div className='campaign-form'>
 
 <form className='campian-form'>
             <div className="heading">
             <h2>Add New Feature</h2>
             </div>
             <h3>Select Devices</h3>
             <div className='os-check'>
                   <label><input type="checkbox" checked={ os === 'All'}  value='All' onChange={handlecheckBox}/>All</label>
                   <label><input type="checkbox" checked={os === 'web'} value='web' onChange={handlecheckBox} />Web</label>
                   <label><input type="checkbox" checked={os === 'Android'} value='Android' onChange={handlecheckBox} />Android</label>
                   <label><input type="checkbox" checked={os === 'iOS'} value='iOS' onChange={handlecheckBox} />iOS</label>
                   <label><input type="checkbox" checked={os ==='Corprate'} value='Corprate' onChange={handlecheckBox}  />Corprate</label>
             </div>
             <div className="input-box ">
                   <label>Add Title</label>
                   <input type="text" placeholder='Enter title'/>

                   <label>Add Description</label>
                   <input type="text" placeholder='Enter description'/>
             </div>
             <div className="btn-icons uploadIcon">
                   <h4>Upload Files</h4>
                    <img src={upload} alt="" placeholder='Drag and Drop or browse to choose a file'/>
                    <p>Drag and Drop or browse to choose a file</p>     
             </div>
             <div className="form-actions">
                   <div className="btn-icons">
                         <button> <img src={removeIcon} alt="Remove" /> </button>
                   </div>
                   <div className="action-right">
                         <div><button onClick={() => { setOpenModal(false) }} >Cancel</button></div> 
                         <div><button>Save</button></div>
                   </div>
             </div>
       </form>
</div>
)
}

export default CreatCampaigns