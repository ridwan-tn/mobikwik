import React,{ useEffect, useState }  from 'react';
import {Navbar,Nav,Image,Button,Accordion,Card,Modal,Carousel} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import first from './images/1.png'
import second from './images/2.png'
import third from './images/3.png'
import './popups.css'
function Popup() {
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <div className="pop">
    <Modal show={show} className="container neww"  onHide={handleClose}>
          <div className="firstp">
           <div className="lp">
 <Carousel className="lp1">
  <Carousel.Item>
    <img
      src="https://static.mobikwik.com/web-remote/home/banners/authbanner2_10-07-2018.png"
      alt="First slide"/>
      <p className="lp2">Simple & fastest way to recharge your mobile and make utility bill payment</p>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src="https://static.mobikwik.com/web-remote/home/banners/authbanner4_26-07-2018.png"
      alt="Second slide"
    />
      <p className="lp2">Transfer money to your bank or a friend with just oneclick</p>
  </Carousel.Item>
</Carousel>
           </div>
           <div className="rp">
             <Button className="rp1" onClick={handleClose}>X</Button>
           <h4 className="rp2">Login</h4>
                      <form>
                      <label className="rp3">Enter Mobile Number</label> <br></br>
           <input className="rp4" type="text"></input>
           <Button className="rp5">Get OTP</Button>
           </form>
           <div className="rp6">
             <p>New to MobiKwik?<span className="rp7">Create Wallet</span></p>
           </div>
           </div>
          </div>    
    </Modal>
  </div>
);
}


export default Popup;
