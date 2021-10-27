//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete connection info from database

const url = 'http://localhost:8088'
export const getConnectionsByUserId = (userId) => {
  return fetch(`${url}/connections/?userId=${userId}`).then((res) => res.json())
}

export const getConnectionById = (id) => {
  return fetch(`${url}/connections/?id=${id}`).then((res) => res.json())
}

export const deleteConnection = (id) => {
  return fetch(`${url}/connections/${id}`, {
    method: 'DELETE',
  }).then((result) => result.json())
}

export const addConnection = (connection) => {
  return fetch(`${url}/connections`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(connection),
  }).then((response) => response.json())
}

export const update = (editedConnection) => {
  return fetch(`${url}/connections/${editedConnection.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedConnection),
  }).then((data) => data.json())
}