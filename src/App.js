import React, {useState, useEffect} from 'react'
import Home from './Components/Pages/Home'
import NavBar from './Components/Navbar/Navbar'
// import {useDispatch,useSelector} from 'react-redux'

import { BrowserRouter as Router } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home path="/"/>
        <Gallery path="gallery"/>
      </div>
    </Router>
  )
}

export default App;