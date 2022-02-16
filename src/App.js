import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Propertypost from './component/Dashboard/Propertypost';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path ='/propertypost' element={<Propertypost />} />
           
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
