import React from "react";
import Header from "../components/homeHeader";
import Sidebar from "../components/sidebar";
import PostFeed from "../components/PostFeed";
import Insights from "../components/Insights";
import {Row, Col} from "react-bootstrap"
import MobileFooter from "../components/MobileFooter";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background">
      <div className="container1">
        <Row>
          <Col xl={3} lg={12} xs={0} className="home-file-sidebar">
            <Sidebar />
          </Col>
          
          <Col xl={6} lg={12} xs={12}>
            <PostFeed />
          </Col>
          <Col xl={3} lg={12}>
            <Insights />
          </Col>
        </Row>
      </div>
        <MobileFooter />
      </div>
    </>
  );
};

export default Home;
