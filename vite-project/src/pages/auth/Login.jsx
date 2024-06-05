import React, { useState } from 'react'
import Header from '../../components/imgHeader'
import Footer from '../../components/Footer'
import "../../css/login.css"
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'


const Login = () => {
  const [formData, setFormData] = useState({
    username : "",
    password : ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <Row className='form-and-image'>
        <Col xl={6} sm={0}>
          <Header />
        </Col>
        <Col xl={6} sm={12}>
        <div className="whole-forme">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="input-name">Email/Phone Number</label>
              <input type="text" className="form-control input-box" name='username' onChange={handleChange} />
            </div>
            <div className="form-group">
                <label className="input-name">Password</label>
                <input id="pass" className="form-control input-box" name='password' type="password" onChange={handleChange} />
            </div>
            <div className='mt-2'>
                <a className='link-underline-dark forgot'>Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-block-req request">
              <span className="request-text">Login</span>
            </button>
            <div className="mt-2">
              <span className="fw-bold">New here?    </span>
              <Link to="/signUp">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
        <div className='business-acc'>
            <a className='business-a'>Register a business account</a>
        </div>
      </div>
      </Col>
      </Row>
      <div className='login-page-footer'>
        <Footer />
        </div>
    </>
  )
}

export default Login
