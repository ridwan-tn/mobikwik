import React from "react";
import { Button } from "react-bootstrap";
import "./career.css";
import Footer from "../footerMain";

function Career() {
  return (
    <div className="careersection mt-3">
      <p className="container ml-2">Career</p>
      <p className="container ml-2 firstpara">
        Being the first ones on the scene, our journey as a Mobile Wallet has
        been astounding. Same can be yours; topped up to the brim with
        achievements and learning.
      </p>
      <p className="container ml-2 firstpara">
        Want to create dream products using bleeding edge technology and bring
        them to life...then MobiKwik is the place for you!
      </p>
      <p className="container ml-2 firstpara">
        At MobiKwik, we believe that great vision is irrelevant without great
        people. We love to work with people driven by passion and a thirst to
        create something futuristic - be it a product, a technological advance,
        or a unique marketing campaign; making sure that customer & merchant
        experiences are stupendous throughout.
      </p>
      <p className="container ml-2 firstpara">
        It’s an open culture here at MobiKwik, a free world. You’ll get
        unlimited support to create what you want. Handle big projects, bring
        them to a closure and get lauded for your achievements. And yes, we keep
        celebrating both big & small wins.
      </p>
      <p className="container ml-2 firstpara">
        Are you everything we just mentioned? If yes, then what are you waiting
        for? Just send across your resume stating the difference you can make to
        our revolutionizing story.
      </p>
      <p className="container ml-2">Current Job Openings</p>
      <table style={{ marginLeft: "20px" }}>
        <tr>
          <td className="th1">Data Analyst</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>
      <table style={{ marginLeft: "20px", marginTop: "20px" }}>
        <tr>
          <td className="th1">Data Scientist</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>
      <table style={{ marginLeft: "20px", marginTop: "20px" }}>
        <tr>
          <td className="th1">Data Engineer</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>
      <table style={{ marginLeft: "20px", marginTop: "20px" }}>
        <tr>
          <td className="th1">Senior Engineer - Java</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>
      <table style={{ marginLeft: "20px", marginTop: "20px" }}>
        <tr>
          <td className="th1">Lead Engineer - Java</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>
      <table style={{ marginLeft: "20px", marginTop: "20px" }}>
        <tr>
          <td className="th1">Senior Engineer - QA</td>
          <td>
            <Button className="tb1">View PDF</Button>
          </td>
        </tr>
      </table>{" "}
      <br></br>
      <p className="container ml-2 firstpara">
        Please reach out at{" "}
        <span style={{ color: "blue" }}>ta@mobikwik.com</span> for exciting
        opportunities with us.
      </p>
      <div className="footer-last " style={{ marginLeft: "-3em",marginTop:'-7em' }}>
          <Footer />
        </div>
    </div>
  );
}

export default Career;
