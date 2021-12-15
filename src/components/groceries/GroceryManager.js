//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete grocery info from database

const url = "https://lifehacker-api.herokuapp.com/";

export const getGroceriesByUserId = (UserId) => {
  return fetch(`${url}/groceries/?userId=${UserId}`).then((res) => res.json());
};

export const getAllGroceries = () => {
  return fetch(`${url}/groceries`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const addGrocery = (newGrocery) => {
  return fetch(`${url}/groceries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGrocery),
  }).then((response) => response.json());
};

export const deleteGrocery = (id) => {
  return fetch(`${url}/groceries/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getGroceryById = (groceryId) => {
  return fetch(`${url}/groceries/${groceryId}`).then((res) => res.json());
};

export const update = (editedGrocery) => {
  return fetch(`${url}/groceries/${editedGrocery.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedGrocery),
  }).then((data) => data.json());
};
