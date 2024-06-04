import React from 'react';
import '../css/homeHeader.css';
import profile from "../assets/boy2.png";
import { GoHomeFill } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand"><GoHomeFill size={30} />Home</div>
        <div className="navbar-links">
          <a className="nav-link" href="#"><MdCalendarToday size={30} /> Events</a>
          <a className="nav-link" href="#"><MdAdminPanelSettings size={30} /> Admins</a>
          <a className="nav-link" href="#"><IoMdSettings size={30} /> Settings</a>
        </div>
        <div className="navbar-search">
          <button type="submit">Search</button>
          <input type="text" placeholder="Search here" />
        </div>
        <div className="navbar-profile">
          <img src={profile} alt="Profile" className="profile-image" />
          <span>Yameena</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;