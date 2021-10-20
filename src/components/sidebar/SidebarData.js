import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons  from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-text"

  },
  {
    title: "Connections",
    path: "/connections",
    icon: <IoIcons.IoIosPaper />,
    cName: "side-text"

  },
  {
    title: "Activities",
    path: "/activities",
    icon: <FaIcons.FaCartPlus />,
    cName: "side-text"

  },
  {
    title: "To-Do",
    path: "/todo",
    icon: <IoIcons.IoMdPeople />,
    cName: "side-text"

  },
  {
    title: "Notes",
    path: "/notes",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "side-text"
  },
  {
    title: "Journal",
    path: "/journal",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-text"
  },
  {
    title: "Logout",
    path: "/login",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-text"
  }
]

export default SidebarData;