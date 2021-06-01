import "./Threed.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./images/astronaut.png";
import celebrating from "./images/celebrating.png";
import assests from "./images/assests.png";
import education from "./images/education.png";
import taken from "./images/taken.png";
import { RiArrowRightSLine,RiArrowLeftSLine } from "react-icons/ri";
import {Card} from 'react-bootstrap';

const images = [astronaut, celebrating, education, taken];

function Threed() {
  const NextArrow = ({ onClick }) => {
    return (
      <div style={{boxShadow: "0 6px 10px 0 rgb(229, 226, 226)",width:"29px",height:"28px",
      padding: "3px",color:"blue",
        fontSize: "16px"}} className="arrow next" onClick={onClick}>
        <RiArrowRightSLine />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
        <div>
        <h3 className="container threedtitle" style={{textAlign:"center",width:"600px"}}>What our clients have to say about Zaakpay Payment Gateway!</h3>
        <h3 className="container threedtitle1"style={{ width: "400px",textAlign: "center", marginLeft: "-40px"}}>What our clients have to say about Zaakpay Payment Gateway!</h3>
  
        <div style={{marginTop:"100px"}}>
      <div style={{boxShadow: "0 4px 8px 0 rgb(229, 226, 226)",width:"29px",height:"28px",
      padding: "3px",color:"blue",
      fontSize: "16px"}} className="arrow prev" onClick={onClick}>
        <RiArrowLeftSLine />
      </div>
      </div>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Threed">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Card style={{borderWidth:"20px",borderColor:"grey"}} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default Threed;