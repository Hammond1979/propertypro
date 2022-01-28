import React from 'react';
import LandingPage from "./pages/Landing-page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
