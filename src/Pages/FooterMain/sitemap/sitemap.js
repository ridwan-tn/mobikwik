import React, { Component } from "react";
import "./sitemap.css";
import Footer from "../footerMain";

class Sitemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list1: [
        "Mobile",
        "itemsDTH",
        "Datacard",
        "Landline",
        "Electricity",
        "Insurance",
        "Gas",
      ],
      list2: ["Offers", "Recharge/Bills", "Grocery", "Travel", "Food"],
      list3: [
        "Contact Us",
        "About us",
        "Career",
        "Privacy Policy",
        "Refund Policy",
        "Grievance Policy",
      ],
      list4: [
        "Terms and Conditions",
        "T&C - Users",
        "T&C - Merchants",
        "T&C - Offers",
      ],
      list5: [
        "Blog",
        "Refer and Earn",
        "Apps",
        "Addcash",
        "Paymentoptions",
        "Bug Bounty",
      ],
      mobile1: [
        "Airtel Prepaid",
        "Vodafone Idea VI Recharge",
        "Reliance Prepaid",
        "Reliance Mobile Prepaid",
        "Reliance GSM Prepaid",
        "Tata Indicom Prepaid",
      ],
      mobile2: [
        "BSNL Prepaid",
        "MTNL Prepaid",
        "Aircel Prepaid",
        "Telenor Prepaid",
        "Tata Docomo Prepaid",
        "MTS Prepaid",
      ],
      mobile3: [
        "Videocon Prepaid",
        "Airtel 4G Prepaid",
        "Vodafone 4G Prepaid",
        "Jio Prepaid",
        "Airtel Postpaid",
        "Vodafone Idea VI Bill Payment",
      ],
      mobile4: [
        "Reliance Mobile Postpaid",
        "Reliance GSM Postpaid",
        "Tata Docomo Postpaid",
        "Airtel 4G Postpaid",
        "BSNL Postpaid",
        "Aircel Postpaid",
      ],
      credits1: [
        "CITI Bank Credit Card",
        "City Union Bank Credit Card",
        "HDFC Bank Credit Card",
        "ICICI Bank Credit Card",
        "IDBI Bank Credit",
      ],
      credits2: [
        "CardIndusInd Bank Credit Card",
        "Ratnakar Bank Credit Card",
        "SBI Bank Credit Card",
        "Standard Chartered Bank Credit Card",
      ],
      credits3: [
        "Syndicate Bank Credit Card",
        "Union Bank of India Credit Card",
        "Yes Bank Credit Card",
        "American Express Credit Card",
      ],
      credits4: [
        "Axis Credit Card",
        "Andhra Bank Credit Card",
        "Bank of Baroda Credit Card",
        "Canara Bank Credit Card",
      ],
      Emi1: [
        "AAVAS FINANCIERS LIMITED",
        "Aditya Birla Housing Finance Limited",
        "Aditya Birla Finance ltd (ABFL)",
        "Bajaj Auto Finance",
        "DMI Finance",
        "Hero Fincorp",
      ],
      Emi2: [
        "IDFC FIRST Bank",
        "i2iFunding",
        "Indiabulls Consumer Finance Limited",
        "L and T Financial Services",
        "RupeeRedee",
        "Shriram City Union Finance Ltd",
      ],
      Emi3: [
        "Snapmint",
        "Tata Capital Financial Services Limited",
        "Toyota Financial Services",
        "Bajaj Finance Limited (Overdue Payments)",
        "Zestmoney EMI Payments",
        "Indiabulls Housing Finance",
      ],
      Emi4: [
        "Tata Capital Finance",
        "Jana Small Finance Bank",
        "Faircent",
        "Clix",
        "Avail",
        "Kissht",
      ],
      Broadband1: [
        "Act Fibernet",
        "Hathway Broadband",
        "Tikona Digital Networks Private Limited",
        "Airtel Broadband",
        "ASIANET Broadband (ASIANET)",
      ],
      Broadband2: [
        "Comway Broadband",
        "Connect Broadband",
        "DEN Broadband",
        "Flash Fibernet",
        "FusionNet Broadband",
      ],
      Broadband3: [
        "Tikona ION",
        "Instalinks",
        "Instanet Broadband",
        "M-NET Fiber Fast",
        "Netplus Broadband",
      ],
      Broadband4: [
        "Nextra Broadband",
        "Spectra",
        "Timbl Broadband",
        "TTN BroadBand",
        "Vfibernet Broadband",
      ],
      payment1: [
        "Reliance Energy Mumbai Bill Payment",
        "APDCL Non Rapdr Electricity Bill Payment",
        "BEDCPL Bhagalpur Electricity Online Bill Payment",
        "BSES Yamuna Electricity Bill Payment",
        "DGVCL Dakshin Gujrat Electricity Bill Payment Online",
        "GESCOM Gulbarga Electricity Bill Payment",
        "JBVNL Jharkhand Electricity Bill Payment",
        "CESC Kota Electricity Online Bill Payment",
        "NESCO Odisha Electricity Bill Payment",
        "PSPCL Punjab Electricity Bill Payment",
        "Southco Odisha Electricity Bill Payment",
        "TORRENT Power Electricity Bill Payment",
        "UHBVN Haryana Electricity Bill Payment",
        "UPCL Uttarakhand Electricity Online Bill Payment",
      ],
      payment2: [
        "AVVNL Ajmer Electricity Bill Payment",
        "APDCL Electricity Bill Payment",
        "CESC Bharatpur Electricity Online Bill Payment",
        "CESC Limited Kolkata Electricity Online Bill Payment",
        "DHBVN Haryana Electricity Bill Payment",
        "HPSEBL Himachal Electricity Bill Payment",
        "JVVNL Jaipur Vidyut Vitran Nigam Electricity Online Bill Payment",
        "Meghalaya Electricity Bill Payment Online",
        "NPCL Uppcl Noida Electricity Bill Payment Online",
        "SNDL Nagpur Electricity Bill Payment",
        "TATA Power Ajmer Electricity Bill Payment",
        "UPPCL Rural Electricity Bill Payment",
        "WESCO Electricity Bill Payment",
      ],
      payment3: [
        "APEPDCL Eastern Electricity Bill Payment",
        "BESCOM Bangalore Electricity Bill Payment Online",
        "CESC Bikaner Electricity Online Bill Payment",
        "CESC Mysore Electricity Bill Payment",
        "DDED Daman And Diu Electricity Online Bill Payment",
        "HESCOM Hubli Electricity Bill Payment",
        "JDVVNL Jodhpur Vidyut Vitran Nigam Electricity Online Bill Payment",
        "NBPDCL Bihar Electricity Bill Payment",
        "SBPDCL Bihar Electricity Online Bill Payment",
        "TATA Power Delhi Distribution Ltd Bill Payment",
        "TSECL Tripura State Electricity Online Bill Payment",
        "WBSEDCL West Bengal Electricity Bill Payment",
      ],
      payment4: [
        "APSPDCL Southern Electricity Bill Payment",
        "BEST Mumbai Electricity Bill Payment",
        "BSES Rajdhani Electricity Bill Payment",
        "CSEB Chhattisgarh Electricity Bill Payment Online",
        "JUSCO Jamshedpur Electricity Bill Payment Online",
        "KESCO Electricity Bill Payment",
        "Muzaffarpur Vidyut Vitran Electricity Bill Payment",
        "PGVCL Paschim Gujrat Electricity Bill Payment Online",
        "Southco Odisha Electricity Bill Payment",
        "UGVCL Uttar Gujrat Electricity Bill Payment Online",
        "UPPCL Online Bill Payment",
      ],
      pipedgas1: [
        "Adani Gas",
        "Gujarat Gas Ltd",
        "Haryana City Gas",
        "Indraprastha Gas Limited (IGL)",
        "Mahanagar Gas Limited",
        "Maharashtra Natural Gas Limited",
      ],
      pipedgas2: [
        "Sabarmati Gas Limited (SGL)",
        "Siti Energy - Uttar Pradesh",
        "Tripura Natural Gas",
        "Unique Central Piped Gases Pvt Ltd (UCPGPL)",
        "Vadodara Gas Limited",
      ],
      pipedgas3: [
        "Aavantika Gas Ltd",
        "Assam Gas Company Limited",
        "Bhagyanagar Gas Limited",
        "Central U.P. Gas Limited",
        "Charotar Gas Sahakari Mandali Ltd",
      ],
      pipedgas4: [
        "Gail Gas LimitedGreen Gas Limited(GGL)",
        "Indian Oil-Adani Gas Private Limited",
        "IRM Energy Private Limited",
        "Sanwariya Gas Limited",
      ],
    };
  }

  render() {
    return (
      <div className=" container sitemapsection">
        <h6>Sitemap</h6>
        <div className="row">
          <div className="col-md-3 col-3">
            <p>Recharge/Bills</p>
            {this.state.list1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div className="col-md-3 col-3">
            <p>Offers</p>
            {this.state.list2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
            <p style={{ marginTop: "26px" }}>Press</p>
            <p style={{ fontSize: "12px" }}>press</p>
          </div>
          <div className="col-md-3 col-2">
            <p>Help</p>
            <p style={{ fontSize: "12px" }}>Help</p>
          </div>
          <div className="col-md-3 col-3">
            <p>Company & Policy</p>
            {this.state.list3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-3">
            <p>Transfer Money</p>
            <p style={{ fontSize: "12px" }}>Send to wallet</p>
            <p style={{ fontSize: "12px" }}> Send to Bank</p>
            <p style={{ marginTop: "40px" }}>Bus tickets</p>
            <p style={{ fontSize: "12px" }}>Bus Tickets</p>
            <p style={{ fontSize: "12px" }}>Msanage Bus Ticket</p>
            <p style={{ fontSize: "12px" }}>Bus Route Directory</p>
            <p style={{ fontSize: "12px" }}>Booking</p>
          </div>
          <div className="col-md-3 col-3">
            <p style={{ marginTop: "15px" }}>Terms and Conditions</p>
            {this.state.list4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div className="col-md-3 col-2">
            <p></p>
            <p style={{ fontSize: "12px" }}></p>
          </div>
          <div className="col-md-3 col-3">
            <p>Others</p>
            {this.state.list5.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Mobile</p>
            {this.state.mobile1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.mobile2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.mobile3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.mobile4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>DTH</p>
            <p style={{ fontSize: "12px" }}>Airtel DTH</p>
            <p style={{ fontSize: "12px" }}>Sun Direct</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Tata Sky</p>
            <p style={{ fontSize: "12px" }}>Reliance big TV</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-2">
            <p style={{ fontSize: "12px" }}>Dish Tv</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Videocon D2H</p>
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Credit Card Billl</p>
            {this.state.credits1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.credits2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.credits3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.credits4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>EMI Payments</p>
            {this.state.Emi1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Emi2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Emi3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Emi4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Data Card</p>
            <p style={{ fontSize: "12px" }}>Reliance Netconnect</p>
            <p style={{ fontSize: "12px" }}>Tata Photon Plus</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>MTS Mblaze</p>
            <p style={{ fontSize: "12px" }}>BSNL Data Card</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-2">
            <p style={{ fontSize: "12px" }}>Vodafone Net cruise</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Idea Net Setter</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Broadbands</p>
            {this.state.Broadband1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Broadband2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Broadband3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.Broadband4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Digital Cable</p>
            <p style={{ fontSize: "12px" }}>Hathway Digital TV</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-9 col-9">
            <p style={{ fontSize: "12px" }}>Incable Digital TV</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Life Insurance</p>
            <p style={{ fontSize: "12px" }}>Personal Accidental Insurance</p>
            <p style={{ fontSize: "12px" }}>Critical Illness Insurance</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Dengue Insurance</p>
            <p style={{ fontSize: "12px" }}>Communicable Disease Insurance</p>
          </div>

          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Hospital Cash Insurance</p>
            <p style={{ fontSize: "12px" }}>Coronavirus Health Insurance</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Home Insurance</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Landline</p>
            <p style={{ fontSize: "12px" }}>Airtel Landline</p>
            <p style={{ fontSize: "12px" }}>Tikona</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>MTNL Delhi</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Reliance Communications</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Tata Teleservices (CDMA)</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Piped Gas</p>
            {this.state.pipedgas1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.pipedgas2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.pipedgas3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.pipedgas4.map(function (lis, k) {
              return <p style={{ fontSize: "small" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Electricity Bill Payment</p>
            {this.state.payment1.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.payment2.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.payment3.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            {this.state.payment4.map(function (lis, k) {
              return <p style={{ fontSize: "12px" }}>{lis}</p>;
            })}
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-3">
            <p>Water</p>
            <p style={{ fontSize: "12px" }}>
              Bangalore Water Supply and Sewerage Board
            </p>
            <p style={{ fontSize: "small" }}>Uttarakhand Jal Sansthan</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Delhi Jal Board</p>
          </div>

          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>Municipal Corporation Gurugram</p>
          </div>
          <div style={{ marginTop: "40px" }} className="col-md-3 col-3">
            <p style={{ fontSize: "12px" }}>
              Urban Improvement Trust (UIT) - Bhiwad
            </p>
          </div>
        </div>

        <div
          style={{ marginTop: "40px" }}
          style={{ marginTop: "50px" }}
          className="row"
        >
          <div className="col-md-3 col-3">
            <p>Metro</p>
            <p style={{ fontSize: "12px" }}>Mumbai Metro</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-4">
            <p>Traffic Challan</p>
            <p style={{ fontSize: "12px" }}>Andhra Pradesh Traffic Police</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }} className="row">
          <div className="col-md-3 col-4">
            <p>Property Tax</p>
            <p style={{ fontSize: "12px" }}>
              Municipal Corporation of Gurgaon (MCG)
            </p>
          </div>
        </div>

        <div className="footer-last " style={{ marginLeft: "-4em",marginTop:'-7em' }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Sitemap;
