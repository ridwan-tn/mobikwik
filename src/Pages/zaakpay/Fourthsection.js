import React from "react";
import Head from "./navbar";
import { Image, Button, Card } from "react-bootstrap";
import "./fourth.css";
import ninth from "./images/9.png";
function Fourth() {
  return (
    <div className="fourthsection">
      <div className="fourthsection">
        <h3 className="container fourthtitle">
          Why is Zaakpay the most trusted payment gateway?
        </h3>
        <p className="container fourthpara">
          We bring with us a decade of experience and a leading edge technology,
          to help you kick-start and scale up your business
        </p>
        <div className="for">
          <div className="one">
            <Card className="greet1">
              <Card.Body>
                <div className="lgreet">
                  <h6 className="">Instant onboarding</h6>
                </div>
                <div className="rgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/hand.svg"
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="greet2">
              <Card.Body>
                <div className="lgreet">
                  <h6 className="">Diverse payment modes</h6>
                </div>
                <div className="rgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/buy.svg"
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="greet3">
              <Card.Body>
                <div className="lgreet">
                  <h6 className="">Best user experience</h6>
                </div>
                <div className="rgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/user-experience.svg"
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="greet4">
              <Card.Body>
                <div className="lgreet">
                  <h6 className="">Simple pricing</h6>
                </div>
                <div className="rgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/price.svg"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="two">
            <Image className="bgimg" src={ninth} />
          </div>
          <div className="three">
            <Card className="greet5">
              <Card.Body>
                <div className="srgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/like.svg"
                  />
                </div>
                <div className="slgreet">
                  <h6 className="">Best conversion rates</h6>
                </div>
              </Card.Body>
            </Card>

            <Card className="greet6">
              <Card.Body>
                <div className="srgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/laptop-1.svg"
                  />
                </div>
                <div className="slgreet">
                  <h6 className="">Developer friendly</h6>
                </div>
              </Card.Body>
            </Card>

            <Card className="greet7">
              <Card.Body>
                <div className="srgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/shield.svg"
                  />
                </div>
                <div className="slgreet">
                  <h6 className="">Top notch security</h6>
                </div>
              </Card.Body>
            </Card>

            <Card className="greet8">
              <Card.Body>
                <div className="srgreet">
                  <Image
                    className="rimage"
                    src="https://zaakpay.com/assets/images/why-us/support-1.svg"
                  />
                </div>
                <div className="slgreet">
                  <h6 className="">Support 24 x 7</h6>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="fifthsection">
        <h3 className="container fourthtitle">
          End to end support for major payment modes
        </h3>
        <div className="fcards">
          <Card className="fcards1 col-md-3 col-sm-6 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-1.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">UPI</h5>
                <p>
                  Enables quick UPI<br></br>payments foryour users.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="fcards1 col-md-3 col-sm-12 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-2.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">Domestic Cards</h5>
                <p>
                  Supports payments via<br></br>all major credit & debit
                  <br></br>card networks including<br></br>Visa, MasterCard,
                  AmEx<br></br>Rupay, and more.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="fcards1 col-md-3 col-sm-12 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-3.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">International Cards</h5>
                <p>
                  Collects seamless<br></br>payments from <br></br>customers
                  using<br></br>International Banking<br></br>Cards.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="fcards1 col-md-3 col-sm-12 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-4.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">Netbanking</h5>
                <p>
                  Accepts payment from<br></br>50+ Indian banks like<br></br>
                  ICICI Bank, SBI Bank, Axis<br></br>Bank and more.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="fcards1 col-md-3 col-sm-12 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-5.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">Wallets</h5>
                <p>
                  Delivers multiple<br></br>checkout payments<br></br>options
                  like online<br></br>wallets including<br></br>MobiKwik.
                </p>
              </div>
            </Card.Body>
          </Card>

          <Card className="fcards1 col-md-3 col-sm-12 ml-5">
            <Card.Body>
              <div className="fleftcard">
                <Image src="https://zaakpay.com/assets/images/hm-support-6.svg" />
              </div>
              <div className="frightcard">
                <h5 className="fcardtitle">Pay Later</h5>
                <p>
                  Facilitates EMI payments<br></br>with products like Pay
                  <br></br>Later and more.
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="sixthsection">
        <h3 className="container sixthtitle">
          Developer friendly payment<br></br>gateway integration
        </h3>
        <div className="sixthsection1">
          <div className="col-md-1 col-sm-12 sixthcard">
            <div className="">
              <Image
                className="imgsix"
                src="https://zaakpay.com/assets/images/hm-dev-lang-2.png"
              />
              <p className="sixb">Ruby</p>
            </div>
          </div>
          <div className="col-md-1 col-sm-12 sixthcard">
            <div className="">
              <Image
                className="imgsix"
                src="https://zaakpay.com/assets/images/hm-dev-lang-1.png"
              />
              <p className="sixb">Java</p>
            </div>
          </div>

          <div className="col-md-1 col-sm-12 sixthcard">
            <div className="">
              <Image
                className="imgsix"
                src="https://zaakpay.com/assets/images/hm-dev-lang-5.png"
              />
              <p className="sixb">PHP</p>
            </div>
          </div>

          <div className="col-md-1 col-sm-12 sixthcard1">
            <div className="">
              <Image
                className="imgsix"
                src="https://zaakpay.com/assets/images/hm-dev-lang-3.png"
              />
              <p className="sixb1">Python</p>
            </div>
          </div>

          <div className="col-md-1 col-sm-12 sixthcard2">
            <div className="">
              <Image
                className="imgsix"
                src="https://zaakpay.com/assets/images/hm-dev-lang-4.png"
              />
              <p className="sixb1">Android</p>
            </div>
          </div>
          <div className="col-md-1 col-sm-12 sixthbtn">
            <Button className="sbtn rounded-pill" variant="primary" active>
              View All
            </Button>
          </div>
        </div>
        <div>
          <div className="twocard">
            <Card className="twocard1 col-md-4 col-sm-12 ml-5">
              <Card.Body>
                <div className="">
                  <h5 className="cardtitle2">
                    Looking for a no code integration?
                  </h5>
                  <p className="cardpara">
                    Our 1-click integration process gets payment gateway up and
                    running on your ecommerce platform in a jiffy
                  </p>
                </div>
              </Card.Body>
            </Card>
            <div
              className="sixthcards"
              style={{ backgroundColor: "rgb(241, 247, 252)" }}
            >
              <div
                className="col-md-1 sixthcard"
                style={{ left: "220px", top: "60px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-1.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Woo Commerce
                  </p>
                </div>
              </div>
              <div
                className="col-md-1  sixthcard"
                style={{ left: "250px", top: "60px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-2.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Shopify
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 sixthcard"
                style={{ left: "270px", top: "60px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-3.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Magento
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 col-sm-12 sixthcard"
                style={{ left: "665px", bottom: "60px", clear: "left" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-4.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Open Cart
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 col-sm-12 sixthcard"
                style={{ left: "700px", bottom: "60px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-5.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    prestashop
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 col-sm-12 sixthbtn"
                style={{ left: "705px", bottom: "60px" }}
              >
                <Button className="sbtn rounded-pill" variant="primary" active>
                  View All
                </Button>
              </div>
            </div>
            <div className="sixthcardsm">
              <div
                className="col-md-1 sixthcard"
                style={{ marginTop: "100px", marginLeft: "50px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-1.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Woo Commerce
                  </p>
                </div>
              </div>
              <div
                className="col-md-1  sixthcard"
                style={{ marginTop: "100px", marginLeft: "10px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-2.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Shopify
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 sixthcard"
                style={{ marginTop: "100px", marginLeft: "10px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-3.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Magento
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 sixthcard"
                style={{ marginTop: "40px", right: "120px" }}
              >
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-4.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    Open Cart
                  </p>
                </div>
              </div>
              <div className="col-md-1 sixthcard" style={{ marginTop: "40px" }}>
                <div className="">
                  <Image
                    className="imgsix"
                    src="https://zaakpay.com/assets/images/hm-dev-frame-5.png"
                  />
                  <p style={{ fontSize: "small" }} className="sixb1">
                    prestashop
                  </p>
                </div>
              </div>
              <div
                className="col-md-1 col-sm-12 sixthbtn"
                style={{ marginTop: "10px", marginLeft: "80px" }}
              >
                <Button
                  style={{ width: "340px" }}
                  className="sbtn rounded-pill"
                  variant="primary"
                  active
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="seventh"
        style={{ backgroundColor: "#24C6DC", height: "300px" }}
      >
        <h5
          className="container"
          style={{
            textAlign: "center",
            fontStyle: "bold",
            color: "#ffff",
            paddingTop: "60px",
          }}
        >
          Ready to partner with us?
        </h5>
        <h6
          className="container"
          style={{
            textAlign: "center",
            color: "#ffff",
            paddingTop: "30px",
            fontSize: "15px",
          }}
        >
          Check out our simple and affordable<br></br> pricing
        </h6>
        <Button
          className="seventhb"
          style={{
            marginLeft: "576px",
            width: "230px",
            height: "50px",
            marginTop: "30px",
            color: "#0040ff",
            fontWeight: "bold",
            fontSize: "small",
          }}
          variant="light"
        >
          See pricing
        </Button>
        <Button
          className="seventhc"
          style={{
            marginLeft: "106px",
            width: "230px",
            height: "50px",
            marginTop: "30px",
            color: "#0040ff",
            fontWeight: "bold",
            fontSize: "small",
          }}
          variant="light"
        >
          See pricing
        </Button>
      </div>
    </div>
  );
}

export default Fourth;
