import React, {useState, useEffect} from 'react'
import Home from './Components/Pages/Home'
import NavBar from './Components/Navbar/Navbar'
// import {useDispatch,useSelector} from 'react-redux'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';
import About from './Components/Pages/About';
import Inquiry from './Components/Pages/Inquiry';
import Policy from './Components/Pages/Policy';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse:""};
//   }

//   callAPI(){
//     fetch("http://localhost:9000/portfolios")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//   }

//   componentWillMount(){
//     this.callAPI();
//   }

//   render(){
//     return (
//       <Router>
//         <div className="App">
//           <NavBar />
//           <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/gallery' element={<Gallery/>} />
//             <Route path='/about' element={<About/>} />
//             <Route path='/inquiry' element={<Inquiry/>} />
//             <Route path='/site-policy' element={<Policy/>} />

//           </Routes>
//           <p>{this.state.apiResponse}</p>
//         </div>
//       </Router>
//      )
//   }
// }


function App() {

  const [portfolio, setPortfolio] = useState("");

  useEffect(() => {
    const url = 'http://localhost:9000/portfolios';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.slip.portfolio);
            setPortfolio(json.slip.portfolio);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);

  console.log({portfolio})

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

        </Routes>
      </div>
    </Router>
  )
}

export default App;