//Author: Susie Stanley
//Purpose: Defines component ActivityBoard that renders a list of all the upcoming and past activities

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ActivityTagCard } from "../activities/ActivityTagCard";
import { ProviderCard } from "./ProviderCard";
import { getProvidersByUserId, deleteProvider } from "./ListManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const ListBoard = () => {
  // The initial states are empty arrays
  const [providers, setProviders] = useState([]);
  // const [recommendations, setRecommendations] = useState([]);
  // const [wishlist, setWishlist] = useState([]);

  // grabs all Providers from API, and sets it to state
  const getProviders = () => {
    getProvidersByUserId().then((providersFromAPI) => {
      setProviders(providersFromAPI);
    });
  };

  // grabs all Activities from API, and sets it to state
  // const getRecommendations = () => {
  //   getRecommendationsByUserId().then((recommendationsFromAPI) => {
  //     setRecommendations(recommendationsFromAPI);
  //   });
  // };

  // const getWishlist = () => {
  //   getWishlistByUserId().then((wishlistFromAPI) => {
  //     setWishlist(wishlistFromAPI);
  //   });
  // };

  // deletes Activity when button clicked
  const handleDeleteProvider = (id) => {
    deleteProvider(id).then(() => {
      getProviders();
    });
  };

  // deletes Activity when button clicked
  // const handleDeleteRecommendation = (id) => {
  //   deleteRecommendation(id).then(() => {
  //     getRecommendations();
  //   });
  // };

  // deletes Activity when button clicked
  // const handleDeleteWishlist = (id) => {
  //   deleteWishlist(id).then(() => {
  //     getWishlist();
  //   });
  // };

  // invokes all 3 functions to pull info from API and saves them to state on first render only
  useEffect(() => {
    getProviders();
    // getRecommendations();
    // getWishlist();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar title="List Hub" />

        <div className="section-flex">
          <div className="board-container__lists">
            <div className="column-center-lists">
              <div className="sort-title-icon">
                <div className="sort-title">SERVICE PROVIDERS</div>
              </div>
              {providers.map((provider) => (
                <ProviderCard
                  key={provider?.id}
                  provider={provider}
                  card="card-content-tag"
                  handleDeleteProvider={handleDeleteProvider}
                />
              ))}
            </div>

            <div className="column-center-lists">
              <div className="sort-title-icon">
                <div className="sort-title">RECOMMENDATIONS</div>
              </div>
              {/* {workActivities.map((recommendation) => (
                <RecommendationCard
                  key={recommendation?.id}
                  recommendation={recommendation}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))} */}
            </div>

            <div className="column-center-lists">
              <div className="sort-title-icon">
                <div className="sort-title">WISHLIST</div>
              </div>

              {/* {wishlist.map((item) => (
                <WishlistCard
                  key={item?.id}
                  item={item}
                  card="card-content-tag"
                  handleDelete={handleDelete}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
