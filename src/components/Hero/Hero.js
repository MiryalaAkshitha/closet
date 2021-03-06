import "./Hero.css";

import HeroImg from "../../assets/hero-img.webp";
import { Link } from "react-router-dom";
export const Hero = () => {
  
  
  return (
    <div className="hero-container">
      <img className="hero-img" src={HeroImg} />
      <Link className="hero-btn" to="/products">
        <button className="shop-btn">SHOP NOW</button>
      </Link>
    </div>
  );
};
