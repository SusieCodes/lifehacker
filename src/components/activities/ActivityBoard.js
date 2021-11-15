//Author: Susie Stanley
//Purpose: Defines component ActivityBoard that renders a list of all the upcoming and past activities

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ActivityCard } from "./ActivityCard";
import { getAllActivitiesByUserId, deleteActivity } from "./ActivityManager";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "./Activity.css";
import "../LifeHacker.css";

export const ActivityBoard = () => {
  // The initial state is an empty array
  const [remainingActivities, setRemainingActivities] = useState([]);
  const [firstUpcomingActivity, setFirstUpcomingActivity] = useState({});
  const [futureActivities, setFutureActivities] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  // grabs all Activities from API, makes a copy, filters through each Activity and returns array of the objects dated after today
  const getFutureActivities = () => {
    const today = new Date();
    const parsedToday = today.getTime();
    getAllActivitiesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (ActivitiesFromAPI) => {
        const copyOfActivities = [...ActivitiesFromAPI];
        const futureDatedActivities = copyOfActivities.filter((evt) => {
          let evtDate = Date.parse(evt.date);
          return evtDate > parsedToday;
        });
        setFutureActivities(futureDatedActivities);
      }
    );
  };

  // grabs all activities from API, makes a copy, filters through each activity and returns array of the objects dated before today
  const getPastActivities = () => {
    const today = new Date();
    const parsedToday = today.getTime();
    getAllActivitiesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (ActivitiesFromAPI) => {
        const copyOfActivities = [...ActivitiesFromAPI];
        const pastDatedActivities = copyOfActivities.filter((evt) => {
          let evtDate = Date.parse(evt.date);
          return evtDate < parsedToday;
        });
        pastDatedActivities.reverse(); //reverses order of array so most recent Activity is at top of list
        setPastActivities(pastDatedActivities);
      }
    );
  };

  // saves a copy of futureActivities array from state then grabs the first activity and sets that to state
  const showFirstUpcomingActivity = () => {
    const copyOfFutureActivities = [...futureActivities];
    const firstActivityObj = copyOfFutureActivities.shift();
    setFirstUpcomingActivity(firstActivityObj);
  };

  // saves a copy of futureActivities array, removes first object and sets remaining activities to state as 'Activities'
  const showRemainingUpcomingActivities = () => {
    const copyOfFutureActivities = [...futureActivities];
    copyOfFutureActivities.shift();
    const remainingFutureActivities = copyOfFutureActivities;
    setRemainingActivities(remainingFutureActivities);
  };

  // deletes Activity when button clicked
  const handleDelete = (id) => {
    deleteActivity(id).then(() => {
      getFutureActivities();
      getPastActivities();
      showFirstUpcomingActivity();
      showRemainingUpcomingActivities();
    });
  };

  // getFutureActivities gets all future activities from API and saves the array to state as 'futureActivities' on first render only
  useEffect(() => {
    getFutureActivities();
  }, []);

  // getPastActivities gets all past activities from API and saves the array to state as 'pastActivities' on first render only
  useEffect(() => {
    getPastActivities();
  }, []);

  // showFirstUpcomingActivity makes a copy of all futureActivities, grabs first activity from array and saves it to state as 'firstUpcomingActivity'
  useEffect(() => {
    showFirstUpcomingActivity();
    showRemainingUpcomingActivities();
  }, [futureActivities]);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Activities" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/activities/create`}>
              <button className="add-activity">+ Add Activity</button>
            </Link>
            <Link to={`/activitiestag`}>
              <button className="add-activity">Sort By Tag</button>
            </Link>
          </div>

          <div className="board-container__activity">
            <div className="first-upcoming">
              <div className="column-center">
                <h2>NEXT ACTIVITY</h2>
                {
                  <ActivityCard
                    key={firstUpcomingActivity?.id}
                    activity={firstUpcomingActivity}
                    card="card-content1"
                    handleDelete={handleDelete}
                  />
                }
              </div>
            </div>

            {/* <div className="upcoming-past-wrapper"> */}
            <div className="remaining-upcoming">
              <div className="column-center">
                <h2>UPCOMING ACTIVITIES</h2>
                {remainingActivities.map((activity) => (
                  <ActivityCard
                    key={activity?.id}
                    activity={activity}
                    card="card-content2"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>

            <div className="past">
              <div className="column-center">
                <h2>PAST ACTIVITIES</h2>

                {pastActivities.map((activity) => (
                  <ActivityCard
                    key={activity?.id}
                    activity={activity}
                    card="card-content2"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
