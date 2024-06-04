import React from 'react'
import profile from "../assets/boy2.png";
import "../css/postFeed.css"
import { FaPlus } from "react-icons/fa6";
import img from "../assets/post2.png";
import { FaRegHeart } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Post = ({post}) => {

  const dummyPost = {
    author : "Ashwin Kumar",
    place : "Ireland",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",

  }
  return (
    <>
        <div className="post">
        <div className="post-header">
        <div className='post-profile-info'>
          <img src={profile} alt="Ashwin Kumar" className="post-profile-pic" />
          <div>
            <h5>{dummyPost.author}</h5>
            <h6>{dummyPost.place}</h6>
          </div>
        </div>
          <button className="btn btn-link">Follow <FaPlus size={25} /></button>
        </div>
        <img src={img} className='post-image' alt=''/>
        <div className="post-body">
          
          <div className="post-actions">
            <div>
                <FaRegHeart className='like-heart' />167  <span className='like'>Likes</span>
            </div>
            <div>
                <a className='post-info-below'><LuDot className='post-info-dot' size={25}/>4 Comments</a>
                <a className='post-info-below'><LuDot className='post-info-dot' size={25}/>5 Repost</a>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Post
