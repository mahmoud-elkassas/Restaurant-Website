
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className="about-section-container" id="about">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
      
      <h1 className="primary-heading">
        Food Is An Important Part Of A Balanced Diet
      </h1>
      <p className="primary-text">
      At FOODIE, we believe that food plays a crucial role in a healthy lifestyle. 
      </p>
      <p className="primary-text">
      That's why we're committed to offering you delicious meals crafted with quality ingredients, ensuring your dining experience is not only enjoyable but also nourishing.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Watch Video
        </button>
      </div>
    </div>
  </div>
);
};

export default About