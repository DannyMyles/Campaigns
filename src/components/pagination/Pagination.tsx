/* eslint-disable jsx-a11y/anchor-is-valid */
import './pagination.css'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ CampaingPerPage, totalCampaings, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCampaings / CampaingPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginate">
      <ul>
        <span><MdArrowBackIos /></span>
        <span>Prev</span>
        {pageNumbers.map((page, number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
        <span>Next</span>
         <span><MdArrowForwardIos /></span>
      </ul>
    </div>
  );
};

export default Pagination;
