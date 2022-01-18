import React, { useState, useEffect } from "react";
import { getConnectionById, deleteConnection } from "./ConnectionManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import { formatDateNoWeekday } from "../helper";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { changeFave } from "./ConnectionManager";
import "../LifeHacker.css";
import "./Connections.css";

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
    enneagram: "",
    isFave: false,
  });

  const { connectionId } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    //invokes the delete function in Connection Manager and re-directs to connection list
    deleteConnection(connectionId).then(() => history.push("/connections"));
  };

  const handleFave = (e) => {
    changeFave(connectionId, e.target.checked);
  };

  const goBack = () => {
    history.push("/connections");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEdit = () => {
    history.push(`/connections/${connectionId}/edit`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    //use getConnectionById() from ConnectionManager to grab info  and set it to state
    getConnectionById(connectionId).then((connection) => {
      setConnection({
        userId: sessionStorage.getItem("lifehacker_user"),
        name: connection.name,
        image: connection.image,
        email: connection.email,
        phone: connection.phone,
        address: connection.address,
        city: connection.city,
        stateProvince: connection.stateProvince,
        zipCode: connection.zipCode,
        country: connection.country,
        work: connection.work,
        relationship: connection.relationship,
        bday: connection.bday,
        family: connection.family,
        pets: connection.pets,
        howWeMet: connection.howWeMet,
        giftIdeas: connection.giftIdeas,
        faveDrink: connection.faveDrink,
        faveDessert: connection.faveDessert,
        notes: connection.notes,
        zodiac: connection.zodiac,
        personality: connection.personality,
        enneagram: connection.enneagram,
        isFave: connection.isFave,
      });
    });
  }, [connectionId]);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Connection Details" />

        <div className="connection-flex">
          <div className="connection-outer-flex">
            <div className="connection-user-image">
              {connection.image !== "" ? (
                <img
                  src={connection.image}
                  alt={connection.name}
                  className="connection-user-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default"
                  className="connection-user-photo"
                />
              )}
            </div>

            <div className="connection-info">
              <div className="connection-info__name">
                {connection.name}
                <Checkbox
                  color="error"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  defaultChecked={connection.isFave}
                  onChange={(e) => handleFave(e)}
                />
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
                        <div className="c-address">
                          {connection.city}&nbsp;
                          {connection.stateProvince}
                        </div>
                        <div className="c-address">{connection.zipCode}</div>
                        <div className="c-address">{connection.country}</div>
                      </div>
                    </div>

                    <div className="connection-info__bday">
                      <div className="c-bold">Birthday:</div>
                      <div className="c-indent">
                        {connection.bday !== "" ? (
                          <>{formatDateNoWeekday(connection?.bday)}</>
                        ) : null}
                      </div>
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
              <div className="details-btn" onClick={goBack}>
                Connections
              </div>

              <div
                className="details-btn"
                onClick={() => handleEdit(connection?.id)}
              >
                Edit
              </div>

              <div
                className="details-btn"
                onClick={() => handleDelete(connection?.id)}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
