import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Propertydata } from './Property';
import './PropertyDetails.css'





const PropertyDetails = () => {
    const [property, setProperty] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const realProperty = Propertydata.find((property) => property.id === parseInt(id))
        console.log(realProperty.description);
        setProperty(realProperty)
    }, 
    )

    return <>
        <NavBar />
        <div className='propertyDetail'>
            <img src={property.image} alt='property' className='propertyview' />
            <div className='propertyHead'>
                <span className='propertyheader'>Oakberry</span>
                <span className='propertySubhead'>REAL ESTATE AGENCY</span>
            </div>
            <div className='propertyRow'>
                <span className='propertyItem1'>Features</span>
                <span className='propertyItem2'>Description</span>
                <span className='propertyItem3'>Review</span>
            </div>

            <div className='propertyList'>
                <ul>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Lot Area: 1,250 SQ FT</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Bed Rooms: 4</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Bath Rooms: 4</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Luggage</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Garage: 2</li>
                </ul>

                <ul>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Floor Area: 1,300 SQ FT</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Year Build:2019</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Water</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Stories: 2</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Roofing: New</li>
                </ul>

                <ul>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Floor Area: 1,300 SQ FT</li>
                    <li className='propertyListtable'><span className='fa fa-check'>
                    </span>Year Build: 2019</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Water</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Stories: 2</li>
                    <li className='propertyListtable'><span className='fa fa-check'></span>Roofing: New</li>
                </ul>
            </div>
            <div className="property-desc">
                <div>
                    {property.description}
                </div>
            </div>

        </div>
        <Footer />
    </>;
};

export default PropertyDetails;
