import React, { useState, useEffect } from "react";
import { getUserById } from "./UserManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
import { formatDateNoWeekday } from "../helper";
import "../LifeHacker.css";
import "../connections/Connections.css";

export const UserDetail = () => {
  const [user, setUser] = useState({
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
    bday: "",
  });

  const { userId } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEdit = () => {
    history.push(`/users/${userId}/edit`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    //use getuserById() from userManager to grab info  and set it to state
    getUserById(userId).then((userInfo) => {
      setUser({
        userId: sessionStorage.getItem("lifehacker_user"),
        name: userInfo.name,
        image: userInfo.image,
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address,
        city: userInfo.city,
        stateProvince: userInfo.stateProvince,
        zipCode: userInfo.zipCode,
        country: userInfo.country,
        bday: userInfo.bday,
      });
    });
  }, [userId]);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Your Account Details" />

        <div className="user-flex">
          <div className="user-outer-flex">
            <div className="user-detail-image">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="user-detail-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default"
                  className="user-detail-photo"
                />
              )}
            </div>

            <div className="user-info">
              <div className="user-info__name">{user.name}</div>

              <div className="user-inner-flex">
                <div className="u-inner-flex__row1">
                  <div className="u-inner-flex__row1__col1">
                    <div className="user-info__email">
                      <div className="c-bold">Email:</div>
                      <div className="c-indent">{user.email}</div>
                    </div>

                    <div className="user-info__phone">
                      <div className="c-bold">Phone:</div>
                      <div className="c-indent">{user.phone}</div>
                    </div>
                  </div>
                  <div className="u-inner-flex__row1__col2">
                    <div className="user-info__address">
                      <div className="c-bold">Address:</div>
                      <div className="inner-address">
                        <div className="c-address">{user.address}</div>
                        <div className="c-address">
                          {user.city}&nbsp;
                          {user.stateProvince}
                        </div>
                        <div className="c-address">
                          {user.zipCode} {""} {user.country}
                        </div>
                      </div>
                    </div>

                    <div className="user-info__bday">
                      <div className="c-bold">Birthday:</div>
                      <div className="c-indent">
                        {user.bday ? (
                          <>{formatDateNoWeekday(user?.bday)}</>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-flex">
              <div className="details-btn" onClick={() => handleEdit(user?.id)}>
                Edit
              </div>

              <div className="details-btn" onClick={goBack}>
                Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
