import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import "./Allproperties.css";
import { setCurrentUser } from "../../slice/propertyslice";

export const Propertydata = [
  {
    id: 1,
    title: "bungalow",
    image: "/images/xwork6.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 2,
    title: "bungalow",
    image: "/images/xwork2.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 3,
    title: "bungalow",
    image: "/images/xwork3.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 4,
    title: "bungalow",
    image: "/images/xwork4.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 5,
    title: "bungalow",
    image: "/images/xwork5.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 6,
    title: "duplex",
    image: "/images/xwork9.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 7,
    title: "duplex",
    image: "/images/xwork10.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 8,
    title: "duplex",
    image: "/images/xwork8.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 9,
    title: "bungalow",
    image: "/images/xwork11.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 10,
    title: "duplex",
    image: "/images/xwork12.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 11,
    title: "duplex",
    image: "/images/xwork13.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 12,
    title: "bungalow",
    image: "/images/xwork14.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 13,
    title: "duplex",
    image: "/images/xwork15.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 14,
    title: "duplex",
    image: "/images/xwork9.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 15,
    title: "bungalow",
    image: "/images/xwork7.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "3",
    square: "1,878 sqft",
  },

  {
    id: 16,
    title: "bungalow",
    image: "/images/xwork6.jpg",
    price: "#30,000,000",
    name: "John Dorf",
    updated: "2 weeks ago",
    property: "Hammond Loft Property",
    location: "Victoria Island",
    sale: "sale",
    more: "more info",
    bed: "3bed",
    bath: "2",
    square: "1,878 sqft",
  },
];

const url = "http://localhost:3006/v1/properties";

export const Allproperty = () => {
  const dispatch = useDispatch();
  const [propertydata, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);
  //  dispatch(setCurrentUser({ currentUser: response.Propertydata.user }));

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
              <Link to={`/property/${eachProperty.id}`}>
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
