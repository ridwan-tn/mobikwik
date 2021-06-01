import React,{ useRef } from 'react';
import './RightBar.css';
import logo from './logo.png';
import support from './support.png';
export default function RightBar( { rightbar ,closeRightbar} ) {
	 const rightBar = useRef()
	if(rightbar){
		rightBar.current.style.display = "flex"
	}
	if(closeRightbar){
		rightBar.current.style.display = "none"
	}
	return (
		<div className="row right-bar" ref={ rightBar }>
			<div className=" col-4  width250 p-0">
				<div className="top-section bgcolor">
					<div className="top-branding-section mt-2">
						<img src={logo} alt="" className="right-bar-logo" />

						<div className="right-bar-headings">
							<h3 className="right-bar-heading">MOBIKWICK</h3>
							<p className="sub-heading"> Paisa Bana Powerfull</p>
						</div>
					</div>
					<div className="right-bar-buttons">
						<button className="btn btn-primary " type="button">
							Login
						</button>
						<button className="btn btn-outline-light " type="button">
							Signup
						</button>
					</div>
				</div>

                <div classNameName="bottom-section">
				<nav class="navbar navbar-expand-lg navbar-light height noflex">
  <div class="container-fluid">
  
    <div className=" navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
        <li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" aria-current="page" href=" "><i class="fas fa-home" style={{fontSize:"17px",marginRight:"15px",color:"#198FDC"}}></i> Home</a>
        </li>
        <li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" href=" "> Upgrade Wallet</a>
        </li>
        <li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" href=" ">  Redeem Voucher</a>
        </li>
		<li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" href=" "> <img src={support} alt=" " style={{width:"20px",marginRight:"15px"}}/>  Help</a>
        </li>
		<li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" href=" ">  Refer & Earn </a>
        </li>
		<li className="nav-item blue-hover">
          <a className="nav-link right-bar-link" href=" "> Press </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
                </div>
			</div>
		</div>
	);
}
