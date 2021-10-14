import {React} from 'react';
import Navbar from './Component/NavBar/NavBar';
import Header from './Component/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Particles from "react-particles-js";
import OutlinedTimeline from "./Component/Projects-TimeLine/TimeLine";
import About from './Component/AboutMe/AboutMe';
import OtherProjects from "./Component/OtherProjects/OtherProjects";
import Footer from './Component/Footer/Footer';
function App(){

  return (
  <Router>
    <div>
      <Particles
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:6,
                color:"#000"
              }
            },
          }
        }}/>
      <Navbar/>

      
      <Header/>
      <About/>  
      <div className="acadamic-projects">
       <h4> My academic projects </h4></div>
      <OutlinedTimeline/>
      <div className="other-projects">
       <h4>Other projects </h4></div>

      <OtherProjects/>
      <Footer/>
    </div>
    
  </Router>
);

}


export default App;