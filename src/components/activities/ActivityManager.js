//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete activity info from database

const url = "https://lifehacker-api.herokuapp.com/";

export const getAllActivitiesByUserId = (UserId) => {
  return fetch(
    `${url}/activities/?userId=${UserId}&_expand=tag&_sort=date&_order=asc`
  ).then((res) => res.json());
};

export const addActivity = (newActivity) => {
  return fetch(`${url}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newActivity),
  }).then((response) => response.json());
};

export const deleteActivity = (id) => {
  return fetch(`${url}/activities/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getActivityById = (activityId) => {
  return fetch(`${url}/activities/${activityId}?_expand=tag`).then((res) =>
    res.json()
  );
};

export const update = (editedActivity) => {
  return fetch(`${url}/activities/${editedActivity.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedActivity),
  }).then((data) => data.json());
};

export const getTags = () => {
  return fetch(`${url}/tags`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
