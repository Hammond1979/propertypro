import React from 'react';
import LandingPage from './pages/Landing-page/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import SignIn from './component/Registration/SignIn';
import Property from './component/Properties/Property';
import PropertyDetails from './component/Properties/PropertyDetails';
import Dashboard from './Dashboard/Dashboard';
import Createproperty from './Dashboard/Createproperty';
import Allproperty from './component/Allproperties/Allproperties';
import Editproperty from './component/Edit/Editproperty';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/property' element={<Property/>} />
          <Route path ='/edit/property/:id' element={<Editproperty/>} />
          <Route path='/properties' element={<Allproperty/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
             <Route path='/dashboard' element={<Dashboard/>} />
             <Route path ='/property-post' element={<Createproperty/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        
      </Router>

    </div>

  );
}

export default App;
