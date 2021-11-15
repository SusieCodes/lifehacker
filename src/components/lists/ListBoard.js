//Author: Susie Stanley
//Purpose: Defines component ActivityBoard that renders a list of all the upcoming and past activities

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProviderCard } from "./ProviderCard";
import { RecommendationCard } from "./RecommendationCard";
import { WishlistCard } from "./WishlistCard";
import {
  getProvidersByUserId,
  getRecommendationsByUserId,
  getWishlistByUserId,
  deleteProvider,
  deleteRecommendation,
  deleteWishlist,
  completeWishlist,
} from "./ListManager";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "./List.css";
import "../LifeHacker.css";

export const ListBoard = () => {
  const user = sessionStorage.getItem("lifehacker_user");
  // The initial states are empty arrays
  const [providers, setProviders] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // grabs all Providers from API, and sets it to state
  const getProviders = () => {
    getProvidersByUserId(user).then((providersFromAPI) => {
      setProviders(providersFromAPI);
    });
  };

  // grabs all Activities from API, and sets it to state
  const getRecommendations = () => {
    getRecommendationsByUserId(user).then((recommendationsFromAPI) => {
      setRecommendations(recommendationsFromAPI);
    });
  };

  const getWishlist = () => {
    getWishlistByUserId(user).then((itemsFromAPI) => {
      let itemsNeeded = itemsFromAPI.filter((obj) => obj.isCompleted === false);
      setWishlist(itemsNeeded);
    });
  };

  // deletes provider when button clicked
  const handleDeleteProvider = (id) => {
    deleteProvider(id).then(() => {
      getProviders();
    });
  };

  // deletes recommended when button clicked
  const handleDeleteRecommendation = (id) => {
    deleteRecommendation(id).then(() => {
      getRecommendations();
    });
  };

  // deletes wishlist item when button clicked
  const handleDeleteWishlist = (id) => {
    deleteWishlist(id).then(() => {
      getWishlist();
    });
  };

  const handleCompleteWishlist = (id) => {
    completeWishlist(id).then(() => getWishlist());
  };

  // invokes all 3 functions to pull info from API and saves them to state on first render only
  useEffect(() => {
    getProviders();
    getRecommendations();
    getWishlist();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="List Hub" />

        <div className="section-flex">
          <div className="board-container__lists">
            <div className="column-center-lists">
              <div className="sort-title-list">SERVICE PROVIDERS</div>

              <Link to={`/providers/create`}>
                <button className="add-provider">+ Add Provider</button>
              </Link>

              {providers.map((provider) => (
                <ProviderCard
                  key={provider?.id}
                  provider={provider}
                  handleDeleteProvider={handleDeleteProvider}
                />
              ))}
            </div>

            <div className="column-center-lists">
              <div className="sort-title-list">RECOMMENDATIONS</div>

              <div className="rec-button-wrapper">
                <Link to={`/recommendations/create`}>
                  <button className="add-recommendation">
                    + Add Recommendation
                  </button>
                </Link>

                <Link to={`/recommendations`}>
                  <button className="add-recommendation">Sort</button>
                </Link>
              </div>

              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation?.id}
                  recommendation={recommendation}
                  handleDeleteRecommendation={handleDeleteRecommendation}
                />
              ))}
            </div>

            <div className="column-center-lists">
              <div className="sort-title-list">WISHLIST</div>

              <Link to={`/wishlists/create`}>
                <button className="add-wishlist">+ Add Wishlist</button>
              </Link>

              {wishlist.map((wishlist) => (
                <WishlistCard
                  key={wishlist?.id}
                  wishlist={wishlist}
                  handleDeleteWishlist={handleDeleteWishlist}
                  handleCompleteWishlist={handleCompleteWishlist}
                />
              ))}

              <div className="section-flex__content">
                <Link to={`/wishlists/print`}>
                  <button className="wishlist-printable-btn">Print</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
