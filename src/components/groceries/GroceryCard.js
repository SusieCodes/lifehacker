//Author: Susie Stanley
//Purpose: Creates and displays individual grocery items for a single item that is passed as a prop

import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const GroceryCard = ({ grocery, handleDelete }) => {
  const handleEdit = () => {
    history.push(`/groceries/${grocery.id}/edit`)
  }

  const history = useHistory()

  return (
    <>
      <div className="grocery-card">
        <div className="grocery-info">
          <div>{grocery.text}</div>
        </div>

        <div className="grocery-icons">
          <div
            className="grocery-delete"
            onClick={() => handleEdit(grocery.id)}
          >
            <FaEdit className="grocery-edit-icon" />
          </div>

          <div
            className="grocery-delete"
            onClick={() => handleDelete(grocery.id)}
          >
            <FaTrash className="grocery-delete-icon" />
          </div>
        </div>
      </div>
    </>
  )
}
