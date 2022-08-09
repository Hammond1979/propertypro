import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Registration/Signup';
import Signin from './component/Registration/Signin';
import Property from './component/Properties/Property';
import PropertyDetails from './component/Properties/PropertyDetails';
import Dashboard from './Dashboard/Dashboard';
import Createproperty from './Dashboard/Createproperty';
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
          <Route path ='/edit/property/:id' element={<Editproperty/>} />
          <Route path='/allproperties' element={<Allproperty/>} />
          <Route path='/property/:id' element={<PropertyDetails/>} />
<<<<<<< HEAD
             <Route path='/dashboard' element={<Dashboard/>} />
             <Route path ='/propertypost' element={<Createproperty/>} />
=======
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path ='/propertypost' element={<Propertypost/>} />

>>>>>>> 5b7c0062d8b5ffbe826891f8893a6bab2d9bf686
        </Routes>
        
      </Router>

    </div>

  );
}

export default App;
