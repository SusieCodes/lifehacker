//Author: Susie Stanley
//Purpose: Creates and displays individual wishlist items for a single item that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
// import { GrCheckbox } from "react-icons/gr";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./List.css";

export const WishlistCard = ({ wishlist, handleDelete }) => {
  const handleEdit = () => {
    history.push(`/lists/${wishlist.id}/edit`);
  };

  const history = useHistory();

  return (
    <>
      <div className="wishlist-card">
        <div className="wishlist-info">
          <div>{wishlist.text}</div>
        </div>

        <div className="wishlist-icons">
          <div
            className="wishlist-delete"
            onClick={() => handleEdit(wishlist.id)}
          >
            <FaEdit className="wishlist-edit-icon" />
          </div>

          <div
            className="wishlist-delete"
            onClick={() => handleDelete(wishlist.id)}
          >
            <FaTrash className="wishlist-delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

// export const wishlistPrintCard = ({ wishlist }) => {
//   return (
//     <>
//       <div className="print-wishlist-card">
//         <div className="print-wishlist-text">{wishlist.text}</div>

//         <div className="print-wishlist-icons">
//           <div className="wishlist-check">
//             {/* <MdCheckBoxOutlineBlank className="wishlist-check-icon" /> */}
//             <GrCheckbox className="wishlist-check-icon" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
