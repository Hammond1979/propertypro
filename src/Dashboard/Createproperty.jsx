import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import Selectoption from "./Selectoption";
import "./Createproperty.css";


const Createproperty = () => {

  const defaultData = {
    title: "",
    address: "",
    purpose: "",
    propertyType: "",
    city: "",
    image: "",
    noOfBed: "",
    noOfBath: "",
    garages: "",
    landSize: "",
    locality: "",
    Neighbourhood: "",
    description: "",
  };

const [file, setFile] = useState();
  // const [propertyDetails, setPropertyDetails] = useState(defaultData);

  let navigate = useNavigate ();
  const getToken = JSON.parse(localStorage.getItem('data'));

  let config = {
    "headers": {
      'access_token': getToken
    }
  }
  const dispatch = useDispatch();
  
  const [data, setData] = useState(defaultData);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("upload", file)
      formData.append("propertyData", {...data})
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/agent/properties`, formData, config);
      swal({
        title: "Property created",
        icon: "success",
        button: "okay"
      })
      navigate('/property');
             
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="propertypostWrapper">
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
            <Link to="/dashboard">
              {" "}
              <h3>Dashboard</h3>
            </Link>
            <Link to="">
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
        <div className="postProperty">
          <h1>Post a property</h1>
          <p>Put your property in front of millions of home-seekers</p>
          <form className="propertyForm" onSubmit={handleSubmit}>
            <label className="propertypostLabel">Title</label>
            <div>
              <input
                type="text"
                className="propertyInput "
                value={data.title}
                name="title"
                onChange={handleChange}
                placeholder="e.g Newly Built 4 Bedroom Duplex in a Serene Neighbourhood "
                required
              />
            </div>
            <label className="propertypostLabel">Address</label>
            <div>
              <input
                type="text"
                className="propertyInput "
                value={data.address}
                name="address"
                onChange={handleChange}
                placeholder="address "
                required
              />
            </div>
            <div className="propertyBody">
              <div className="propertySubbody">
                <div>
                  <label className="propertypostLabel2">Purpose</label>
                  <Selectoption
                    name="purpose"
                    className="propertyText"
                    value={data.purpose}
                    onChange={handleChange}
                    data={["select", "Rent", "Sale", "Shortlet"]}
                  />
                </div>
                <Selectoption
                  labelName="Type of property"
                  value={data.propertyType}
                  className="propertyType"
                  name="propertyType"
                  onChange={handleChange}
                  data={[
                    "--select--",
                    "Co-working space",
                    "Commercial Property",
                    "House",
                    "Land",
                    "Shortlet",
                  ]}
                />
                <Selectoption
                  labelName="Sub type of property"
                  value={data.landSize}
                  name="landSize"
                  className="land"
                  onChange={handleChange}
                  data={[
                    "--select--",
                    "Co-working space",
                    "Commercial Property",
                    "House",
                    "Land",
                    "shortlet",
                  ]}
                />
              </div>
              <div className="propertypostLabel3">
                <div>
                  <Selectoption
                    labelName="Bedrooms"
                    value={data.noOfBed}
                    className="bedroom"
                    name="noOfBed"
                    onChange={handleChange}
                    data={[
                      "--select--",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10+",
                    ]}
                  />
                </div>

                <div>
                  <Selectoption
                    labelName="Bathrooms"
                    value={data.noOfBath}
                    className="bathroom"
                    name="noOfBath"
                    onChange={handleChange}
                    data={[
                      "--select--",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10+",
                    ]}
                  />
                </div>

                <div>
                  <Selectoption
                    labelName="Garages"
                    value={data.garages}
                    className="garages"
                    name="garages"
                    onChange={handleChange}
                    data={[
                      "--select--",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10+",
                    ]}
                  />
                </div>

                <div>
                  <Selectoption
                    labelName="Size"
                    value={data.landSize}
                    className="size"
                    name="landSize"
                    onChange={handleChange}
                    data={[
                      "--select--",
                      "1 sqm",
                      "2 sqm",
                      "3 sqm",
                      "4 sqm",
                      "5 sqm",
                      "6 sqm",
                      "7 sqm",
                      "8 sqm",
                      "9 sqm",
                      "10+ sqm",
                    ]}
                  />
                </div>
              </div>

              <div className="propertyCheckboxes">
                <label className="check-container">Furnished</label>
                <input type="checkbox" className="check" />
                <label className="check-container">Serviced</label>
                <input type="checkbox" className="check" />
                <label className="check-container">Newly Built</label>
                <input type="checkbox" className="check" />
              </div>
              <div className="propertypostLabel3">

                <div>
                  <label>Locality</label>
                  <input
                    type="text"
                    value={data.locality}
                    name="locality"
                    onChange={handleChange}
                    placeholder="locality"
                    className="input-property"
                  />
                </div>
                <div>
                  <label>Street / Estate / Neighbourhood</label>
                  <input
                    type="text"
                    value={data.Neighbourhood}
                    name="Neighbourhood"
                    onChange={handleChange}
                    placeholder="Street / Estate / Neighbourhood"
                    className="input-property"
                  />
                </div>
              </div>
              <div>
                <label className="propertypostLabel2">Description</label>

                <div>
                  <textarea
                    id="desc"
                    className="propertyTextarea"
                    value={data.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Describe your property"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="propertyUploader">
                  <p>Click on the "Choose File" button to upload a file:</p>
                  <input type="file" id="myFile" name="filename"
                  onChange={saveFile}
                   />
                  <input type="submit" />
                </div>
                <div   className="propertyButton">
                  {" "}
                  <button type="submit" onClick={handleSubmit}>Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createproperty;
