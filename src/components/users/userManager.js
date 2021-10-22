//Author: Susie Stanley
//Purpose: Fetch calls to get users

const url = "http://localhost:8088"

export const getAllUsers = () => {
  return fetch(`${url}/users`)
      .then(res => res.json())
}

export const getUserById = (userId) => {
  return fetch(`${url}/users/${userId}`)
      .then(res => res.json())
}