import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"
import { SidebarData } from "./SidebarData"
import { ImageAvatar } from "../navbar/ImageAvatar"
import { IconContext } from "react-icons"
import logo from "../../images/lifehackerbanner.svg";

import "./Sidebar.css"
import "../LifeHacker.css"

function Sidebar() {
  const [ sidebar, setSidebar ] = useState(false)

  const history = useHistory();

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial',
      fontSize: 20
    }
  })

  const toggleSidebar = () => {
    setSidebar(!sidebar) // this reverses whatever the current value is (true/false)
  }
  return (
  <>
  <IconContext.Provider value={{color: "#000000", size: "1.5em"}}>
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <div className="appbar-flex">
          <div className="toolbar">
            <div className="toolbar-left">
              <Link to="#"
                className="menu-bars">
                <GiHamburgerMenu className="menu-icon" onClick={ toggleSidebar } />
              </Link>
              <Link to="/dashboard">
                <div className="logo-wrapper">
                <img className="logo" src={logo} alt="LifeHacker Logo" />
                </div>
              </Link>
            </div>
            <div className="toolbar-right">
            <ImageAvatar className="avatar" />
            <button className="logout" onClick={() => {
            sessionStorage.removeItem("lifehacker_user");
            history.push("/login")}}>Logout</button>
            </div>
          </div>
        </div>
      </Box>
    </ThemeProvider>
    <nav className={ sidebar ? "side-menu active" : "side-menu" }>
      <ul className="side-menu-items" onClick={ toggleSidebar }>
        <li className="sidebar-toggle">
          <Link to="#" 
          className="menu-close">
            <AiOutlineClose className="close" />
          </Link>  
        </li>
        { SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </IconContext.Provider>
  </>
  )
}

export default Sidebar