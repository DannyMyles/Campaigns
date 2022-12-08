import mpesa_xpress from "../../images/campaing/mpesa_xpress.svg";
interface RecentProps {
  campaings: any;
  loading: boolean;
}
const Recent = ({ campaings }: RecentProps) => {
  return (
    <div>
      {campaings.map((campaign: any, i: number) => (
        <>
          <div className="campaign" key={i}>
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
    </div>
  );
};

export default Recent;
