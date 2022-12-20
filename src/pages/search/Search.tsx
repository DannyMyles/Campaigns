import "./search.css";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import { Calander } from "../calander/Calander";
export const Search = () => {
  const [openCalander, setOpenCalander] = useState(false)
  return (
    <div className="search-filter">
      <div className="search-bar">
        <input
          type="text"
          name="txtBox"
          placeholder="Search by Campaign name"
        ></input>{" "}
      </div>
      <div className="filter-btn" onClick={()=>{setOpenCalander(true)}}>
        <div className="filter-icon">
          <FiFilter />
        </div>
        <div>
          <span>Filter</span>
        </div>
      </div>
      {openCalander && (
                <Calander setOpenCalander={setOpenCalander} />
            )}
    </div>
  );
};

// const [dateFilter, setDateFilter] = useState({
//   startDate: null,
//   endDate: null
// })
// //make sure to change these states with your filter header (the 2 inputs with type="date")

// return (
//   ...

// <tbody>
// {data
//   .filter(row => {
//     let filterPass = true
//     const date = new Date(row.dateYouWannaFilterWith)
//     if (dateFilter.startDate) {
//       filterPass = filterPass && (new Date(dateFilter.startDate) < date)
//     }
//     if (dateFilter.endDate) {
//       filterPass = filterPass && (new Date(dateFilter.endDate) > date)
//     }
//     //if filterPass comes back `false` the row is filtered out
//     return filterPass
//   })
//     .map(row =>
//       <tr>
//         <td>Your</td>
//         <td>Table</td>
//         <td>Row</td>
//         <td>Cells</td>
//       </tr>
//     )
// }
// </tbody >
