import React from 'react'
import Header from '../components/imgHeader'
import Footer from '../components/Footer'
import "../css/login.css"
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
        <Header />
        <div className="whole-forme">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title">Registration</h2>
          <form className="form-inputs">
            <div className="form-group">
              <label className="input-name">Email/Phone Number</label>
              <input type="text" className="form-control input-box" />
            </div>
            <div className="form-group">
                <label className="input-name">Password</label>
                <input id="pass" className="form-control input-box" type="password" name="phone" />
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
        <Footer />
    </>
  )
}

export default Login
