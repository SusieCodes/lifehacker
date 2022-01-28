import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { SidebarLogout } from "./SidebarData";

import { getUserById } from "../users/UserManager";
import { IconContext } from "react-icons";
import logo from "../../images/lifehackerbanner.svg";
import "./Sidebar.css";
import "../LifeHacker.css";

export const Sidebar = ({ clearUser }) => {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
    id: 1,
  });

  const getUser = () => {
    getUserById(sessionStorage.getItem("lifehacker_user")).then((currentUser) =>
      setUser(currentUser)
    );
  };

  const history = useHistory();

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Arial",
      fontSize: 20,
    },
  });

  const toggleSidebar = () => {
    setSidebar(!sidebar); // this reverses whatever the current value is (true/false)
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.5em" }}>
        <ThemeProvider theme={theme}>
          <Box sx={{ flexGrow: 1 }}>
            {/* start of AppBar at top of page */}
            <div className="appbar-flex">
              <div className="toolbar">
                <div className="toolbar-left">
                  <Link to="#" className="menu-bars">
                    <GiHamburgerMenu
                      className="menu-icon"
                      onClick={toggleSidebar}
                    />
                  </Link>
                  <Link to="/dashboard">
                    <div className="logo-wrapper">
                      <img className="logo" src={logo} alt="LifeHacker Logo" />
                    </div>
                  </Link>
                </div>
                <div className="toolbar-right">
                  {sessionStorage.getItem("lifehacker_user") ? (
                    <>
                      <div className="user-avatar">
                        {user?.image ? (
                          <Link to={`/users/${user?.id}`}>
                            <img
                              src={user?.image}
                              alt={user?.name}
                              className="avatar-photo"
                            />
                          </Link>
                        ) : (
                          <img
                            src={require(`../../images/default.png`).default}
                            alt="default-user"
                            className="avatar-photo"
                          />
                        )}
                      </div>
                      <button
                        className="logout"
                        onClick={() => {
                          clearUser();
                          history.push("/");
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Box>
        </ThemeProvider>
        {/* start of side menu that slides in & out */}
        <div className={sidebar ? "side-menu active" : "side-menu"}>
          <div className="sidebar-white">
            <ul className="side-menu-items" onClick={toggleSidebar}>
              <li className="sidebar-toggle">
                <Link to="#" className="menu-close">
                  <AiOutlineClose className="close" />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              {SidebarLogout.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        clearUser();
                        history.push("/");
                      }}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* end of side menu */}
      </IconContext.Provider>
    </>
  );
};
