import React from 'react';
import '../css/homeHeader.css';
import profile from "../assets/boy2.png";
import { GoHomeFill } from "react-icons/go";
import { MdCalendarToday } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className='navbar-brand'>
          <img src={logo} className='d-inline-block align-text-top logo-image'/>
        </Link>
        <div className="navbar-links">
          <a className="nav-link current-nav-link"><GoHomeFill size={30} />Home</a>
          <a className="nav-link" href="#"><MdCalendarToday size={30} /> Events</a>
          <a className="nav-link" href="#"><MdAdminPanelSettings size={30} /> Admins</a>
          <a className="nav-link" href="#"><IoMdSettings size={30} /> Settings</a>
        </div>
        <div className="navbar-search">
          <form className='search-input-form'>
            <button type="submit" className='search-button'><CiSearch size={25} /></button>
            <input type="text" className='search-input' placeholder="Search here" />
          </form>
          <IoIosNotifications className='notification-bell' size={30} />
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