import "./Hero.css";
import HeroImg from "../../assets/hero-img.webp";
export const Hero = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src={HeroImg}
      />
      <button className="hero-btn">New collection</button>
    </div>
  );
};
