// import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
// import { api } from "../../components/data/api";
import { BsCalendar4Event } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "./calander.css";
type CalanderProps = {
  setOpenCalander: Function;
};
export const Calander = ({ setOpenCalander }: CalanderProps) => {
  // const [date, setDate] = useState(new Date());
  // const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="filter-popup">
      <div className="closepop">
        <IoClose
          onClick={() => {
            setOpenCalander(false);
          }}
        />
      </div>
      <div className="filter">
        <div>
          <span>Filter by:</span>
          <br />
          <span>Campaign Date</span>
        </div>
      </div>
      <div className="calander-selection">
        <div className="left-selection">
          <div>
            <BsCalendar4Event />
          </div>
          <div>
            <span>22/08/2022</span>
          </div>
          <div>
            <MdOutlineArrowDropDown />
          </div>
        </div>
        <div className="right-selection">
          <div>
            <BsCalendar4Event />
          </div>
          <div>
            <span>22/08/2022</span>
          </div>
          <div>
            <MdOutlineArrowDropDown />
          </div>
        </div>
      </div>
      <div className="filter-field">
        <div className="clear-text">
          <span>Clear Filter</span>
        </div>
        <div className="filters">
          <div className="filter-icon">
            <FiFilter />
          </div>
          <div>
            <span>Filter</span>
          </div>
        </div>
      </div>

      {/* <div className='calanders'>
            <div className='first-calander'>
            <Calendar onChange={setDate} value={date} />
            </div>
        </div> */}
    </div>
  );
};
