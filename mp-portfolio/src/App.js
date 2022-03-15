import React, {useEffect} from 'react'
import Home from './Components/Pages/Home'
import NavBar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';
import About from './Components/Pages/About';
import Inquiry from './Components/Pages/Inquiry';
import Policy from './Components/Pages/Policy';
import { getPhotos } from './actions/photo';
import { getPortfolios} from './actions/portfolio';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PortfolioCard } from './Components/Cards/portfolioCard';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
    dispatch(getPortfolios());
  }, [dispatch]);


  const photoArray = useSelector(state => state.photos.photos);
  let listOfPhotos = photoArray.map(photo => photoCard(photo))

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/inquiry' element={<Inquiry/>} />
          <Route path='/site-policy' element={<Policy/>} />
          <Route path='/photo/:id' component={listOfPhotos} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;