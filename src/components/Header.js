import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function Header() {
const [weather, setweather] = useState({})
useEffect(()=>{
  
    axios.get('https://api.weatherapi.com/v1/current.json?key=1a3eb782393644a7a9c182346220307&q=rawalpindi&aqi=no')
  .then((res)=>setweather(res.data))
  .catch((err)=>console.log(err))
 
},[])
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/API">
                  API
                </Link>
              </li>
              <li className="nav-item" style={{margin:"50px"}}>
                  
                  <p>{weather.location.name}
                    <img src={weather.current.condition.icon} alt=""/>
                    {weather.current.temp_c}<sup>0</sup>
                  </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
