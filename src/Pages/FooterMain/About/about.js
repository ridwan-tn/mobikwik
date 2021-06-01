import React, { useState } from "react";
import first from "./first.png";
import { Image, Button, Card } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import datas from "./aboutdata";
import "./about.css";
import Footer from "../footerMain";

function About() {
  const [cards] = useState(datas);

  return (
    <div className="firstsection">
      <img className="firstimage" src={first}></img>

      <div className="container firstsection1 pt-5">
        <h4>About Us</h4>
        <p
          className="container firstpara"
          style={{ textAlign: "center", width: "85%" }}
        >
          MobiKwik is India’s leading fintech platform, operating businesses in
          consumer payments, financial services and payment gateway. The vision
          of the company is - to build a Digital Credit Card for 100 Million
          Indians. Founded in 2009 by Bipin Preet Singh and Upasana Taku, the
          company has raised $110M in funding from marquee investors. With 60%
          Indian ownership, MobiKwik is the Truly Indian Payments App.
        </p>
        <p
          className="container secondpara"
          style={{ textAlign: "center", width: "85%" }}
        >
          MobiKwik’s payments network is one of the largest in India with 120
          million users, 3 million merchants, and 300+ billers. The company has
          pre-approved 20 million users for its Digital Credit Card aka Buy Now
          Pay Later “BNPL” product – MobiKwik ZIP, which is available to users
          for making payments via the MobiKwik Wallet and the MobiKwik Blue Amex
          Card. The company ventured into the Wealthtech space with the
          acquisition of Mumbai-based Clearfunds
        </p>
      </div>

      <div className="container secondsection pt-5">
        <h4>Our Team</h4>

        {cards.map((card) => {
          return (
            <Card
              style={{ width: "190px", float: "left", height: "340px" }}
              className="col-md-3 col-sm-12 mt-3 ml-2"
            >
              <Card.Img
                style={{ margin: "0px" }}
                variant="top"
                src={card.image}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "medium" }}>
                  {card.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "small" }}>{card.info}</Card.Text>
                <img src={card.icon1} />
                <img
                  style={{ width: "30px", height: "30px", marginLeft: "10px" }}
                  src={card.icon2}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="footer-last " style={{ marginLeft: "-10.5em",marginTop:'-7em' }}>
          <Footer />
        </div>
    </div>
  );
}

export default About;
