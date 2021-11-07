//Author: Susie Stanley
//Purpose: Creates and displays individual wishlist items for a single item that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./List.css";

export const WishlistCard = ({
  wishlist,
  handleDeleteWishlist,
  handleCompleteWishlist,
}) => {
  const handleEdit = () => {
    history.push(`/wishlists/${wishlist.id}/edit`);
  };

  const history = useHistory();

  return (
    <>
      <div className="wishlist-card">
        <div className="wishlist-info">
          <div>{wishlist?.item}</div>
        </div>
        <div className="wishlist-complete">
          <input
            type="checkbox"
            className="checkbox-wishlist"
            onClick={() => handleCompleteWishlist(wishlist?.id)}
          />
          <label className="checkbox-label">Complete </label>
        </div>

        <div className="wishlist-icons">
          <div
            className="wishlist-delete"
            onClick={() => handleEdit(wishlist?.id)}
          >
            <FaEdit className="wishlist-edit-icon" />
          </div>

          <div
            className="wishlist-delete"
            onClick={() => handleDeleteWishlist(wishlist?.id)}
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
