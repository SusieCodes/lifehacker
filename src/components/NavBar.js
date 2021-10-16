import React from "react"
import { Link } from "react-router-dom"
import "./LifeHacker.css"
import logo from "../images/lifehackerlogo.svg";
import { useHistory } from "react-router";


export const NavBar = () => {

const history = useHistory();  

  return (
    <nav className="nav__flex">
                <Link to="/">
                  <img className="logo" src={logo} alt="Life Hacker Logo" />
                </Link>
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/articles">Connections</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/friends">Activities</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/messages">To-Do's</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/tasks">Notes</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/events">Journal</Link>
        </li>
        <li className="nav__item">
          <button className="nav__button" onClick={() => {
            sessionStorage.removeItem("lifehacker_user");
            history.push("/login")
        }}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
