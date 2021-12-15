//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete notes from database

const url = "https://lifehacker-api.herokuapp.com";

export const getNotesByUserId = (userId) => {
  return fetch(`${url}/notes/?userId=${userId}&_sort=isFave&_order=desc`).then(
    (res) => res.json()
  );
};

export const getAllNotes = () => {
  return fetch(`${url}/notes?_sort=date&_order=asc`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const addNote = (newNote) => {
  return fetch(`${url}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  }).then((response) => response.json());
};

export const deleteNote = (id) => {
  return fetch(`${url}/notes/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const getNoteById = (noteId) => {
  return fetch(`${url}/notes/${noteId}`).then((res) => res.json());
};

export const update = (editedNote) => {
  return fetch(`${url}/notes/${editedNote.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedNote),
  }).then((data) => data.json());
};

export const changeFave = (id, fave) => {
  return fetch(`${url}/notes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      isFave: fave,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};
