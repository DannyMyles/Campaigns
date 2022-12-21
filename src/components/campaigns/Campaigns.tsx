import "./campaigns.css";
import Imlogo from "../../images/Imlogo.svg";
import create_campaign from "../../images/campaing/create_campaign.svg";
import location from "../../images/campaing/location.svg";
import arrow_drop from "../../images/campaing/arrow_drop.svg";
import {useState } from "react";
import CreatCampaigns from "../createCampaigns/CreatCampaigns";
import Modal from "../../pages/modal/Modal";
import { Search } from "../../pages/search/Search";
export interface Campaign {
  title: string;
  image?: URL;
}

const Campaigns = () => {
  const [openModal, setOpenModal] = useState<any | null>(false);
  const date = new Date()
  return (
    <div className="top-header">
      <div className="profile">
        <div className="inner-container flex-contentbtn">
          <div className="logo-profile">
            <img src={Imlogo} alt="logo-image" />
          </div>
          <div className="name-profile">
            <div className="name-icon ">
              <span>JK</span>
            </div>
            <div className="name-title">
              <span>John Jon M</span>
            </div>
            <div className="drop-down">
              <img src={arrow_drop} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="campaign-recent">
        <div className=" inner-container">
          <div className="campaign-intro">
            <h4>Hello John! Here's your recent feature release activity.</h4>
          </div>
          <div className="campaign-address">
            <div className="lineup"></div>
            <div className="line"></div>
            <div className="location">
              <div>
                <img src={location} alt="" />
              </div>
              <div>
                <span> Nairobi, Kenya</span>
              </div>

              <div className="date">
                <span>{date.toDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="searchC">
        <Search />
      </div>
      {/* RELEASES */}
      <div className="release-container inner-container">
        <div className="new-release">
          <div className="release-title">
            <h4>New Release</h4>
          </div>
          <div className="create-campaign">
            <div className="create-image">
              <img src={create_campaign} alt="create-campaign-image" />
            </div>
            <div className="create-text">
              <span>
                To create a feature release <br /> campaign,
                <span className="click">click below</span>
              </span>
            </div>
            <div className="create-button">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                + Create Campaign
              </button>
            </div>
            {openModal && (
              <Modal setOpenModal={setOpenModal}>
                <CreatCampaigns setOpenModal={setOpenModal} />
              </Modal>
            )}
          </div>
        </div>

        <div className="release-hitory ">
          <div className="release-title">
            <h4>Release History</h4>
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
