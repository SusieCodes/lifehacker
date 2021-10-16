import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:3333/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:3333/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                                sessionStorage.setItem("nutshell_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <div classname="form__flex">
                <div className="form__flex__inner">
                    <form className="form--login" onSubmit={handleRegister}>
                        <h1 className="register--headline">Please Register for Life Hacker</h1>
                        <fieldset>
                            <label htmlFor="firstName"> First Name </label>
                            <input type="text" name="firstName" id="firstName" className="form__group--edit" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />

                            <label htmlFor="lastName"> Last Name </label>
                            <input type="text" name="lastName" id="lastName" className="form__group--edit" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
        
                            <label htmlFor="inputEmail"> Email address </label>
                            <input type="email" name="email" id="email" className="form__group--edit" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />

                            <div className="form__btns">
                            <button type="submit" className="register__btn"> Sign in </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </main>
    )
}
