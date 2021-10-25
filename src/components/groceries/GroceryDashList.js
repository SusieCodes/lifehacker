//Author: Susie Stanley
//Purpose: Defines component GroceryDashList that renders the next upcoming grocery to the dashboard

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GroceryDashCard } from './GroceryDashCard';
import { getGroceriesByUserId, deleteGrocery } from './GroceryManager';

export const GroceryDashList = () => {
  // The initial state is an empty array
  const [ firstFewItems, setFirstFewItems ] = useState([])

// grabs all Groceries from API, makes a copy, slices the first 5 items to display on dashboard
  const getGroceries = () => {
    const groceryList = getGroceriesByUserId(sessionStorage.getItem("lifehacker_user")).then(groceries => {
      console.log("groceries are: ", groceries)
      const copyOfGroceries = [...groceries]
      const listForDash = copyOfGroceries.slice(0, 3)
      setFirstFewItems(listForDash);
    }); 
    return groceryList;
  };

// deletes Grocery when button clicked
  const handleDelete = (id) => {
    deleteGrocery(id)
    .then(() => {
      getGroceries()
    });
  }

// invokes getGroceries on first render only
  useEffect(() => {
    getGroceries();
  }, []);


  return (
        <>

          {firstFewItems[0] ?
          <>
          <div className="dash-grocery__list">
          {firstFewItems.map(grocery => <GroceryDashCard key={grocery?.id} grocery={grocery} handleDelete={handleDelete} />)}
          </div>

          <div className="see-more">
            <Link to="/groceries">See Full List</Link>
          </div>
          </>
          : <div>No Groceries Yet</div>
          }
        </>
  );
};