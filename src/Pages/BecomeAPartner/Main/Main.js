import React from "react";
import "./Main.css";
export default function Main() {
  return (
    <div className="container">
      <div className="row main-row">
        <div
          className="col-12 col-md-6 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="intro-image"
            src="https://promotions.mobikwik.com/files/images/seller-images/social-globe.png"
            alt=" "
          />
        </div>
        <div
          className="col-12 col-md-6 right-intro"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="heading">Kwikstart your business</h1>
          <div className="paragraphs">
            <p className="paragraph">
              MobiKwik aims to simplify payment experience for both its
              customers and business partners. MobiKwik has the trust of over 30
              Lakhs merchant partners and is looking forward to more such
              collaborations. With us, reach out to more than 100 million users
              and accept their digital payments.
            </p>
            <p className="paragraph">
              Please share your contact information and grow your business with
              MobiKwik.
            </p>
          </div>
          <a className="btn btn-primary" href=" ">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
