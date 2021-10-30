//Author: Susie Stanley
//Purpose: Fetch calls to get User info

const url = "http://localhost:8088";

export const getAllUsers = () => {
  return fetch(`${url}/users`).then((res) => res.json());
};

export const getUserById = (userId) => {
  return fetch(`${url}/users/${userId}`).then((res) => res.json());
};

export const update = (editedUser) => {
  return fetch(`${url}/users/${editedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedUser),
  }).then((data) => data.json());
};
