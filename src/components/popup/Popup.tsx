import "./poup.css";
import mpesa_xpress from "../../images/campaing/mpesa_xpress.svg";

type PopupProps = {
  setOpenModal: any;
  selectedCampaign:any
};
export const Popup = ({selectedCampaign,setOpenModal}:PopupProps) => {
  return (
    <div className="popup modal-position">
      <div className="vector">
      <img src={mpesa_xpress} alt="buy_goods" />
      </div>
      <div className="info">
        <div className="">
          <h4>{selectedCampaign.title}</h4>
        </div>
        <div className="device">
          <div className="os-icon">
            <span className="IOS">Retail</span>
          </div>
          <div className="os-icon">
            <span className="IOS">Coprate</span>
          </div>
        </div>
        <div className="descriptions">
          <span>
            {selectedCampaign.body}
          </span>
        </div>
        <div className="resend-btn">
          <div><button onClick={()=>setOpenModal(false)}>Close</button></div>

        </div>
      </div>
    </div>
  );
};
