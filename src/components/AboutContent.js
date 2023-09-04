import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import React1 from '../assets/image9.jpg';
import React2 from '../assets/jamespic.png';
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>WHO AM I</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit repellat minus optio sint eaque sapiente soluta molestias amet facere et ullam vero perferendis enim at quis facilis, libero deserunt?
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                   <img src={ React1 } className="imgabout" alt="react-logo" />
                </div>
                <div className="img-stack top">
                   <img src={ React2 } className="imgabout" alt="react-logo" />
                </div>


            </div>
        </div>
    </div>
  )
}

export default AboutContent