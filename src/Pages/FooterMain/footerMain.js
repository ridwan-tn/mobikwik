import React from "react";
import "./footerMain.css";
import { Link } from "react-router-dom";

export default function footerMain() {
  return (
    <div className="main">
      <div className="containers">
        <div className="row  footer-first ">
          <div className="col-md-2 ">
            <div className="row">
              <div className="col-12 mt-4 ">
                <div className="footer-heading">Prepaid Recharge</div>
                <div className="footer-menu ">
                  <Link to="/bsnl">
                    <a className="footer-menu-items" href=" ">
                      BSNL Recharge
                    </a>
                  </Link>
                  <Link to="/vi">
                    <a className="footer-menu-items" href=" ">
                      Vodafone Idea (VI) Recharge
                    </a>
                  </Link>
                  <Link to="/jio">
                    <a className="footer-menu-items" href=" ">
                      JIO Recharge
                    </a>
                  </Link>
                  <Link to="/mntl">
                    <a className="footer-menu-items" href=" ">
                      MTNL Recharge
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-12  mt-3">
                <div className="footer-heading">Postpaid Bill Payment</div>
                <div className="footer-menu ">
                  <a className="footer-menu-items" href=" ">
                    Vodafone Idea (VI) Bill Payment
                  </a>
                  <a className="footer-menu-items" href=" ">
                    BSNL Bill Payment
                  </a>
                  <a className="footer-menu-items" href=" ">
                    Airtel Bill Payment
                  </a>
                  <a className="footer-menu-items" href=" ">
                    JIO Bill Payment{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="row  ">
              <div className="col-12 mt-4">
                <div className="footer-heading">DTH Recharge</div>
                <div className="footer-menu ">
                  <a className="footer-menu-items" href=" ">
                    Airtel DTH Recharge
                  </a>
                  <a className="footer-menu-items" href=" ">
                    Dish TV Recharge
                  </a>
                  <a className="footer-menu-items" href=" ">
                    Tata Sky Recharge
                  </a>

                  <a className="footer-menu-items" href=" ">
                    Sun Direct Recharge
                  </a>
                  <a className="footer-menu-items" href=" ">
                    Videocon D2H Recharge
                  </a>
                </div>
              </div>
              <div className="col-12  mt-2">
                <div className="footer-heading">Electricity Bill Payment</div>
                <div className="footer-menu ">
                <Link to="/avvnl">

                  <a className="footer-menu-items" href=" ">
                      AVVNL Bill Payment
                  </a>
                    </Link>
                  <a className="footer-menu-items" href=" ">
                    APDCL Bill Payent
                  </a>
                  <a className="footer-menu-items" href=" ">
                    BESCOM Bill Payment
                  </a>

                  <a className="footer-menu-items" href=" ">
                    JDVVNL Bill Payent
                  </a>
                  <a className="footer-menu-items" href=" ">
                    NBPDCL Bill Payment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-4  ">
            <div className="footer-heading">Others</div>
            <div className="footer-menu ">
              <a className="footer-menu-items" href=" ">
                Datacard Recharge
              </a>
              <a className="footer-menu-items" href=" ">
                Gas Bill Payment
              </a>
              <a className="footer-menu-items" href=" ">
                Gas Booking
              </a>
              <a className="footer-menu-items" href=" ">
                Credit Card Bill Payment
              </a>
              <a className="footer-menu-items" href=" ">
                Instant Loans
              </a>
              <a className="footer-menu-items" href=" ">
                EMI Payment
              </a>
              <a className="footer-menu-items" href=" ">
                Broadband Bill Payment
              </a>
              <a className="footer-menu-items" href=" ">
                Water Bill Payment
              </a>
              <a className="footer-menu-items" href=" ">
                Insurance
              </a>
            </div>
          </div>
          <div className="col-md-2 mt-4  ">
            <div className="footer-heading">Company</div>
            <div className="footer-menu ">
              <Link to="/about">
                <a className="footer-menu-items" href=" ">
                  About
                </a>
              </Link>
              <Link to="/career">
                <a className="footer-menu-items" href=" ">
                  Career
                </a>
              </Link>
              <Link to="/blog">
                <a className="footer-menu-items" href=" ">
                  Blog
                </a>
              </Link>
              <a className="footer-menu-items" href=" ">
                Press
              </a>
              <Link to="/contact">
                <a className="footer-menu-items" href=" ">
                  Contact
                </a>
              </Link>
              <a className="footer-menu-items" href=" ">
                Bug Bounty
              </a>
              <Link to="/sitemap">
                <a className="footer-menu-items" href=" ">
                  Sitemap
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-2 mt-4 help  ">
            <div className="footer-heading">Help & Support</div>
            <div className="footer-menu ">
              <a className="footer-menu-items" href=" ">
                Home
              </a>
              <Link to="/apps">

              <a className="footer-menu-items" href=" ">
                  Mobile Apps
              </a>
                </Link>
              <a className="footer-menu-items" href=" ">
                Payment Options
              </a>
              <a className="footer-menu-items" href=" ">
                FAQ
              </a>
              <a className="footer-menu-items" href=" ">
                Help
              </a>
              <a className="footer-menu-items" href=" ">
                Become a Partner
              </a>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="row verified">
              <div className="col-12 mt-4">
                <div className="footer-heading">Verified By</div>
                <div className="footer-menu-items">
                  <a
                    className="social-links"
                    target="blank"
                    href="https://www.facebook.com/MobiKwik"
                  ></a>
                  <a className="social-links" target="blank" href=" "></a>
                  <a
                    className="social-links"
                    target="blank"
                    href="https://twitter.com/mobikwik"
                  ></a>
                  <a
                    className="social-links"
                    target="blank"
                    href="https://www.linkedin.com/company/mobikwik"
                  ></a>
                  <a
                    className="social-links"
                    target="blank"
                    href="https://www.youtube.com/user/mobikwik"
                  ></a>
                  <a
                    className="social-links"
                    target="blank"
                    href="https://www.instagram.com/mymobikwik/"
                  ></a>
                </div>
              </div>
              <div className="col-12  mt-4">
                <div className="footer-links-heading">VERIFIED BY</div>
                <div className="footer-menu-items">
                  <a className="verified-links" href=" "></a>
                  <a className="verified-links" href=" "></a>
                  <a className="verified-links" href=" "></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer-second mt-5 ">
        <p className="para">
          Privacy Policy | Terms & Conditions | Refund Policy | Grievance Policy
          | PAYBACK Policy
        </p>
      </div>

      <div className="row footer-second-2 ">
        <p className="para-1">
          © 2021 One MobiKwik System Pvt Ltd, India | All rights reserved. |
          2.0.84{" "}
        </p>
      </div>
     
    </div>
  );
}
