import React from 'react';
import { Link } from 'react-router-dom';
import './Propertypost.css';
import Selectoption from './Selectoption';

const Propertypost = () => {
    return (
        <>
            <div className='propertypostWrapper'>
                <div className='dashboardHeading'>
                    <div className='dashboardSubheading'>
                        <span className='dashboardIcon'><i class="fa fa-home"></i></span>
                        <span>Oakberry <small className='dashboardLogo'>real estate agency</small></span>
                    </div>
                    <div className='dashboardTablecontent'>
                        <Link to="/dashboard"> <h3>Dashboard</h3></Link>
                        <Link to=""><h3>Post A Property</h3></Link>
                        <Link to=""><h3>All Properties</h3></Link>
                        <Link to=""><h3>Sign Out</h3></Link>
                    </div>
                </div>
                <div className='postProperty' >
                    <h1>Post a property</h1>
                    <p>Put your property in front of millions of home-seekers</p>
                    <form className="propertyForm">
                        <label className='propertypostLabel'>Title</label>
                        <div>
                            <input type="text" className='propertyInput ' placeholder='e.g Newly Built 4 Bedroom Duplex in a Serene Neighbourhood ' />
                        </div>
                        <div className='propertyBody'>
                            <div className="propertySubbody">
                                <div>
                                    <label className='propertypostLabel2'>Purpose</label>
                                    <select name="mode" className="propertyText"><option value>--select--</option>
                                        <option value="rent">For Rent</option>
                                        <option value="sale">For Sale</option>
                                        <option value="shortlet">Shortlet</option>
                                    </select>
                                </div>
                                <Selectoption labelName="Type of property" data={["--select--", "Co-working space", "Commercial Property", "House", "Land", "Shortlet"]} />
                                <Selectoption labelName="Sub type of property" data={["--select--", "Co-working space", "Commercial Property", "House", "Land", "shortlet"]} />
                            </div>
                            <div className='propertypostLabel3'>
                                <div>
                                    <Selectoption labelName="Bedrooms" data={["--select--", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]} />
                                </div>

                                <div>
                                    <Selectoption labelName="Bathrooms" data={["--select--", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]} />
                                </div>

                                <div>
                                    <Selectoption labelName="Bedrooms" data={["--select--", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]} />
                                </div>

                                <div>
                                    <Selectoption labelName="Size" data={["e.g. 1 sqm"]} />
                                </div>
                            </div>

                            <div className='propertyCheckboxes'>
                                <label className="check-container">Furnished</label>
                                <input type="checkbox" className='check' />
                                <label className="check-container">Serviced</label>
                                <input type="checkbox" className='check' />
                                <label className="check-container">Newly Built</label>
                                <input type="checkbox" className='check' />
                            </div>
                            <div className='propertypostLabel3'>
                                <div>
                                    <Selectoption labelName="State" data={["Choose State", "Lagos", "Abuja", "Porthacourt", "Cross River", "Kaduna"]} />
                                </div>
                                <div className=''>
                                    <label>Locality</label>
                                    <input type="text" placeholder='locality' className='inputproperty'/>
                                </div>
                                <div>
                                   <label>Street / Estate / Neighbourhood</label>
                                   <input type="text" placeholder='Street / Estate / Neighbourhood' className='inputproperty'/>
                                </div>
                            </div>
                            <div>
                                <label className='propertypostLabel2'>Description</label>

                                <div>
                                    <textarea id="desc" className='propertyTextarea' placeholder='Describe your property' cols="30" rows="10"></textarea>
                                </div>
                                <div className='propertyUploader'>
                                    <p>Click on the "Choose File" button to upload a file:</p>
                                    <form action="action_page.php">
                                        <input type="file" id="myFile" name="filename" />
                                        <input type="submit" />
                                    </form>
                                </div>
                                <div className='propertyButton'>
                                    <button type='submit'>Save</button>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
};

export default Propertypost;








