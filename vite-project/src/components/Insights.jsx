import React from 'react';
import "../css/insights.css"
import { RiArrowDropDownLine } from "react-icons/ri";

function Insights() {
  return (
    <aside className="insights">
      <div className="insights-header">
        <h3>Insights</h3>
        <select className="form-select this-what">
          <option>This Week</option>
          <option>This Month</option>
        </select>
        
      </div>
      <div className="insight-cards">
        <div className="card">
          <div className="card-body">
            <h5>Post Views</h5>
            <h1>100</h1>
          </div>
        </div>
        <div className="card card-orange">
          <div className="card-body">
            <h5>Page Views</h5>
            <h1>100</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5>Event Views</h5>
            <h1>100</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5>Search</h5>
            <h1>100</h1>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Insights;
