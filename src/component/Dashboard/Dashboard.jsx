import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  return <>
        <div className='dashboard-container'>
                <div className='dashboard-child'>
                    <div className='nav_log'>
                        <span className='navicon'><i class="fa fa-home"></i></span>
                        <span>Oakberry <small>real estate agency</small></span>
                    </div>
                    <div className='dashboard_child1'>
                        <a href=""> <h3>Dashboard</h3></a>
                        <a href="/Propertypost"><h3>Post A Property</h3></a>
                        <a href=""><h3>All Properties</h3></a>
                        <a href=""><h3>Sign Out</h3></a>
                    </div>
                </div>
                <div className='dashboard-head'>
                    <div className='dashboard-head1'>
                        <button>My Profile</button>
                        <button>My Team</button>
                        <button>Edit Profile</button>
                    </div>
                    <div className='dash-body-list'>
                        <h3>Personal Details</h3>
                        <div className=''>
                            <p className='dash-paragraph'><img src="/images/contact.png" alt="" className='dash-icon' /> Frank Irems</p>
                            <img src="/images/map.png" alt="" className='dash-map' />
                            <div>
                                <img src="/images/phone.png" alt="" className='dash-phone' /><span>08138929686</span>
                            </div>
                            <div>
                            <img src="/images/envelop.png" alt="" className='dash-envelop' />
                            <span>frankirems@gmail.com</span>
                            </div>
                            
                        </div>
                       
                    </div>
                    
                </div>
                
            </div>
      </>;
};

export default Dashboard;
