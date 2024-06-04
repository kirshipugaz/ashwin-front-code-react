import React from 'react';
import '../css/postFeed.css';
import Post from './Post';

function PostFeed() {
  return (
    <main className="post-feed">
      <Post />
      <Post />
    </main>
  );
}

export default PostFeed;
