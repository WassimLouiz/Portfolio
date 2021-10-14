import React, {useEffect, useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './NavBar.css';
function NavBar() {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);

const closeMenu = () => setClick(false);
const showButton =() =>{
    if (window.innerWidth<=960){
        setButton(false);
    }else{
        setButton(true);
    }
};

useEffect(() =>{
    showButton()
}, []);
window.addEventListener('resize',showButton);
return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                     <a href="/" className='navbar-logo' onClick={closeMenu}>
                         Louiz Wassim 
                     </a>
                     <div className='menu-icon' onClick={handleClick}>
                         <i class={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                     </div>
                     
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                             <a href="/" className='nav-links' onClick={closeMenu}>
                                 Home
                             </a>
                         </li>

                         <li className='nav-item'>
                             <Link activeClass="active"
                                    to="containerabout"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={1000} className='nav-links' onClick={closeMenu}>
                                 About Me
                             </Link>
                         </li>
                         
                         <li className='nav-item'>
                             <Link activeClass="active"
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={1000} className='nav-links' onClick={closeMenu}>
                                 Projects 
                             </Link>
                         </li>

                         <li className='nav-item'>
                             <Link activeClass="active"
                                    to="Footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500} className='nav-links' onClick={closeMenu}>
                                 Contact Me                             
                            </Link>
                         </li>
                               
                     </ul>

                     


                
                     </div>
            </nav>
        </>
    )
}

export default NavBar