import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Selectoption from "../../Dashboard/Selectoption";
import axios from "axios";

const url = "http://localhost:3006/v1//property/:userId";

const Editproperty = () => {
 console.log(useParams())
 const {id} = useParams()

 console.log(id)
 const getToken = JSON.parse(localStorage.getItem('data'));

 let config = {
   "headers": {
     'Authentication': getToken
   }
 }
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
    console.log(formData)

    try {
      const response = await axios.put(`http://localhost:3006/v1//property/${id}`, { ...formData }, config);
      console.log(response);
    } catch (err) {
        console.log(err)
    }
  };
  console.log(formData);


  return (
    <>
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
      <div className="">
        <label>Locality</label>
        <input
          type="text"
          value={formData.locality}
          name="locality"
          onChange={handleChange}
          placeholder="locality"
          className="inputproperty"
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
          className="inputproperty"
        />
      </div>
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
        <input type="file" id="myFile" 
        name="image_url"
                onChange={handleChange}
                value={formData.image_url}/>
        <input type="submit"  onClick={handleSubmit} />
      </div>
    </>
  );
};
export default Editproperty;
