//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"
// import { WeatherApp } from "../connections/WeatherApp";


// const formatDate = (obj) => {
//   const date = new Date(obj);
//   const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
//   return formattedDate;
// }

export const ConnectionCard = ({ connection, handleDeleteConnection, card }) => {
    return (
    <>
        <div className={card}>
        
          <div className="connection__info">

            <div><strong>Name:  {connection?.name}</strong></div>

            <div><strong>Email: </strong> {connection?.email}</div>

            <div><strong>Phone: </strong> {connection?.phone}</div>


            <div><strong>Address: </strong> {connection?.address}</div>

            <div><strong>City: </strong> {connection?.city}</div>

            <div><strong>stateProvince: </strong> {connection?.stateProvince}</div>

            <div><strong>Zipcode: </strong> {connection?.zipCode}</div>

            <div><strong>Work: </strong> {connection?.notes}</div>

            <div><strong>Relationship: </strong> {connection?.relationship}</div>

            <div><strong>Birthday: </strong> {connection?.bday}</div>

            <div><strong>Family Members: </strong> {connection?.family}</div>

            <div><strong>Pets: </strong> {connection?.pets}</div>

            <div><strong>How/Where We Met: </strong> {connection?.howWeMet}</div>


            <div><strong>Gift Ideas: </strong> {connection?.giftIdeas}</div>

            <div><strong>Favorite Drink: </strong> {connection?.faveDrink}</div>

            <div><strong>Favorite Dessert: </strong> {connection?.faveDessert}</div>

            <div><strong>Notes: </strong> {connection?.notes}</div>

          </div>

          <div className="remove__item">

            <Link to={`/connections/${connection?.id}/edit`}><button className="button sm">edit icon</button></Link>

            <button type="button" className="button sm" onClick={() => handleDeleteConnection(connection?.id)}>delete icon</button>

          </div>

        </div>
    </>
    )
}



