import React from 'react';
import '../css/postFeed.css';
import Post from './Post';
import { CiSearch } from "react-icons/ci";
import { Row, Col } from 'react-bootstrap';

function PostFeed() {
  

  return (
    <main className="total-post-feed">
      <Row>
        <Col lg={8}>
          <button className='search-button-post-feed'><CiSearch size={25} /></button>#Physical Wellness # Excercise and Diet
        </Col>
        <Col lg={1}></Col>
        <Col lg={3}>
          <select className="form-select posts-sort-by" aria-label="Small select example">
            <option value="latest">Sort by: Latest</option>
            <option value="none">Sort by: none</option>
          </select>
        </Col>
      </Row>
      <Row>
        <a className='col-2 posts-type-link posts-type-current'>
            All Posts
        </a>
        <a className='col-2 posts-type posts-type-link'>
          Trending Posts
        </a>
        <a className='col-2 posts-type posts-type-link'>
          Event Posts
        </a>
      </Row>
      <hr className="border border-dark border-1 opacity-20"></hr>
      <div className='post-feed'>
        <Post />
        <Post />
      </div>
    </main>
  );
}

export default PostFeed;
