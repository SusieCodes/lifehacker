//Author: Susie Stanley
//Purpose: Defines component ActivityDashList that renders the next upcoming activity to the dashboard

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { ActivityDashCard } from './ActivityDashCard';
import { getAllActivitiesByUserId, deleteActivity } from './ActivityManager';

export const ActivityDashList = () => {
  // The initial state is an empty array
  const [ firstUpcomingActivity, setFirstUpcomingActivity ] = useState({})
  const [ futureActivities, setFutureActivities ] = useState([])

// grabs all Activities from API, makes a copy, filters through each Activity and returns array of the objects dated after today
const getFutureActivities = () => {
    const today = new Date();
    const parsedToday = today.getTime()
    return getAllActivitiesByUserId(sessionStorage.getItem("lifehacker_user")).then(ActivitiesFromAPI => {
      const copyOfActivities = [...ActivitiesFromAPI]
      const futureDatedActivities = copyOfActivities.filter(function (evt) {
          let evtDate = Date.parse(evt.date);
          if (evtDate > parsedToday) {
            return evt
          }
      })
      setFutureActivities(futureDatedActivities);
    }); 
  };

// saves a copy of futureActivities array from state then grabs the first activity and sets that to state
  const showFirstUpcomingActivity = () => {
    const copyOfFutureActivities = [...futureActivities]
    const firstActivityObj = copyOfFutureActivities.shift()
    setFirstUpcomingActivity(firstActivityObj)
  }

// deletes Activity when button clicked
  const handleDelete = (id) => {
    deleteActivity(id)
    .then(() => {
      getFutureActivities()
      showFirstUpcomingActivity()
    });
  }
  
// getFutureActivities gets all future activities from API and saves the array to state as 'futureActivities' on first render only
  useEffect(() => {
    getFutureActivities();
  }, []);

// showFirstUpcomingActivity makes a copy of all futureActivities, grabs first activity from array and saves it to state as 'firstUpcomingActivity' on first render only
  useEffect(() => {
    showFirstUpcomingActivity();
  }, [futureActivities]);


  return (
        <>
          {<ActivityDashCard
            key={firstUpcomingActivity?.id}
            activity={firstUpcomingActivity}
            handleDelete={handleDelete} /> }
        </>
  );
};
