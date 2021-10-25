import React, { useState, useEffect } from 'react';
import { getConnectionById, deleteConnection } from "./ConnectionManager"
import { useParams, useHistory } from "react-router-dom"
import { FaEdit } from "react-icons/fa"
import { formatDate } from "../helper";
import "../LifeHacker.css"
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
      country: "",
      work: "", 
      relationship: "", 
      bday: "", 
      family: "", 
      pets: "", 
      howWeMet: "", 
      giftIdeas: "", 
      faveDrink: "", 
      faveDessert: "", 
      notes: "",
      zodiac: "",
      personality: "",
      enneagram: ""
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

  const handleEdit = () => { 
    history.push(`/connections/${connectionId}/edit`)
  }  

  useEffect(() => {
    //use getConnectionById() from ConnectionManager to grab info  and set it to state
    console.log("useEffect", connectionId)
    getConnectionById(connectionId)
      .then(connection => {
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
          country: connection[0].country, 
          work: connection[0].work, 
          relationship: connection[0].relationship, 
          bday: connection[0].bday, 
          family: connection[0].family, 
          pets: connection[0].pets, 
          howWeMet: connection[0].howWeMet, 
          giftIdeas: connection[0].giftIdeas, 
          faveDrink: connection[0].faveDrink, 
          faveDessert: connection[0].faveDessert, 
          notes: connection[0].notes,
          zodiac: connection[0].zodiac,
          personality: connection[0].personality,
          enneagram: connection[0].enneagram 
        });
      });
  }, [connectionId]);

  return (
<>
    <div className="page">

      <div className="page-title__flex">

        <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>

        <div className="page-title__headline">Connections</div>

        <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>

      </div>

      <div className="connection-flex">

        <div className="connection-outer-flex">

          <div className="connection-user-image">
                    {connection.image !== "" ?
                      <img src={require(`../../images/${connection.image}`).default} alt={connection.name} className="connection-user-photo"/> 
                      : <img src={require(`../../images/default.png`).default} alt="default" className="connection-user-photo"/>}
          </div>

          <div className="connection-info">

            <div className="connection-info__name">
              <strong>{connection.name}</strong>
            </div>

            <div className="connection-inner-flex">

              <div className="inner-flex__row1">

                <div className="inner-flex__row1__col1">
                    <div className="connection-info__email">
                      <div className="c-bold">Email:</div>
                      <div className="c-indent">{connection.email}</div>
                    </div>

                    <div className="connection-info__phone">
                      <div className="c-bold">Phone:</div>
                      <div className="c-indent">{connection.phone}</div>
                    </div>

                    <div className="connection-info__relationship">
                      <div className="c-bold">Relationship:</div>
                      <div className="c-indent">{connection.relationship}</div>
                    </div>

                </div>              

                <div className="inner-flex__row1__col2">
                    <div className="connection-info__address">
                      <div className="c-bold">Address:</div>
                      <div className="inner-address">
                        <div className="c-address">{connection.address}</div>
                        <div className="c-address">{connection.city}, {connection.stateProvince} &nbsp; {connection.zipCode}</div>
                        <div className="c-address">{connection.country}</div>

                      </div>
                    </div>

                    <div className="connection-info__bday">
                      <div className="c-bold">Birthday:</div>
                      <div className="c-indent">{connection.bday}</div>
                    </div>
                </div>

              </div>

              <div className="inner-flex__row2">

                <div className="inner-flex__row2__col1">
                <div className="connection-info__work">
                      <div className="c-bold">Work:</div>
                      <div className="c-indent">{connection.work}</div>
                    </div>
                    <div className="connection-info__gifts">
                      <div className="c-bold">Gift Ideas:</div>
                      <div className="c-indent">{connection.giftIdeas}</div>
                    </div>
                </div>

                <div className="inner-flex__row2__col2">
                    <div className="connection-info__drink">
                      <div className="c-bold">Favorite Drink:</div>
                      <div className="c-indent">{connection.faveDrink}</div>
                    </div>

                    <div className="connection-info__dessert">
                      <div className="c-bold">Favorite Dessert:</div>
                      <div className="c-indent">{connection.faveDessert}</div>
                    </div>
                </div>

              </div>

              <div className="inner-flex__row3">

                <div className="inner-flex__row3__col1">
                    <div className="connection-info__zodiac">
                      <div className="c-bold">Zodiac Sign:</div>
                      <div className="c-indent">{connection.zodiac}</div>
                    </div>
                    <div className="connection-info__personality">
                      <div className="c-bold">Personality Style:</div>
                      <div className="c-indent">{connection.personality}</div>
                    </div>
                    <div className="connection-info__enneagram">
                      <div className="c-bold">Enneagram:</div>
                      <div className="c-indent">{connection.enneagram}</div>
                    </div>
                </div>

                <div className="inner-flex__row3__col2">
                    <div className="connection-info__family">
                      <div className="c-bold">Family Members:</div>
                      <div className="c-indent">{connection.family}</div>
                    </div>
                    <div className="connection-info__pets">
                      <div className="c-bold">Pets:</div>
                      <div className="c-indent">{connection.pets}</div>
                    </div>
                    <div className="connection-info__howWeMet">
                      <div className="c-bold">How We Met:</div>
                      <div className="c-indent">{connection.howWeMet}</div>
                    </div>
                </div>

              </div>

              <div className="inner-flex__row4">

                <div className="inner-flex__row4__full">
                <div className="connection-info__notes">
                      <div className="c-bold">Notes:</div>
                      <div className="c-indent">{connection.notes}</div>
                    </div>
                </div>

              </div>

            </div>

          </div>

          <div className="btn-flex">

              <button className="details-btn" type="button" onClick={goBack}>Connections</button>

              <div className="connection-delete" onClick={handleEdit}>
                <FaEdit className="connection-edit-icon"/>
              </div>

              <button className="details-btn" type="button" onClick={handleDelete}>Delete</button>

          </div>

        </div>

      </div>

    </div>
</>
  );
}