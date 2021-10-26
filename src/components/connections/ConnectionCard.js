//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import '../dashboard/Dashboard.css'
import './Connections.css'

var formatDate = function (date) {
  var array = (date || '').toString().split(/-/g)
  array.push(array.shift())
  return array.join('/') || null
}

export const ConnectionCard = ({ connection, handleDelete }) => {
  const handleEdit = () => {
    history.push(`/connections/${connection?.id}/edit`)
  }

  const history = useHistory()

  return (
    <>
      <div className="dash-connections">
        <div className="dc-info">
          <div className="pic-name">
            <div className="dc-image">
              {connection.image !== '' ? (
                <img
                  src={require(`../../images/${connection.image}`).default}
                  alt={connection.name}
                  className="connection-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default"
                  className="connection-photo"
                />
              )}
            </div>

            <div className="dc-name">{connection?.name}</div>
          </div>

          <div className="dc-email">{connection.email}</div>

          <div className="dc-phone">{connection.phone}</div>

          <div className="dc-bday">{formatDate(connection?.bday)}</div>
        </div>

        <div className="connection-icons">
          <div className="connection-details">
            <Link to={`/connections/${connection.id}`}>Details</Link>
          </div>

          <div
            className="connection-delete"
            onClick={() => handleEdit(connection?.id)}
          >
            <FaEdit className="connection-edit-icon" />
          </div>

          <div
            className="connection-delete"
            onClick={() => handleDelete(connection.id)}
          >
            <FaTrash className="connection-delete-icon" />
          </div>
        </div>
      </div>
    </>
  )
}
