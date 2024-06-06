import React from 'react';
import '../css/postFeed.css';
import Post from './Post';
import { CiSearch } from "react-icons/ci";
import { Row, Col } from 'react-bootstrap';
import MobilePostsHeader from './MobilePostsHeader';

function PostFeed() {
  

  return (
    <main className="total-post-feed">
      <Row>
        <MobilePostsHeader />
      </Row>
      <Row className='posts-secondary-header'>
        <Col lg={8} xs={12}>
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
      <Row className='posts-types'>
        <Col lg={3} xs={4}>
          <a className='posts-type-link posts-type-current'>
              All Posts
          </a>
        </Col>
        <Col lg={3} xs={4}>
          <a className='col-2 posts-type posts-type-link'>
            Trending Posts
          </a>
        </Col>
        <Col lg={3} xs={4}>
          <a className='col-2 posts-type posts-type-link'>
            Event Posts
          </a>
        </Col>
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
