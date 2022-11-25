import './createCampaigns.css'
import upload from '../../images/campaing/upload.svg';
import removeIcon from '../../images/campaing/remove.svg'
import { useState } from 'react';

type CreateCampaignsProps = {
  setOpenModal: Function
}

const CreatCampaigns = ({setOpenModal }:CreateCampaignsProps) => {const [os, setOs] =useState("All")



 const campaignData = [{
    campaignTitle: "",
    campaignDescription: "",
    campaignFile: ""
  }]
  const [details, setDetails] = useState(campaignData

  );

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
    <div className='campaign-form'>
      <form className='campian-form'>
        <div className="heading">
          <h3>Add New Feature</h3>
        </div>
        <div className='subheading'>
          <h4>Select Devices</h4>
        </div>
        <div className='os-check'>
          <div className='os-check'>
            <div className='All'><label><input type="checkbox" checked={os === 'All'} value='All' onChange={handlecheckBox} />All</label>
            </div>
            <div className='Web'><label><input type="checkbox" checked={os === 'web'} value='web' onChange={handlecheckBox} />Web</label>
            </div>
            <div className='Android'><label><input type="checkbox" checked={os === 'Android'} value='Android' onChange={handlecheckBox} />Android</label>
            </div>
            <div className='iOS'><label><input type="checkbox" checked={os === 'iOS'} value='iOS' onChange={handlecheckBox} />iOS</label>
            </div>
            <div className='Corporate'><label><input type="checkbox" checked={os === 'Corprate'} value='Corprate' onChange={handlecheckBox} />Corprate</label>
            </div></div></div>
        <div className="input-box ">
          <div className='upload-text-addtitle'><h4>Add Title</h4></div>
          <input type="text" name="campaignTitle" onChange={handleChange} placeholder='Enter title' />
          <div className='upload-text'><h4>Add Description</h4></div>
          <input type="text" className='description' name="campaignDescription" onChange={handleChange} placeholder='Enter description' />
        </div>
        <div><div className='upload-text'><h4>Upload Files</h4></div>
          <div className="btn-icons uploadIcon">
            <div className='upload'>
              <label >
                <input type="file" onChange={handleChange} name="campaignFile" />
                <img src={upload} alt="" placeholder='Drag and Drop or browse to choose a file' />
                <p>Drag and Drop or browse to choose a file</p>
              </label>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <div><button className="btn-icons"> <img src={removeIcon} alt="Remove" /><div><span btn-icons >Remove</span> </div></button></div>
          <div className="action-right">
            <div><button>Cancel</button></div>
            <div> <button onClick={handleSubmit}>Save</button></div>
          </div>
        </div>



 
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
                         <div><button onClick={() => {setOpenModal(false)}}>Cancel</button></div> 
                         <div><button>Save</button></div>
                   </div>
             </div>
       </form>
</div>
)

}

export default CreatCampaigns