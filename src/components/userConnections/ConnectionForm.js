//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a connection

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addConnection } from "./ConnectionManager";


export const ConnectionForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

    const [connection, setConnection] = useState(
      { 
        userId: parseInt(sessionStorage.getItem("lifehacker_user")),
        name: "",
        image: "default.png",
        email: "",
        phone: "",
        address: "",
        city: "",
        stateProvince: "",
        zipCode: 0,
        work: "",
        relationship: "",
        birthday: "",
        family: "",
        pets: "",
        howWeMet: "",
        giftIdeas: "",
        favoriteDrink: "",
        favoriteDessert: ""
      }
    );

    const history = useHistory();

    // When a field changes, it updates state
    // The return will re-render and display based on the values in state

    const ResetForm = () => {
      setConnection({
        userId: parseInt(sessionStorage.getItem("lifehacker_user")),
        name: "",
        image: "default.png",
        email: "",
        phone: "",
        address: "",
        city: "",
        stateProvince: "",
        zipCode: 0,
        work: "",
        relationship: "",
        birthday: "",
        family: "",
        pets: "",
        howWeMet: "",
        giftIdeas: "",
        favoriteDrink: "",
        favoriteDessert: "",
        notes: ""
      })
    }

    const handleControlledInputChange = (evt) => {
      /* Because we are changing a state object or array,
      we are creating a copy, making changes, and then setting state */
      const newConnection = { ...connection }
      let selectedVal = evt.target.value
  
      /* Sets the property to the new value
      using object bracket notation. */
      newConnection[evt.target.id] = selectedVal
      // update state
      setConnection(newConnection)
    }

    const handleSave = (evt) => {
      evt.preventDefault() //Prevents the browser from submitting the form
        console.log("connection is: ", connection)
        if (connection.name === "") {
          console.log("connection.name === ''")
          setConflictDialog(true)
        } else {
          console.log("else")
          addConnection(connection).then(() => history.push("/connections"))
          }
    }

    return (
<>

    <div className="form__flex">

    <div className="form__title">Add Connection</div>

        <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
                <div className="connection__dialog">Please Input A First &#38; Last Name</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <div className="form__group">
                <label htmlFor="name">First &#38; Last Name: </label>
                <input type="text" id="name" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter First &#38; Last Name" />
            </div>

            <div className="form__group">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter email" />
            </div>

            <div className="form__group">
                <label htmlFor="phone">Phone #: </label>
                <input type="text" id="phone" onChange={handleControlledInputChange} className="form__group--edit" placeholder="XXX-XXX-XXXX" />
            </div>

            <div className="form__group">
                <label htmlFor="address">Street Address: </label>
                <input type="text" id="address" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter Street Address" />
            </div>

            <div className="form__group">
                <label htmlFor="city">City: </label>
                <input type="text" id="city" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter City" />
            </div>

            <div className="form__group">
                <label htmlFor="stateProvince">State or Province: </label>
                <input type="text" id="stateProvince" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter 2 Letter Code" />
            </div>

            <div className="form__group">
                <label htmlFor="zipcode">Zipcode: </label>
                <input type="text" id="zipcode" onChange={handleControlledInputChange} className="form__group--edit" placeholder="5 digit zipcode" />
            </div>

            <div className="form__group">
                <label htmlFor="work">Connection Name: </label>
                <input type="text" id="work" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter Work" />
            </div>

            <div className="form__group">
                <label htmlFor="relationship">Relationship: </label>
                <input type="text" id="relationship" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter relationship (friend, sibling, parent etc" />
            </div>

            <div className="form__group">
                <label htmlFor="birthday">Birthday: </label>
                <input type="date" id="birthday" onChange={handleControlledInputChange} className="form__group--edit" />
            </div>

            <div className="form__group">
                <label htmlFor="family">Family Members: </label>
                <input type="text" id="family" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter family members" />
            </div>

            <div className="form__group">
                <label htmlFor="pets">Pets: </label>
                <input type="text" id="pets" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter pets" />
            </div>

            <div className="form__group">
                <label htmlFor="howWeMet">How/Where Did You Meet: </label>
                <input type="text" id="howWeMet" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter How You Met" />
            </div>

            <div className="form__group">
                <label htmlFor="giftIdeas">Gift Ideas: </label>
                <input type="text" id="giftIdeas" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter gift idea or store" />
            </div>

            <div className="form__group">
                <label htmlFor="faveDrink">Favorite Drink: </label>
                <input type="text" id="faveDrink" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter favorite drink (wine, beer, juice etc)" />
            </div>

            <div className="form__group">
                <label htmlFor="faveDessert">Favorite Dessert: </label>
                <input type="text" id="faveDessert" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter favorite dessert" />
            </div>

            <div className="form__group">
                <label htmlFor="notes">Relationship: </label>
                <input type="text" id="notes" onChange={handleControlledInputChange} className="form__group--edit" placeholder="Enter notes" />
            </div>

        </fieldset>

        <div className="form__btns">
                <button 
                type="button" 
                className="form__btn" 
                onClick={handleSave}>
                  Submit
                </button>

                <button 
                type="button"
                className="form__btn"
                onClick={ResetForm}>
                  Reset Form
                </button>

                <button className="form__btn" onClick={() => history.push("/connections")}>Cancel</button>
        </div>

    </div>
</>
    )
}