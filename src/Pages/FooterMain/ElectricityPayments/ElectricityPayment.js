import React, { useState } from 'react'
import Footer from '../../offers&deals/Footer/Footer';
import HorizontalNavbar from '../../offers&deals/HorizontalNavbar/HorizontalNavbar'
import Navbar from '../../offers&deals/Navbar/Navbar';
import PopularSearches from '../../offers&deals/PopularSearches/PopularSearches';
import RightBar from '../../offers&deals/RightBar/RightBar';
import PaymentForm from './PaymentForm'
function ElectricityPayment() {

  const [verticalNavbar, setVerticalNavbar] = useState(false)
  const [closeNavbar, setCloseNavbar] = useState(false)
  const [rightbar, setRightbar] = useState(false)
  const [closeRightbar, setCloseRightbar] = useState(false)
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar className=" nav-bar" setCloseNavbar={setCloseNavbar} verticalNavbar ={ verticalNavbar }  closeNavbar={closeNavbar}  setVerticalNavbar ={ setVerticalNavbar }/>
        <HorizontalNavbar  setCloseNavbar ={setCloseNavbar}  setVerticalNavbar = {setVerticalNavbar} rightbar={rightbar}  setRightbar={ setRightbar } setCloseRightbar={setCloseRightbar}/>
        <RightBar rightbar={ rightbar } closeRightbar={closeRightbar}/>
      </div>
      <div className="row row-container">
            <PaymentForm/>
            <PopularSearches />
            <Footer />
         
      </div>
    </div>
  );
}

export default ElectricityPayment
