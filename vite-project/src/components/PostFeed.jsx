import React from 'react';
import '../css/postFeed.css';
import Post from './Post';
import { CiSearch } from "react-icons/ci";

function PostFeed() {
  

  return (
    <main className="total-post-feed">
      <div className='row'>
        <div className='col-lg-8'>
          <button className='search-button-post-feed'><CiSearch size={25} /></button>#Physical Wellness # Excercise and Diet
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-3'>
          <select className="form-select posts-sort-by" aria-label="Small select example">
            <option value="latest">Sort by: Latest</option>
            <option value="none">Sort by: none</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <a className='col-2 posts-type-link posts-type-current'>
            All Posts
        </a>
        <a className='col-2 posts-type posts-type-link'>
          Trending Posts
        </a>
        <a className='col-2 posts-type posts-type-link'>
          Event Posts
        </a>
      </div>
      <hr className="border border-dark border-1 opacity-20"></hr>
      <div className='post-feed'>
        <Post />
        <Post />
      </div>
    </main>
  );
}

export default PostFeed;
