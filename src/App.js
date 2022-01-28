import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
