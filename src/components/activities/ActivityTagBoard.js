//Author: Susie Stanley
//Purpose: Defines component ActivityBoard that renders a list of all the upcoming and past activities

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ActivityTagCard } from "./ActivityTagCard";
import {
  getAllActivitiesByUserId,
  deleteActivity,
  getTags,
} from "./ActivityManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./Activity.css";
import "../LifeHacker.css";

export const ActivityTagBoard = () => {
  // The initial states are empty arrays
  const [tags, setTags] = useState([]);
  const [personalActivities, setFamilyActivities] = useState([]);
  const [familyActivities, setPersonalActivities] = useState([]);
  const [workActivities, setWorkActivities] = useState([]);
  const [communityActivities, setCommunityActivities] = useState([]);
  const [schoolActivities, setSchoolActivities] = useState([]);

  // grabs all Activities from API, and sets it to state
  const getTagsForSort = () => {
    getTags().then((tagsFromAPI) => {
      setTags(tagsFromAPI);
    });
  };

  // grabs all Activities from API, and sets it to state
  const getActivities = () => {
    getAllActivitiesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (activitiesFromAPI) => {
        const copyOfActivities = [...activitiesFromAPI];

        // sets personal activities to state
        let personal = copyOfActivities.filter((evt) => {
          return evt.tagId === 1;
        });
        setPersonalActivities(personal);

        // sets family activities to state
        let family = copyOfActivities.filter((evt) => {
          return evt.tagId === 2;
        });
        setFamilyActivities(family);

        // sets work activities to state
        let work = copyOfActivities.filter((evt) => {
          return evt.tagId === 3;
        });
        setWorkActivities(work);

        // sets community activities to state
        let community = copyOfActivities.filter((evt) => {
          return evt.tagId === 4;
        });
        setCommunityActivities(community);

        // sets school activities to state
        let school = copyOfActivities.filter((evt) => {
          return evt.tagId === 5;
        });
        setSchoolActivities(school);
      }
    );
  };

  // deletes Activity when button clicked
  const handleDelete = (id) => {
    deleteActivity(id).then(() => {
      getActivities();
    });
  };

  // getFutureActivities gets all future activities from API and saves the array to state as 'futureActivities' on first render only
  useEffect(() => {
    getActivities();
    getTagsForSort();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Activities" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/activities/create`}>
              <button className="add-activity">+ Add Activity</button>
              <Link to={`/activities`}>
                <button className="add-activity">Back</button>
              </Link>
            </Link>
          </div>

          <div className="board-container__tags">
            <div className="column-center-sort">
              <div className="sort-title-icon">
                <div className="sort-title">PERSONAL</div>
                <div className="sort-image">
                  {tags[0]?.icon ? (
                    <img
                      src={require(`../../images/${tags[0]?.icon}`).default}
                      alt="icon"
                      className="tag-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {personalActivities.map((activity) => (
                <ActivityTagCard
                  key={activity?.id}
                  activity={activity}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))}
            </div>

            <div className="column-center-sort">
              <div className="sort-title-icon">
                <div className="sort-title">FAMILY</div>
                <div className="sort-image">
                  {tags[1]?.icon ? (
                    <img
                      src={require(`../../images/${tags[1]?.icon}`).default}
                      alt="icon"
                      className="tag-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {familyActivities.map((activity) => (
                <ActivityTagCard
                  key={activity?.id}
                  activity={activity}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))}
            </div>

            <div className="column-center-sort">
              <div className="sort-title-icon">
                <div className="sort-title">WORK</div>
                <div className="sort-image">
                  {tags[2]?.icon ? (
                    <img
                      src={require(`../../images/${tags[2]?.icon}`).default}
                      alt="icon"
                      className="tag-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {workActivities.map((activity) => (
                <ActivityTagCard
                  key={activity?.id}
                  activity={activity}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))}
            </div>

            <div className="column-center-sort">
              <div className="sort-title-icon">
                <div className="sort-title">COMMUNITY</div>
                <div className="sort-image">
                  {tags[3]?.icon ? (
                    <img
                      src={require(`../../images/${tags[3]?.icon}`).default}
                      alt="icon"
                      className="tag-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {communityActivities.map((activity) => (
                <ActivityTagCard
                  key={activity?.id}
                  activity={activity}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))}
            </div>

            <div className="column-center-sort">
              <div className="sort-title-icon">
                <div className="sort-title">SCHOOL</div>
                <div className="sort-image">
                  {tags[4]?.icon ? (
                    <img
                      src={require(`../../images/${tags[4]?.icon}`).default}
                      alt="icon"
                      className="tag-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {schoolActivities.map((activity) => (
                <ActivityTagCard
                  key={activity?.id}
                  activity={activity}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
