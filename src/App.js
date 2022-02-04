import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import Signin from './component/Registration/Signin';
import Input from './component/Registration/Input';
import Property from './component/Properties/Property';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in ' element={<Signin />} />
          <Route path='/property' element={<Property />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
