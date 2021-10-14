import React from "react";
import Typed from "react-typed"
import './Header.css';

const Header = () => {

    return (
        <div className="header-container">
            <div class="main-information">
                <h1>Data science enthusiast</h1>
                <Typed
                className="typed-text"
                strings={["Machine Learning","Deep Learning","Web Development","Mobile Development"]}
                typedSpeed={40}
                backSpeed={60}
                loop/>
                <a href="/Footer" className="ContactMe-Button">Contact me</a>
            </div>
        </div>
    )

}
export default Header;