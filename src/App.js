import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
            <Route path='/Dashboard' element={<Dashboard/>} />
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
