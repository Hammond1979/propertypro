import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import env from "react-dotenv";
import axios from "axios";
import "./Property.css";
import { setCurrentUser } from "../../slice/propertyslice";


export const Propertydata = []

export const Property = () => {

  const navigate = useNavigate();

const [agentProperty, setAgentProperty] = useState([])

const getToken = JSON.parse(localStorage.getItem('data'));

let config = {
  "headers": {
    'access_token': getToken
  }
}

  // const dispatch = useDispatch();
  const [Property, setProperty] = useState([]);

  const getProperty = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/agent/property`, config);
      // console.log(response.data);
      setAgentProperty(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  
  const deleteProperty = async(userId) => {
    const removeProperty = agentProperty.filter((property) => property.id !== userId)
    setAgentProperty(removeProperty)
    console.log(userId)
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/agent/property/${userId}`, config)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar />
      <div className="propertyWrapper">
        {agentProperty.map((eachProperty) => (
          <div className="propertyCard" key={eachProperty.id}>
            <Link to="#" className="propertycardDetails">
              <img
                src={eachProperty.image_url}
                alt="property"
                className="img-property"
              />
              {/* <p className="propertyPrice">#30,000,000</p> */}
            </Link>
            <div className="propertyListteam">
            {/* <span className="profile">
                      <input type="file"               
                      name='image'
                onChange={''}/>
                    </span> */}
              <h3 className="propertyListName">{eachProperty.name}</h3>
              <span className="text-right">{eachProperty.text}</span>
            </div>
            <h3 className="propertyName">{eachProperty.property}</h3>
            <span class="propertyLocation">
              {/* {" "}
              {eachProperty.address} */}
              <span className="propertySale">{eachProperty.sale}</span>
              <Link to={`/property/${eachProperty.id}`}>
                <span className="propertySale">more info</span>
              </Link>
            </span>
            <li>
                <span>
                  <button onClick={()=> navigate(`/edit/Property/${eachProperty.id}`)}>Edit</button>
                </span>
              </li>
              <li>
                <span>
                  <button onClick={()=> deleteProperty(eachProperty.id)}>Delete</button>
                </span>
              </li>
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

export default Property;
