import React, { useState, useEffect } from 'react';
import { getConnectionById, deleteConnection } from "./ConnectionManager"
import { useParams, useHistory } from "react-router-dom"
import "./Connections.css"

export const ConnectionDetail = () => {
  const [connection, setConnection] = useState({ 
      userId: sessionStorage.getItem("lifehacker_user"), 
      name: "", 
      image: "", 
      email: "", 
      phone: "", 
      address: "", 
      city: "", 
      stateProvince: "", 
      zipCode: "", 
      work: "", 
      relationship: "", 
      bday: "", 
      family: "", 
      pets: "", 
      howWeMet: "", 
      giftIdeas: "", 
      faveDrink: "", 
      faveDessert: "", 
      notes: "" 
    });

  const {connectionId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    console.log("handleDelete invoked")
    //invokes the delete function in Connection Manager and re-directs to connection list.
    deleteConnection(connectionId).then(() =>
      history.push("/connections")
    );
  };

  const goBack = () => { history.push("/connections")}; //takes user back to list of all connections
  const goBackToDash = () => { history.push("/dashboard")}; //takes user back to dashboard

  useEffect(() => {
    //use getConnectionById() from ConnectionManager to grab info  and set it to state
    console.log("useEffect", connectionId)
    getConnectionById(connectionId)
      .then(connection => {
        console.log("connection obj is: ", connection)
        setConnection({
          userId: sessionStorage.getItem("lifehacker_user"), 
          name: connection[0].name, 
          image: connection[0].image, 
          email: connection[0].email, 
          phone: connection[0].phone, 
          address: connection[0].address, 
          city: connection[0].city, 
          stateProvince: connection[0].stateProvince, 
          zipCode: connection[0].zipCode, 
          work: connection[0].work, 
          relationship: connection[0].relationship, 
          bday: connection[0].bday, 
          family: connection[0].family, 
          pets: connection[0].pets, 
          howWeMet: connection[0].howWeMet, 
          giftIdeas: connection[0].giftIdeas, 
          faveDrink: connection[0].faveDrink, 
          faveDessert: connection[0].faveDessert, 
          notes: connection[0].notes 
        });
      });
  }, [connectionId]);

  return (

    <div className="details">

      <div className="details__header">

      <div className="connection-image">
                {connection.image !== "" ?
                  <img src={require(`../../images/default.png`).default} alt={connection?.name} className="connection-photo"/> 
                  : <img src={require(`../../images/default.png`).default} alt="default" className="connection-photo"/>}
              </div>

      </div>

      <div className="connection-info">

        <div className="connection-info__name"><strong>Name: </strong>{connection.name}
        </div>
          
        <div className="connection-info__email"><strong>Email: </strong> {connection.email}
        </div>

        <div className="connection-info__phone"><strong>Phone: </strong> {connection.phone}
        </div>

        <div className="connection-info__location"> <strong>Address: </strong> {connection.address}</div>

        <div className="connection-info__email"> <strong>City: </strong> {connection.city}</div>

        <div className="connection-info__email"> <strong>State or Province: </strong> {connection.stateProvince}</div>

        <div className="connection-info__zipcode"> <strong>Zipcode: </strong> {connection.zipCode}</div>

        <div className="connection-info__work"> <strong>Work: </strong> {connection.work}</div>

        <div className="connection-info__relationship"> <strong>Relationship: </strong> {connection.relationship}</div>

        <div className="connection-info__bday"> <strong>Birthday: </strong> {connection.bday}</div>

        <div className="connection-info__family"> <strong>Family: </strong> {connection.family}</div>

        <div className="connection-info__pets"> <strong>Pets: </strong> {connection.pets}</div>

        <div className="connection-info__howmet"> <strong>How We Met: </strong> {connection.howWeMet}</div>

        <div className="connection-info__gifts"> <strong>Gift Ideas: </strong> {connection.giftIdeas}</div>

        <div className="connection-info__drink"> <strong>Favorite Drink: </strong> {connection.faveDrink}</div>

        <div className="connection-info__dessert"> <strong>Favorite Dessert: </strong> {connection.faveDessert}</div>

        <div className="connection-info__notes"> <strong>Notes: </strong> {connection.notes}</div>

      </div>

      <div className="btn-flex">

        <button className="details-btn" type="button" onClick={goBack}>All Connections</button>
        <button className="details-btn" type="button" onClick={goBackToDash}>Dashboard</button>
        <button className="details-btn" type="button" onClick={handleDelete}>Delete</button>
      </div>

    </div>
  );
}