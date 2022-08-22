import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  let navigate = useNavigate ();
  const getToken = JSON.parse(localStorage.getItem("data"));
  const decodeToken = jwt_decode(getToken);
  const { firstName, email } = decodeToken.user;
  
  return (
    <>
      <div className="dashboardWrapper">
        <div className="dashboardHeading">
          <div className="dashboardSubheading">
            <span className="dashboardIcon">
              <i class="fa fa-home"></i>
            </span>
            <span>
              Oakberry{" "}
              <small className="dashboardLogo">real estate agency</small>
            </span>
          </div>
          <div className="dashboardTablecontent">
            <h3>Dashboard</h3>
            <Link to="/property-post">
              <h3>Post A Property</h3>
            </Link>
            <Link to="/property">
              <h3>All Properties</h3>
            </Link>
            <Link to="/">
              <h3>Sign Out</h3>
            </Link>
          </div>
        </div>
        <div className="dashboardContent">
          <div className="dashboardSubcontent">
            <button>My Profile</button>
            <button>My Team</button>
            <button>Edit Profile</button>
          </div>
          <div className="dashboardBody">
            <h3>Personal Details</h3>
            <div>
              <p className="dashboardBodyparagraph">
                <img
                  src="/images/contact.png"
                  alt="contact"
                  className="dashboardBodyicon"
                />{" "}
                {firstName}
              </p>
              <p>
                <img
                  src="/images/envelop.png"
                  alt="envelop"
                  className="dashboardBodyenvelop"
                />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
