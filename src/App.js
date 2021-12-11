import React, {useState, useEffect} from 'react'
import Home from './Components/Pages/Home'
import NavBar from './Components/Navbar/Navbar'
// import {useDispatch,useSelector} from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;