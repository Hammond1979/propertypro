import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import SignIn from './component/Registration/SignIn';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
