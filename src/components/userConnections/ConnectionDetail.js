import React, { useState } from 'react';
import "../LifeHacker.css"
import { useHistory } from "react-router-dom"

export const ConnectionDetail = ({connection, handleDelete}) => {
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const goBack = () => { history.push("/dashboard")}; //takes user back to dashboard
  const goToAll = () => { history.push("/connections")}; //takes user back to dashboard
  const createConnection = () => { history.push("/connections/create")}; //takes user back to dashboard

  return (

    <div className="details">

        <button onClick={createConnection}>Add New Connection</button>

      <div className="details__header">

        <picture>
        {connection?.image !== "" ?
        <img src={require(`../../images/${connection?.image}`).default} alt={connection?.name} className="details__header--photo"/> 
        : <p>There isn't an image.</p>}
        </picture>
      </div>

      <div className="employee__info">

        <div className="employee__info--name">
          {connection?.name}
        </div>
          
        <div className="employee__info--address"><strong>Address: </strong> {connection?.address}
        </div>

        <div className="employee__info--phone"><strong>Cell Phone: </strong> {connection?.phoneNumber}
        </div>

        <div className="employee__info--location"> <strong>Location: </strong> {connection?.location}</div>

        <div className="employee__info--email"> <strong>Email: </strong> {connection?.email}</div>

      </div>

      <div className="btn-flex">
        <button className="details__btn" type="button" disabled={isLoading} onClick={goBack}>Back To List</button>
        <button className="details__btn" type="button" disabled={isLoading} onClick={goToAll}>Back To List</button>
        <button className="details__btn" type="button" disabled={isLoading} onClick={handleDelete}>Delete</button>
      </div>

    </div>
  );
}