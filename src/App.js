import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage/LandingPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import React, {Fragment} from 'react';

const  App = () => {
  return (
    <div className="App">
      <Router>
        <Fragment>
      <Routes>
          <Route path='/' element= {<LandingPage />}></Route>
          <Route path='/aboutus' element= {<AboutUs />}></Route>
        </Routes>
        </Fragment>
        </Router>
    </div>
  );
}

export default App;
