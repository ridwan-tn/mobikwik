import React from "react";
import "./Main.css";
import first from "./images/1.png";
import second from "./images/2.png";
import third from "./images/3.png";
import fourth from "./images/4.jpg";
import fifth from "./images/5.png";
import sixth from "./images/6.jpg";
import seventh from "./images/7.png";
import { Image, Button, Card } from "react-bootstrap";
function Main() {
  return (
    <div className="main">
      <div className="leftm">
        <p className="firstline">
          Accelerate your business with the best payment gateway
        </p>
        <p className="secondline">
          With our experience of over a decade and leading edge
          technology,explore the future of payments.
        </p>
        <Button className="mainb" variant="primary" active>
          Get Started
        </Button>
      </div>

      <div className="right">
        <Image
          className="rightimage"
          src="https://zaakpay.com/assets/images/home-banner-top.svg"
        />
      </div>
      <div className="container scrollsection">
        <marquee>
          <img className="first" src={first} alt="" />
          <img className="second" src={second} alt="" />
          <img className="third" src={third} alt="" />
          <img className="third" src={fourth} alt="" />
          <img className="third" src={fifth} alt="" />
          <img className="third" src={sixth} alt="" />
          <img className="third" src={seventh} alt="" />
          <img className="first" src={first} alt="" />
          <img className="second" src={second} alt="" />
          <img className="third" src={third} alt="" />
          <img className="third" src={fourth} alt="" />
          <img className="third" src={fifth} alt="" />
          <img className="third" src={sixth} alt="" />
          <img className="third" src={seventh} alt="" />
        </marquee>
      </div>
      <h3 className="thirdtitle">Explore our payment solutions!</h3>
      <div className=" container thirdsection">
        <div>
          <Card className="cards1 col-md-6 col-sm-12 ml-5">
            <Card.Body>
              <div className="leftcard">
                <Image src="https://zaakpay.com/assets/images/hm-pay-sol-1.svg" />
              </div>
              <div className="rightcard">
                <h5 className="cardtitle">Checkout</h5>
                <p>
                  Collect payments on your website and mobile apps with a
                  standard checkout experience.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="cards2 col-md-6 col-sm-12">
            <Card.Body>
              <div className="leftcard">
                <Image src="https://zaakpay.com/assets/images/hm-pay-sol-2.svg" />
              </div>
              <div className="rightcard">
                <h5 className="cardtitle">LinkPay</h5>
                <p>
                  Send one time payment links to your customers and collect the
                  payments.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="cards3 col-md-6 col-sm-12 ml-5">
            <Card.Body>
              <div className="leftcard">
                <Image src="https://zaakpay.com/assets/images/hm-pay-sol-3.svg" />
              </div>
              <div className="rightcard">
                <h5 className="cardtitle">Subscriptions</h5>
                <p>
                  Collect repeated payments via Standing Instruction (SI),
                  E-Mandate or E-NACH
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="cards4 col-md-6 col-sm-12">
            <Card.Body>
              <div className="leftcard">
                <Image src="https://zaakpay.com/assets/images/hm-pay-sol-4.svg" />
              </div>
              <div className="rightcard">
                <h5 className="cardtitle">QR Codes</h5>
                <p>
                  Process UPI payments from your customers via offline or online
                  QR Codes
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Main;
