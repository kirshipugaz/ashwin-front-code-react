import React from 'react';
import '../css/sidebar.css';
import profile from "../assets/boy2.png";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className='whats-going'>
          <img src={profile} alt="Yameena" className="profile-pic" />
          What's going on, Yameena?
        </div>
        <div className="action-buttons">
          <div className='small-buttons'>
            <button className="btn btn-secondary btn-half"><MdAddPhotoAlternate size={30}/><br />Photos</button>
            <button className="btn btn-secondary btn-half"><RiVideoAddFill size={30} /><br />Videos</button>
          </div>
          <button className="btn btn-primary btn-full"><TbCalendarPlus size={30} /><br />Event</button>
        </div>
      </div>
      <hr className="border border-dark border-1 opacity-20"></hr>
      <div className="tags-section">
        <h5>Profile Tags</h5>
        <div className="tags">
          <span className="badge text-bg-primary">Physical Wellness Center</span>
          <span className="badge text-bg-success">Gym</span>
          <span className="badge text-bg-info">Fitness Centre</span>
          <span className="badge text-bg-primary">Workouts</span>
          <span className="badge text-bg-secondary">Fitness Programs</span>
          <span className="badge text-bg-warning">Daily Posts</span>
        </div>
        <button className="btn btn-add"><IoMdAddCircle size={25}/>Add more</button>
      </div>
    </aside>
  );
}

export default Sidebar;
