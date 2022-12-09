import "./campaigns.css";
import Imlogo from "../../images/Imlogo.svg";
import create_campaign from "../../images/campaing/create_campaign.svg";
import deposit_creation from "../../images/campaing/deposit_creation.svg";
import mpesa_xpress from "../../images/campaing/mpesa_xpress.svg";
import location from "../../images/campaing/location.svg";
import user_configuration from "../../images/campaing/user-configurations.svg";
import buy_goods from "../../images/campaing/buy_goods.svg";
import arrow_drop from "../../images/campaing/arrow_drop.svg";
import { useEffect, useState } from "react";
import CreatCampaigns from "../createCampaigns/CreatCampaigns";
import Modal from "../modal/Modal";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import Recent from "../RecentCampaigns/Recent";

export interface Campaign {
  title: string;
  image?: URL;
}

const Campaigns = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [campaings, setCampaings] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [campaingPerPage] = useState(5);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setCampaings(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //Get current post
  const indexOfLastCampaing = currentPage * campaingPerPage;
  const indexOfFirstCampaing = indexOfLastCampaing - campaingPerPage;
  const currentCampaing = campaings.slice(
    indexOfFirstCampaing,
    indexOfLastCampaing
  );

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className="top-header">
      <div className="profile">
        <div className="inner-container flex-contentbtn">
          <div className="logo-profile">
            <img src={Imlogo} alt="logo-image" />
          </div>
          <div className="name-profile">
            <div>
              <div className="name-icon">
                <span>JK</span>
              </div>
            </div>
            <div className="name-title">
              <div className="name">
                <h5>John Jon M</h5>
              </div>
              <div className="drop-down">
                <img src={arrow_drop} alt="" />
              </div>
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
            <div className="line"></div>
            <div className="location">
              <div>
                {" "}
                <img src={location} alt="" />
              </div>
              <span> Nairobi, Kenya</span>

              <span>
                {" "}
                <a href="#">Saturday 06, June | 2210Hrs</a>{" "}
              </span>
            </div>
          </div>
        </div>
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
                <span>click below</span>
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
                { <CreatCampaigns setOpenModal={setOpenModal} /> }
              </Modal>
            )}
          </div>
        </div>

        <div className="release-hitory ">
          <div className="release-title">
            <h4>Release History</h4>
          </div>

          <div>
            <Recent campaings={currentCampaing} loading={loading} />
          </div>
          <div className="out">
            {/* { campaings && campaings.map((campaign:any) => <div className="campaign flex-contentbtn">
            <div className="logo">
              <img src={mpesa_xpress} alt="buy_goods" />
            </div>
            <div className="des">
              <h4>Mpesa Xpress</h4>
              <h6>Mpesa Xpress feature is a new...</h6>
            </div>
            <div className="devices flex-contentbtn">
              <div className="device os-icon">
                <span className="IOS">Retail</span>
              </div>
              <div className="device os-icon">
                <span className="IOS">Coprate</span>
              </div>
            </div>
          </div>)} */}
            {/* <div className="campaign flex-contentbtn">
            <div className="logo">
              <img src={buy_goods} alt="buy_goods" />
            </div>
            <div className="des">
              <h4>Buy Goods & Services </h4>
              <h6>Mpesa Xpress feature is a new... </h6>
            </div>
            <div className="devices flex-contentbtn">
              <div className="device os-icon">
                <span className="IOS">Retail</span>
              </div>
              <div className="device os-icon">
                <span className="IOS">Coprate</span>
              </div>
            </div>
          </div> */}
            {/* <div className="campaign flex-contentbtn">
            <div className="logo">
              <img src={user_configuration} alt="user_configuration" />
            </div>
            <div className="des">
              <h4>User Confirgations</h4>
              <h6>Mpesa Xpress feature is a new... </h6>
            </div>
            <div className="devices flex-contentbtn">
              <div className="device os-icon">
                <span className="IOS">Retail</span>
              </div>
              <div className="device os-icon">
                <span className="IOS">Coprate</span>
              </div>
            </div>
          </div> */}
            {/* <div className="campaign flex-contentbtn">
            <div className="logo">
              <img src={deposit_creation} alt="deposit_creation" />
            </div>
            <div className="des">
              <h4>Deposit Creation </h4>
              <h6>Deposit creation feature is a new...</h6>
            </div>
            <div className="devices flex-contentbtn">
              <div className="device os-icon">
                <span className="IOS">Retail</span>
              </div>
              <div className="device os-icon">
                <span className="IOS">Coprate</span>
              </div>
            </div>
          </div> */}

            {/* Pagination */}
            {/* <div className="pagination-item">
            <div className="page-link">
              <div>
                <div>
                  <img src={left_arrow} alt="left_arrow" />
                  <a href="#" className="page-link-prev">
                    Prev
                  </a>
                </div>
              </div>
            </div>
            <div className="page-link page-number">
              <div>
                <span>1</span>
              </div>
              <div>
                <span>2</span>
              </div>
              <div>
                <span>3</span>
              </div>
            </div>
            <div className="page-link">
              <div>
                <div>
                  <img src={right_arrow} alt="right_arrow" />
                  <a href="#" className="page-link-prev">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          </div>

          <div>
          <Pagination
            CampaingPerPage={campaingPerPage}
            totalCampaings={campaings.length}
            paginate={paginate}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
