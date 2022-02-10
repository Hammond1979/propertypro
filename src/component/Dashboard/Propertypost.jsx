import React from 'react';
import { Link } from 'react-router-dom';
import './Propertypost.css';

const Propertypost = () => {
    return <>
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
            <div className='postProperty'>
                <h1>Post a property</h1>
                <p>Put your property in front of millions of home-seekers</p>
                <form action="propertyForm">
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

                            <div>
                                <label className='propertypostLabel2'>Type of property</label>
                                <select name="mode" className="propertyText" required='required'>
                                    <option value>--select--</option>
                                    <option value="32">Co-working space</option>
                                    <option value="30">Commercial Property</option>
                                    <option value="13">House</option>
                                    <option value="24">Land</option>
                                    <option value="shortlet">Shortlet</option>
                                </select>
                            </div>

                            <div>
                                <label className='propertypostLabel2'>Sub type of property</label>
                                <select name="mode" className="propertyText" required='required'>
                                    <option value>--select--</option>
                                    <option value="32">Co-working space</option>
                                    <option value="30">Commercial Property</option>
                                    <option value="13">House</option>
                                    <option value="24">Land</option>
                                    <option value="shortlet">Shortlet</option>
                                </select>
                            </div>
                        </div>
                        <div className='propertypostLabel3'><div>
                            <label className='propertypostLabel2'>Bedrooms</label>
                            <select name="mode" className="propertyText1" required='required'>
                                <option value>--select--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10+</option>
                            </select>
                        </div>

                            <div>
                                <label className='propertypostLabel2'>Bathrooms</label>
                                <select name="mode" className="propertyText1" required='required'>
                                    <option value>--select--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10+</option>
                                </select>
                            </div>

                            <div>
                                <label className='propertypostLabel2'>Toilets</label>
                                <select name="mode" className="propertyText1" required='required'>
                                    <option value>--select--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10+</option>
                                </select>
                            </div>

                            <div>
                                <label className='propertypostLabel2'>Size</label>
                                <input type="text" className='propertyText1' placeholder='e.g. 1 sqm' />
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
                        <div className='propertypostLabel3'><div>
                            <label className='propertypostLabel2'>State</label>
                            <select name="mode" className="propertyText2" required='required'>
                                <option value>Choose State</option>
                                <option value="1">Lagos</option>
                                <option value="2">Abuja</option>
                                <option value="3">Porthacourt</option>
                                <option value="4">Cross River</option>
                                <option value="5">Kaduna</option>
                            </select>
                        </div>
                            <div>
                                <label className='propertypostLabel2'>Locality</label>
                                <select name="mode" className="propertyText2" required='required'>
                                    <option value>Choose Locality</option>
                                </select>
                            </div>
                            <div>
                                <label className='propertypostLabel2'>Street / Estate / Neighbourhood</label>
                                <select name="mode" className="propertyText2" required='required'>
                                    <option value>--select--</option>
                                    <option value="32">Co-working space</option>
                                    <option value="30">Commercial Property</option>
                                    <option value="13">House</option>
                                    <option value="24">Land</option>
                                </select>
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


    </>;
};

export default Propertypost;
