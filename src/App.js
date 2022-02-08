import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import Signin from './component/Registration/Signin';
import Input from './component/Registration/Input';
import Property from './component/Properties/Property';
import PropertyDetails from './component/Properties/PropertyDetails';

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
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
