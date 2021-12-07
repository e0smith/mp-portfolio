// import React, {useState,useEffect} from 'react'
import Home from './Components/Pages/Home'
// import NavBar from './Components/Navbar/Navbar'
// import {useDispatch,useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        {/* <Route path="/"> */}
          <Home />
        {/* </Route> */}
  
      </div>
  
    </Router>
  )
}

export default App;