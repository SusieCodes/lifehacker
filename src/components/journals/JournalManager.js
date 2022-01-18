//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete journal info from database

const url = "https://lifehacker-api.herokuapp.com";

export const getJournalsByUserId = (UserId) => {
  return fetch(
    `${url}/journals/?userId=${UserId}&_sort=dayTime&_order=desc`
  ).then((res) => res.json());
};

export const addJournal = (newJournal) => {
  return fetch(`${url}/journals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJournal),
  }).then((response) => response.json());
};

export const deleteJournal = (id) => {
  return fetch(`${url}/journals/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getJournalById = (JournalId) => {
  return fetch(`${url}/journals/${JournalId}`).then((res) => res.json());
};

export const update = (editedJournal) => {
  return fetch(`${url}/journals/${editedJournal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedJournal),
  }).then((data) => data.json());
};
