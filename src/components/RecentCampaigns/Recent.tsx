import { useState } from "react";
import mpesa_xpress from "../../images/campaing/mpesa_xpress.svg";
import Modal from "../../pages/modal/Modal";
import { Popup } from "../../pages/popup/Popup";
import { useCampaignsQuery } from "../../services/campaignAPi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const Recent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [page, setPage] = useState(1)
  const { data, error, isFetching, isLoading, isSuccess } = useCampaignsQuery(page);
  

  return (
    <div>
      {isLoading && <h2> ...Loading</h2>}
      {isFetching && <h2> ...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data.campaigns?.map((campaign: any, i: number) => (
            <>
              <div
                onClick={() => {
                  setOpenModal(true);
                  setSelectedCampaign(campaign);
                }}
                className="campaign"
                key={i}
              >
                <div className="logo">
                  <img src={mpesa_xpress} alt="buy_goods" />
                </div>
                <div className="des">
                  <h4>{campaign.title}</h4>
                  <h6>Mpesa Xpress feature is a new...</h6>
                </div>
                <div className="devices">
                  <div className="device os-icon">
                    <span className="IOS">Retail</span>
                  </div>
                  <div className="device os-icon">
                    <span className="IOS">Coprate</span>
                  </div>
                </div>
              </div>
            </>
          ))}

          {openModal && (
            <Modal setOpenModal={setOpenModal}>
              <Popup
                selectedCampaign={selectedCampaign}
                setOpenModal={setOpenModal}
              />
            </Modal>
          )}
        </div>
      )}
       <ul>
        <li className="arrowback" onClick={()=>setPage((prev) => prev -1)}>
          <span>
            <MdArrowBackIos />
          </span>
          <span className="pagenext">Prev</span>
        </li>
       
        <li onClick={()=>setPage((prev) => prev +1)} >
          <span className="pagenext">Next</span>
          <span>
            <MdArrowForwardIos />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Recent;
