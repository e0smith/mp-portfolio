import Navbar from "../Navbar/Navbar";
import "../Styling/Home.css"
// import Temp from "../Photos/Temp-home-photo.jpeg";
function Home(){
    return(
        <div className="Home">
            <mark>Megan Proctor</mark>
            <Navbar />
            {/* <img src={Temp} alt="home" className="Cover"/> */}
        </div>
    )
}

export default Home;