// Author: Susie Stanley
//Purpose: To export multiple components that fetch/update/delete To-Dos info from database


const remoteUrl = "http://localhost:8088"

export const getAllTodosByUserId = (UserId) => {
    return fetch(`${remoteUrl}/todos/?userId=${UserId}&_sort=byWhen&_order=asc`)
        .then(res => res.json())
}

export const getTodoById = (TodoId) => {
    return fetch(`${remoteUrl}/todos/${TodoId}`)
        .then(res => res.json())
}

export const getAllTodos = () => {
    return fetch(`${remoteUrl}/todos?_sort=byWhen&_order=asc`)
        .then(res => res.json())
}

export const addTodo = (newTodo) => {
    return fetch(`${remoteUrl}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    }).then(res => res.json())
}

export const deleteTodo = (id) => {
    return fetch(`${remoteUrl}/todos/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const completeTodo = (id) => {
    return fetch(`${remoteUrl}/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            isCompleted: true
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
}

export const update = (editedTodo) => {
    return fetch(`${remoteUrl}/todos/${editedTodo.id} `, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTodo)
    }).then(data => data.json());
}
