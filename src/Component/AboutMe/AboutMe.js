import React from 'react';
import './AboutMe.css';
import myimg from './myimg.jpg';

const About =() => {

 
    return (

            <div className="containerabout">

                <img className="myimg" src={myimg} alt="MyImg"/>

                    <div className="divabout">
                        <h1 className="h1about">About Me</h1>
                    
                        <span className="spanabout">I am an ICT Engineering student at SUP'COM, with a good academic record, highly motivated and ambitious, interested in Artificial Intelligence and web development.</span>
                        <span className="spanabout">Beside being open to learning new things in both these fields, i often opt to develop my skills as a songwriter. </span>
                      </div>

                  </div>

        
 


    );
  }

 
export default About;