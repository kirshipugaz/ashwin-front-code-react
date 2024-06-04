import React, { useState } from "react";
import "./../css/SignUp.css";
import Footer from "../../components/Footer";
import Header from "../../components/imgHeader";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName : "",
    mobileNumber : "",
    busName : "",
    busEmail : "",
    serviceName : ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <Header />
      <div className="whole-form">
        <div className="card login-form">
          <div className="card-body">
            <h2 className="card-title">Registration</h2>
            <form className="form-inputs" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="input-name">Full Name</label>
                <input type="text" className="form-control input-box" name="fullName" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="input-name">Mobile Number</label>
                <input
                  id="phone"
                  className="form-control input-box"
                  type="tel" onChange={handleChange} name="mobileNumber"
                />
              </div>
              <div className="form-group">
                <label className="input-name">Business Name</label>
                <input id="busName" className="form-control input-box" onChange={handleChange} name="busName" />
              </div>
              <div className="form-group">
                <label className="input-name">Business Email</label>
                <input id="busEmail" type="email" className="form-control input-box" onChange={handleChange} name="busEmail" />
              </div>
              <div className="form-group">
                <label className="input-name">Service</label>
                <select className="form-select input-box" name="serviceName" onChange={handleChange}>
                  <option value="abcd">ABCD</option>
                  <option value="efgh">EFGH</option>
                  <option value="ijkl">IJKL</option>
                  <option value="mnop">MNOP</option>
                </select>
              </div>

              <button type="submit" className="btn btn-block-req request">
                <span className="request-text">Send Request</span>
              </button>
              <div className="mt-2">
                <span className="fw-bold">Already have an account? </span>
                <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
