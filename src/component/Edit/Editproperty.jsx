import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Selectoption from "../../Dashboard/Selectoption";
import env from "react-dotenv";
import axios from "axios";
import swal from "sweetalert";
import "./Editproperty.css";



const Editproperty = () => {
  let navigate = useNavigate ();
  const { id } = useParams();
  const getToken = JSON.parse(localStorage.getItem("data"));

  let config = {
    headers: {
      access_token: getToken,
    },
  };
  const defaultFormData = {
    title: "",
    address: "",
    purpose: "",
    property_type: "",
    // city: "",
    image_url: "",
    no_of_beds: "",
    no_of_baths: "",
    garages: "",
    land_size: "",
    locality: "",
    neighbourhood: "",
    description: "",
  };
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/property/${id}`,
        { ...formData },
        config
      );
      swal({
        title: "Property Edited successfully",
        icon: "success",
        button: "okay"
      })
      navigate('/property');
      console.log(response);
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
              <h3>Post a property</h3>
            </Link>
            <Link to="/property">
              <h3>All Properties</h3>
            </Link>
            <Link to='/'>
              <h3>Sign Out</h3>
            </Link>
          </div>
        </div>
        <div className="postProperty">
          <h1>Edit property</h1>
          <p>Put your property in front of millions of home-seekers</p>
          <form className="propertyForm" onSubmit={handleSubmit}>
            <label className="propertypostLabel">Title</label>
            <div>
              <input
                type="text"
                className="propertyInput "
                value={formData.title}
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
                value={formData.address}
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
                    value={formData.purpose}
                    onChange={handleChange}
                    data={["select", "Rent", "Sale", "Shortlet"]}
                  />
                </div>
                <Selectoption
                  labelName="Type of property"
                  value={formData.property_type}
                  className="propertyType"
                  name="property_type"
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
              </div>
              <div className="propertypostLabel3">
                <div>
                  <Selectoption
                    labelName="Bedrooms"
                    value={formData.no_of_beds}
                    className="bedroom"
                    name="no_of_beds"
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
                    value={formData.no_of_baths}
                    className="bathroom"
                    name="no_of_baths"
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
                    value={formData.garages}
                    className="garages"
                    name="garages"
                    onChange={handleChange}
                    data={[
                      "--select--",
                      "1",
                      "2",
                      "3",
                      "4"
                      ,
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
                    value={formData.land_size}
                    className="size"
                    name="land_size"
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
                    value={formData.locality}
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
                    value={formData.neighbourhood}
                    name="neighbourhood"
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
                    value={formData.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Describe your property"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="propertyUploader">
                  <p>Click on the "Choose File" button to upload a file:</p>
                  <input type="file" id="myFile" name="filename" />
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
export default Editproperty;
