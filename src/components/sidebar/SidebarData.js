import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "side-text",
  },
  {
    title: "Connections",
    path: "/connections",
    icon: <IoIcons.IoMdPeople />,
    cName: "side-text",
  },
  {
    title: "Activities",
    path: "/activities",
    icon: <Io5Icons.IoCalendar />,
    cName: "side-text",
  },
  {
    title: "To-Do List",
    path: "/todos",
    icon: <GoIcons.GoChecklist />,
    cName: "side-text",
  },
  {
    title: "Groceries",
    path: "/groceries",
    icon: <MdIcons.MdLocalGroceryStore />,
    cName: "side-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <MdIcons.MdNoteAlt />,
    cName: "side-text",
  },
  {
    title: "Journal",
    path: "/journals",
    icon: <IoIcons.IoIosJournal />,
    cName: "side-text",
  },
  {
    title: "Extra Lists",
    path: "/lists",
    icon: <FaIcons.FaListUl />,
    cName: "side-text",
  },
];

export const SidebarLogout = [
  {
    title: "Logout",
    path: "/",
    icon: <Io5Icons.IoLogOut />,
    cName: "side-text",
  },
];
