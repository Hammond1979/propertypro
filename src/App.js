import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Propertypost from './component/Dashboard/Propertypost';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/propertypost' element={<Propertypost/>} />
           {/* <Route path='/LandingPage' element={<LandingPage/>} /> */}
          {/* <Route path='/Signup' element={<SignUp/>} />
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Property' element={<Property />} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
