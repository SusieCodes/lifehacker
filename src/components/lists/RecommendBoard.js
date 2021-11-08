//Author: Susie Stanley
//Purpose: Defines component recommendationBoard that renders a list of all the upcoming and past recommendations

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecommendSortCard } from "./RecommendSortCard";
import {
  getRecommendationsByUserId,
  deleteRecommendation,
  getReclist,
} from "./ListManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const RecommendBoard = () => {
  // The initial states are empty arrays
  const [reclist, setReclist] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);
  const [books, setBooks] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [activities, setActivities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [providers, setProviders] = useState([]);
  const [other, setOther] = useState([]);

  // grabs all recommendations from API, and sets it to state
  const getReclistForSort = () => {
    getReclist().then((recsFromAPI) => {
      setReclist(recsFromAPI);
    });
  };

  // grabs all recommendations from API, and sets it to state
  const getRecommendations = () => {
    getRecommendationsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (recommendationsFromAPI) => {
        const copyOfRecommendations = [...recommendationsFromAPI];

        // sets movie recommendations to state
        let movies = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 1;
        });
        setMovies(movies);

        // sets tvshow recommendations to state
        let tvshows = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 2;
        });
        setTvshows(tvshows);

        // sets book recommendations to state
        let books = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 3;
        });
        setBooks(books);

        // sets podcast recommendations to state
        let podcasts = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 4;
        });
        setPodcasts(podcasts);

        // sets activity recommendations to state
        let activities = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 5;
        });
        setActivities(activities);

        // sets restaurant recommendations to state
        let restaurants = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 6;
        });
        setRestaurants(restaurants);

        // sets provider recommendations to state
        let providers = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 7;
        });
        setProviders(providers);

        // sets other recommendations to state
        let other = copyOfRecommendations.filter((evt) => {
          return evt.reclistId === 8;
        });
        setOther(other);
      }
    );
  };

  // deletes recommendation when button clicked
  const handleDelete = (id) => {
    deleteRecommendation(id).then(() => {
      getRecommendations();
    });
  };

  // getFuturerecommendations gets all future recommendations from API and saves the array to state as 'futurerecommendations' on first render only
  useEffect(() => {
    getRecommendations();
    getReclistForSort();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Recommendations" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/recommendations/create`}>
              <button className="add-recommendation">
                + Add recommendation
              </button>
              <Link to={`/lists`}>
                <button className="add-recommendation">Back</button>
              </Link>
            </Link>
          </div>

          <div className="board-container__rec">
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">MOVIES</div>
                <div className="rec-sort-image">
                  {reclist[0]?.image ? (
                    <img
                      src={require(`../../images/${reclist[0]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {movies.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>

            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">TV SHOWS</div>
                <div className="rec-sort-image">
                  {reclist[1]?.image ? (
                    <img
                      src={require(`../../images/${reclist[1]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {tvshows.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-rec"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">BOOKS</div>
                <div className="rec-sort-image">
                  {reclist[2]?.image ? (
                    <img
                      src={require(`../../images/${reclist[2]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {books.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">PODCASTS</div>
                <div className="rec-sort-image">
                  {reclist[3]?.image ? (
                    <img
                      src={require(`../../images/${reclist[3]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {podcasts.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">ACTIVITIES</div>
                <div className="rec-sort-image">
                  {reclist[4]?.image ? (
                    <img
                      src={require(`../../images/${reclist[4]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {activities.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>

            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">RESTAURANTS</div>
                <div className="rec-sort-image">
                  {reclist[5]?.image ? (
                    <img
                      src={require(`../../images/${reclist[5]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {restaurants.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">PROVIDERS</div>
                <div className="rec-sort-image">
                  {reclist[6]?.image ? (
                    <img
                      src={require(`../../images/${reclist[6]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {providers.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
            <div className="column-center-rec">
              <div className="rec-sort-title-icon">
                <div className="rec-sort-title">OTHER</div>
                <div className="rec-sort-image">
                  {reclist[7]?.image ? (
                    <img
                      src={require(`../../images/${reclist[7]?.image}`).default}
                      alt="icon"
                      className="rec-icon-sort"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="rec-card-wrapper">
                {other.map((recommendation) => (
                  <RecommendSortCard
                    key={recommendation?.id}
                    recommendation={recommendation}
                    card="card-content-reclist"
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
