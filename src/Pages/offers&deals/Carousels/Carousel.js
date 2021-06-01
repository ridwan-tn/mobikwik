// App.js
import React from 'react';

import Slider from "react-slick";

import './Carousel.scoped.css'


function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function NextArrow (props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    > <i class="fas fa-angle-right"></i></div>
  );
}



export default function carousel() {

  const settings = {
    centerMode:true,
    slidesToShow:1,
    centerPadding:"220px",
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
  };

  return (
    <div className="">
    <div className="row carousel-row">
        <div className="col-12 mt-5 mb-5 slider-wrapper">
        <Slider {...settings}>
            <div >
              <div  style={{width:"100%", height:"285px" ,borderRadius:"6px" ,backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/zomatoaug_web.jpg')", backgroundSize:"cover"}}></div>
              <div>126</div>
            </div>
            <div >
              <div  style={{width:"100%", height:"285px",borderRadius:"6px",backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/mmt_web01.jpg')", backgroundSize:"cover"}}></div>
            </div>
            <div  >
              <div  style={{width:"100%", height:"285px",borderRadius:"6px",backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/realme_web_banner.jpg')", backgroundSize:"cover"}}></div>
            </div>
            <div  >
              <div  style={{width:"100%", height:"285px",borderRadius:"6px",backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/netmeds_web2.jpg')", backgroundSize:"cover"}}></div>
            </div>
            <div  >
              <div  style={{width:"100%", height:"285px",borderRadius:"6px",backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/apolloweb.jpg')", backgroundSize:"cover"}}></div>
            </div>
            <div  >
              <div  style={{width:"100%", height:"285px",borderRadius:"6px",backgroundImage:"url('https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21-web.jpg')", backgroundSize:"cover"}}></div>
            </div>
        </Slider>
      </div>
      </div>
    </div>
  );
}