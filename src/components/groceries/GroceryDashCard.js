//Author: Susie Stanley
//Purpose: Creates and displays individual grocery items for a single grocery that is passed as a prop

import React from "react"
import { FaTrash } from "react-icons/fa"

export const GroceryDashCard = ({ grocery, handleDelete }) => {
    return (
    <>

          <div className="dash-grocery">

              <div className="dash-grocery__col1">

                  <div  className="dash-grocery__text">{grocery?.text}</div>

              </div>

              <div className="dash-grocery__col2">

                <button type="button" className="grocery-delete" onClick={() => handleDelete(grocery?.id)}><FaTrash className="grocery-delete-icon"/></button>

              </div>

          </div>
    </>
    )
}



