//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete activity info from database

const url = "http://localhost:8088";

export const getProvidersByUserId = (userId) => {
  return fetch(`${url}/providers/?userId=${userId}`).then((res) => res.json());
};

export const addProvider = (newProvider) => {
  return fetch(`${url}/providers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProvider),
  }).then((response) => response.json());
};

export const deleteProvider = (id) => {
  return fetch(`${url}/providers/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getProviderById = (providerId) => {
  return fetch(`${url}/providers/${providerId}`).then((res) => res.json());
};

export const updateProvider = (editedProvider) => {
  return fetch(`${url}/providers/${editedProvider.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedProvider),
  }).then((data) => data.json());
};

export const getRecommendationsByUserId = (userId) => {
  return fetch(
    `${url}/recommendations/?userId=${userId}&_sort=date&_order=asc`
  ).then((res) => res.json());
};

export const addRecommendation = (newRecommendation) => {
  return fetch(`${url}/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecommendation),
  }).then((response) => response.json());
};

export const deleteRecommendation = (id) => {
  return fetch(`${url}/recommendations/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getRecommendationById = (recommendationId) => {
  return fetch(`${url}/recommendations/${recommendationId}`).then((res) =>
    res.json()
  );
};

export const updateRecommendation = (editedRecommendation) => {
  return fetch(`${url}/recommendations/${editedRecommendation.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedRecommendation),
  }).then((data) => data.json());
};

export const getWishlistByUserId = (userId) => {
  return fetch(`${url}/wishlists/?userId=${userId}`).then((res) => res.json());
};

export const addWishlist = (newWishlist) => {
  return fetch(`${url}/wishlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWishlist),
  }).then((response) => response.json());
};

export const deleteWishlist = (id) => {
  return fetch(`${url}/wishlists/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getWishlistById = (wishlistId) => {
  return fetch(`${url}/wishlists/${wishlistId}`).then((res) => res.json());
};

export const updateWishlist = (editedWishlist) => {
  return fetch(`${url}/wishlists/${editedWishlist.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedWishlist),
  }).then((data) => data.json());
};

export const completeWishlist = (id) => {
  return fetch(`${url}/wishlists/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      isCompleted: true,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};
