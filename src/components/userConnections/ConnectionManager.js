//Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete activity info from database

const url = "http://localhost:8088"

export const getConnectionsById = (input) => {
    return fetch(`${url}/connections/?currentUserId=${input}&_expand=user`)
        .then(res => res.json())
}

export const deleteConnection = (id) => {
    return fetch(`${url}/connections/${id}`, {
        method: "DELETE"
    })
        .then(result => result.json())
}

export const addConnection = (connection) => {
    return fetch(`${url}/connections`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(connection)
    }).then(response => response.json())
  }

  export const getAllConnections = () => {
    return fetch(`${url}/connections`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"     
        },
    }).then(res => res.json())
  }