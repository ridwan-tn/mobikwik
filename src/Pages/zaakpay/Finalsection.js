import React from "react";
import { Navbar, Nav, Image, Button, Accordion, Card } from "react-bootstrap";
import assests from "./images/assests.png";
import "./Threed.css";

function Final() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url({assests})",
          padding: "0px",
          width: "100%",
          position: "relative",
          marginTop: "-200px",
        }}
      >
        <img style={{ width: "100%", height: "330px" }} src={assests}></img>

        <h5
          className="finaltitle"
          style={{
            position: "absolute",
            bottom: "230px",
            color: "white",
            left: "36%",
            fontSize: "bolder",
          }}
        >
          Interested in Zaakpay payment gateway?
        </h5>
        <h5
          className="finaltitle1"
          style={{
            position: "absolute",
            bottom: "230px",
            color: "white",
            left: "18%",
            fontSize: "bolder",
            textAlign: "center",
            lineHeight: "30px",
          }}
        >
          Interested in Zaakpay payment<br></br> gateway?
        </h5>
        <p
          className="finalpara"
          style={{
            position: "absolute",
            bottom: "140px",
            color: "white",
            left: "36%",
            textAlign: "center",
            lineHeight: "1.6",
            fontSize: "large",
          }}
        >
          Zaakpay is the best payment gatewayin India to <br></br> kickstart &
          scale-up your business
        </p>
        <p
          className="finalpara1"
          style={{
            position: "absolute",
            bottom: "140px",
            color: "white",
            left: "7%",
            textAlign: "center",
            lineHeight: "1.6",
            fontSize: "large",
          }}
        >
          Zaakpay is the best payment gatewayin India to <br></br> kickstart &
          scale-up your business
        </p>

        <Button
          className="finalb"
          style={{
            position: "absolute",
            bottom: "80px",
            left: "41%",
            width: "230px",
            height: "50px",
            color: "#0040ff",
            fontWeight: "bold",
            fontSize: "small",
          }}
          variant="light"
        >
          Get Started
        </Button>
        <Button
          className="finalb1"
          style={{
            position: "absolute",
            bottom: "80px",
            left: "24%",
            width: "230px",
            height: "50px",
            color: "#0040ff",
            fontWeight: "bold",
            fontSize: "small",
          }}
          variant="light"
        >
          Get Started
        </Button>
      </div>
      <div
        className="finallast"
        style={{
          width: "45%",
          paddingTop: "100px",
          color: "#3236a8",
          float: "left",
        }}
      >
        <Image
          style={{ marginLeft: "200px", height: "300px" }}
          className=""
          src="https://zaakpay.com/assets/images/hm-faq.svg"
        />
        <h3
          style={{
            marginLeft: "190px",
            fontWeight: "bold",
            marginTop: "35px",
            fontWeight: "bold",
          }}
        >
          Frequently Asked<br></br> Questions
        </h3>
        <p style={{ marginLeft: "190px", marginTop: "30px" }}>
          Contact us anytime
        </p>
        <Button
          style={{
            width: "240px",
            marginTop: "30px",
            marginLeft: "190px",
            backgroundColor: "#3236a8",
          }}
        >
          Get in touch
        </Button>
      </div>
      <div
        className="finallast1"
        style={{
          width: "45%",
          paddingTop: "60px",
          color: "#3236a8",
          float: "left",
        }}
      >
        <Image
          style={{ marginLeft: "130px", height: "250px" }}
          className=""
          src="https://zaakpay.com/assets/images/hm-faq.svg"
        />
        <h3
          style={{
            marginLeft: "39px",
            fontWeight: "bolder",
            marginTop: "35px",
            fontWeight: "bold",
            width: "400px",
          }}
        >
          Frequently Asked Questions
        </h3>
        <p style={{ marginLeft: "149px", marginTop: "30px", width: "300px" }}>
          Contact us anytime
        </p>
        <Button
          style={{
            width: "380px",
            height: "46px",
            marginTop: "30px",
            marginLeft: "30px",
            backgroundColor: "#3236a8",
          }}
        >
          Get in touch
        </Button>
      </div>
      <div style={{ paddingTop: "100px" }}></div>
    </div>
  );
}

export default Final;
