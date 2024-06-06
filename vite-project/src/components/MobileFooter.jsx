import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { MdPostAdd } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";
import { MdOutlineDiversity2 } from "react-icons/md";
import profile from "../assets/boy2.png";

const MobileFooter = () => {
  return (
    <Row className='mobile-navigator'>
      <Col xs={2} className='mobile-navi-icon mobile-navi-icon-current'>
        <MdHomeFilled size={25}/>
      </Col>
      <Col xs={2} className='mobile-navi-icon mobile-navi-icon-second'>
        <PiDotsThreeCircleVerticalFill size={25}/>
      </Col>
      <Col xs={4} className='mobile-navi-icon'>
        <MdPostAdd size={25} className='mobile-navi-icon-middle'/>
      </Col>
      <Col xs={2} className='mobile-navi-icon mobile-navi-icon-fourth'>
        <MdOutlineDiversity2 size={25}/>
      </Col>
      <Col xs={2} className='mobile-navi-icon'>
        <img src={profile} className='mobile-profile-image' />
      </Col>
    </Row>
  )
}

export default MobileFooter
