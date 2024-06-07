import React from 'react'
import profile from "../assets/boy2.png";
import "../css/postFeed.css"
import { FaPlus } from "react-icons/fa6";
import img from "../assets/post2.png";
import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { FaComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import {Row, Col} from "react-bootstrap"

const Post = ({post}) => {

  const dummyPost = {
    author : "Ashwin Kumar",
    place : "Ireland",
    body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",

  }
  return (
    <>
        <div className="post">
        <Row className="post-header">
        <Col xs={8} sm={8} className='post-profile-info'>
          <img src={profile} alt="Ashwin Kumar" className="post-profile-pic" />
          <div>
            <h5>{dummyPost.author}</h5>
            <h6>{dummyPost.place}</h6>
          </div>
        </Col>
        <Col xs={4} sm={4} className='follow-text-icon'>
          <button className="btn btn-link follow-button-text">Follow <FaPlus className='follow-plus-icon' size={25} /></button>
        </Col>
        </Row>
        <img src={img} className='post-image' alt=''/>
        <div className="post-body">
          
          <div className="post-actions">
            <div>
                <BsHeartFill className='like-heart' />167  <span className='like'>Likes</span>
            </div>
            <div>
                <a className='post-info-below'><FaComment className='mobile-comment' size={18} /><LuDot className='post-info-dot' size={25}/>4 <span className='comment-text'>Comments</span></a>
                <a className='post-info-below'><BiRepost className='mobile-repost' size={18} /><LuDot className='post-info-dot' size={25}/>5 <span className='repost-text'>Repost</span></a>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Post
