//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete activity info from database

const url = "http://localhost:8088";

export const getProvidersByUserId = (UserId) => {
  return fetch(`${url}/providers/?userId=${UserId}&_sort=date&_order=asc`).then(
    (res) => res.json()
  );
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

export const update = (editedProvider) => {
  return fetch(`${url}/providers/${editedProvider.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedProvider),
  }).then((data) => data.json());
};
