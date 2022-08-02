import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import Signin from './component/Registration/Signin';
import Property from './component/Properties/Property';
import PropertyDetails from './component/Properties/PropertyDetails';
import Dashboard from './Dashboard/Dashboard';
import Propertypost from './Dashboard/Propertypost';
import Allproperty from './component/Allproperties/Allproperties';
import Editproperty from './component/Edit/Editproperty';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/property' element={<Property/>} />
          <Route path ='/edit/Property/:id' element={<Editproperty/>} />
          <Route path='/allproperties' element={<Allproperty/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path ='/propertypost' element={<Propertypost/>} />

        </Routes>
        
      </Router>

    </div>

  );
}

export default App;
