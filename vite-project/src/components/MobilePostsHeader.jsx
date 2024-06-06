import React from 'react'
import profile from "../assets/boy2.png";

const MobilePostsHeader = () => {
  return (
    <div className='mobile-posts-header'>
      <div className='badge-view-all'>
        <h2>My Badge</h2>
        <div>View all</div>
      </div>
      <div>
        <img src={profile} className='profile-image'/>
      </div>
    </div>
  )
}

export default MobilePostsHeader
