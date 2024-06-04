import React from "react";
import Header from "../components/homeHeader";
import Sidebar from "../components/sidebar";
import PostFeed from "../components/PostFeed";
import Insights from "../components/Insights";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background">
      <div className="container1">
        <div className="row">
          <div className="col-xl-3 col-lg-12">
            <Sidebar />
          </div>
          
          <div className="col-xl-6 col-lg-12">
            <PostFeed />
          </div>
          <div className="col-xl-3 col-lg-12">
            <Insights />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
