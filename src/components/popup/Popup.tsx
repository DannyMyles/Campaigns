import "./poup.css";
import mpesa_xpress from "../../images/campaing/mpesa_xpress.svg";

type PopupProps = {
  setOpenModal: any;
};
export const Popup = () => {
  return (
    <div className="popup modal-position">
      <div className="vector">
      <img src={mpesa_xpress} alt="buy_goods" />
      </div>
      <div className="info">
        <div className="">
          <h4>Buy Goods and Services</h4>
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
            Mpesa Xpress feature is a new feature that enssures customers are
            able to make direct deposits from there mobile wallet to their bank
            accounts.
          </span>
        </div>
        <div className="resend-btn">
          <div><button >Cancel</button></div>
          <div><button>Resend</button></div>
        </div>
      </div>
    </div>
  );
};
