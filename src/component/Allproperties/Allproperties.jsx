import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import env from "react-dotenv";
import axios from "axios";
import "./Allproperties.css";



export const Allproperty = () => {
  const [propertydata, setProperties] = useState([]);


  const getProperties = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/properties`);
      console.log(response.data);
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);
  

  return (
    <>
      <NavBar />
      <div className="propertyWrapper">
        {propertydata.map((eachProperty) => (
          <div className="propertyCard" key={eachProperty.id}>
            <Link to="#" className="propertycardDetails">
              <img
                src="/images/house4.png"
                alt="property"
                className="img-property"
              />
              {/* <p className="propertyPrice">#30,000,000</p> */}
            </Link>
            <div className="propertyListteam">
              {/* <img
                src="images/male.jpg"
                className="propertyImage"
                alt="property"
              /> */}
              <h3 className="propertyListNname">{eachProperty.name}</h3>
              <span className="text-right">{eachProperty.text}</span>
            </div>
            <h3 className="propertyName">{eachProperty.property}</h3>
            <span class="propertyLocation">
              {" "}
              {eachProperty.address}
              <span className="propertySale">{eachProperty.sale}</span>
              <Link to={`/allproperties/${eachProperty.id}`}>
                <span className="propertySale">more info</span>
              </Link>
            </span>
            <ul className="propertyIcon">
              <li>
                <span>
                  <img src="images/double-bed.png" alt="double-bed" />
                </span>
                {eachProperty.no_of_beds}
              </li>
              <li>
                <span>
                  <img src="images/bathtub.png" alt="bathtub" />
                </span>
                {eachProperty.no_of_baths}
              </li>
              <li>
                <span>
                  <img src="images/blueprint.png" alt="blueprint" />
                </span>
                {eachProperty.land_size}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Allproperty;
