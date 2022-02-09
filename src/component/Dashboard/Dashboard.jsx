import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
  return <>
        <div className='dashboardWrapper'>
                <div className='dashboardHeading'>
                    <div className='dashboardLogo'>
                        <span className='dashboardIcon'><i class="fa fa-home"></i></span>
                        <span>Oakberry <small className='dashboardSmalllogo'>real estate agency</small></span>
                    </div>
                    <div className='dashboardTablecontent'>
                        <Link to=""> <h3>Dashboard</h3></Link>
                        <Link to="/propertypost"><h3>Post A Property</h3></Link>
                        <Link to=""><h3>All Properties</h3></Link>
                        <Link to=""><h3>Sign Out</h3></Link>
                    </div>
                </div>
                <div className='dashboardContent'>
                    <div className='dashboardSubcontent'>
                        <button>My Profile</button>
                        <button>My Team</button>
                        <button>Edit Profile</button>
                    </div>
                    <div className='dashboardBody'>
                        <h3>Personal Details</h3>
                        <div className=''>
                            <p className='dashboardBodyparagraph'><img src="/images/contact.png" alt="" className='dashboardBodyicon' /> Frank Irems</p>
                            <img src="/images/map.png" alt="" className='dashboardBodymap' />
                            <div>
                                <img src="/images/phone.png" alt="" className='dashboardBodyphone' /><span>08138929686</span>
                            </div>
                            <div>
                            <img src="/images/envelop.png" alt="" className='dashboardBodyenvelop' />
                            <span>frankirems@gmail.com</span>
                            </div>
                            
                        </div>
                       
                    </div>
                    
                </div>
                
            </div>
      </>;
};

export default Dashboard;
