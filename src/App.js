import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import Signin from './component/Registration/Signin';
import Input from './component/Registration/Input';
import Property from './component/Properties/Property';
import PropertyDetails from './component/Properties/PropertyDetails';
import Dashboard from './component/Dashboard/Dashboard';
import Propertypost from './component/Dashboard/Propertypost';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/property' element={<Property />} />
          <Route path='/propertydetails' element={<PropertyDetails />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path ='/propertypost' element={<Propertypost />} />

        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
