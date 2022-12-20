/* eslint-disable jsx-a11y/anchor-is-valid */
import "./pagination.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ CampaingPerPage, totalCampaings, paginate }: any) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCampaings / CampaingPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginate">
      <ul>
        <li className="arrowback">
          <span>
            <MdArrowBackIos />
          </span>
          <span className="pagenext">Prev</span>
        </li>
        {pageNumbers.map((page, number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
        <li >
          <span className="pagenext">Next</span>
          <span>
            <MdArrowForwardIos />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
