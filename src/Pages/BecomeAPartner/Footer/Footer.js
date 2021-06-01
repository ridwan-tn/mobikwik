import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row  footer-wrappper " >
                    <div className="col-md-3 footer-links-wrapper">
                        <strong className="footer-links-heading">COMPANY</strong>
                        <div className="footer-links">
                            <a className="nav-links" href=" ">About</a>
                            <a className="nav-links" href=" ">Team</a>
                            <a className=" nav-links" href=" ">Career</a>
                            <a className=" nav-links" href=" ">Blog</a>
                            <a className=" nav-links" href=" ">Press</a>
                            <a className=" nav-links" href=" ">Contact</a>
                        </div>
                    </div>
                    <div className="col-md-3 footer-links-wrapper">
                        <strong className="footer-links-heading">HELP & SUPPORT</strong>
                        <div className="footer-links">
                            <a className="nav-links" href=" ">Home</a>
                            <a className="nav-links" href=" ">Mobile Apps</a>
                            <a className=" nav-links" href=" ">Payment Options</a>
                            <a className=" nav-links" href=" ">FAQS</a>
                            <a className=" nav-links" href=" ">Customer Support</a>
                        </div>
                    </div>
                    <div className="col-md-3 footer-links-wrapper">
                        <strong className="footer-links-heading">POLICY</strong>
                        <div className="footer-links">
                            <a className="nav-links" href=" ">Privacy Policy</a>
                            <a className="nav-links" href=" "> Terms & Conditions</a>
                            <a className=" nav-links" href=" "> Refund Policy</a>
                            <a className=" nav-links" href=" ">Grievance Policy</a>
                        </div>
                    </div>
                    <div className="col-md-3 footer-links-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <strong className="footer-links-heading">CONNECT</strong>
                                <div className="footer-links">
                                    <a className="social-links" target="blank" href="https://www.facebook.com/MobiKwik"> </a>
                                    <a className="social-links" target="blank" href=" "> </a>
                                    <a className="social-links" target="blank" href="https://twitter.com/mobikwik"> </a>
                                    <a className="social-links" target="blank" href="https://www.linkedin.com/company/mobikwik"> </a>
                                    <a className="social-links" target="blank" href="https://www.youtube.com/user/mobikwik"> </a>
                                    <a className="social-links" target="blank" href="https://www.instagram.com/mymobikwik/"> </a>
                                </div>
                            </div>
                            <div className="col-12 footer-links-verified mt-4">
                                <strong className="footer-links-heading">VERIFIED BY</strong>
                                <div className="footer-links">
                                    <a className="verified-links" href=" "> </a>
                                    <a className="verified-links" href=" "> </a>
                                    <a className="verified-links" href=" "> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 footer-greetings">
                        <p>Made with <span className="heart-icon"></span> by MobiKwick</p>
                    </div>
                </div>
                <div className="row low-footer">
                    <div className="col-2 ">
                        <span className="footer-logo"></span>
                    </div>
                    <div className="col-2 low-footer-item">
                        <span>More Than A Wallet </span>
                    </div>
                    <div className="col-5 low-footer-apps">
                        <span>Download Our App </span>
                        <div className="app-links">
                            <a href=" " className="app"> </a>
                            <a href=" " className="app"> </a>
                        </div>
                    </div>
                    <div className="col-3 powered-by-wrapper ">
                        <span> Powered By:
                            </span><a href=" " className="powered-by"> </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
