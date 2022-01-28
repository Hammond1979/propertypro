import React from 'react'
import AboutUs from '../../component/About-us/AboutUs'
import About from '../../component/About/About'
import Clienttext from '../../component/Client/Clienttext'
import Footer from '../../component/Footer/Footer'
import Landed from '../../component/Landed/Landed'
import NavBar from '../../component/NavBar/NavBar'
import Services from '../../component/Services/Services'
import Workflow from '../../component/WorkFlow/Workflow'
import Workflowtext from '../../component/WorkFlow/Workflowtext'
import './Landing.css'


const LandingPage = () => {
    return (
        <>
            <NavBar />
            <div className="hero-section-wrapper">
                <AboutUs />
            </div>
            <Landed />  
            <div className='workflow-background'>
                 <Workflow header='Work flow' subHeader='How it works'/>
                <Workflowtext tagNumber='01' workFlowTitle='' /> 
            </div>
            <div className='client-wrapper'>
                <Workflow header='Testimonial' subHeader='Happy Clients'/>

                <Clienttext />
            </div>
             <div className='service-wrapper'>
            <Services />
            </div>
             <About/>
            <Footer />  
            

        </>
    )
}

export default LandingPage;
