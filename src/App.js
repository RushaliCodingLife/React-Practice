import './App.css';
import React from 'react';
import Home from './Component/Home/Home';
import Investor from './Component/Investor/Investor';
import Restaurant from './Component/Restaurant/Restaurant';
import Login from './Component/Login/Login';
import Signup from './Component/SignUp/Signup';
import Slider from './Component/Slider/Slider';
import { BrowserRouter as Router, Routes,
  Route,Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Slider />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/investor" element={<Investor />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/restro" element={<Restaurant />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
