import React, { useRef } from "react";
import "./pageHeader.css";
import { Link, useRouteMatch } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
export default function HeaderSection() {
  let { url } = useRouteMatch();
  // refference to the ALL OFFERS button
  const allOffer = useRef();
  // refference to the LINKS  div
  const links = useRef();
  // funtion to add the offer-active-class
  const addClass = (event) => {
    if (allOffer.current.classList.contains("offer-active")) {
      allOffer.current.classList.remove("offer-active");
    } else {
      event.target.classList.add("offer-active");
    }
  };

  // function to remove the offer-active class
  const removeClass = (event) => {
    event.target.classList.remove("offer-active");
  };


  return (
    <div className="background">
      <div className="row header-row">
        <div
          className="col-12 col-md-9 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <p className=" me-3 header-text">Offer by Categories</p>
        </div>
        <div className="col-12 col-md-3 mb-3 form-div">
          <form>
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control input"
                placeholder="Search Offers"
              />
              <button type="submit" className="button">
                <i className="fas fa-search"></i>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row header-link" >
          <SwipeableViews enableMouseEvents  >
        <div className="col-12 links "  ref={ links }>
          <Link
            ref={allOffer}
            className="btn bg-light mt-2 me-2 offer-links offer-active"
            to={`${url}/all-offers`}
            onBlur={removeClass}
            onClick={addClass}
          >
            All Offers
          </Link>
          <Link
            className="btn bg-light offer-links mt-2 me-2"
            onBlur={removeClass}
            onClick={addClass}
            to={`${url}/grocery`}
          >
            Grocery
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/shopping"
          >
            Shopping
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/firstpecashback"
          >
            FirstPe CashBack
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/travel"
          >
            Travel
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/cashback"
          >
            Cashback
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/recharge"
          >
            Recharge and Bills
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/health"
          >
            Health
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/gaming"
          >
            Gaming
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/grocerystores"
          >
            Grocery Stores
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/healthstores"
          >
            Health Stores
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/infinitesavings"
          >
            Infinite Savings
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/superchoice"
          >
            SuperChoice
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/upioffers"
          >
            UPI Offers
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/food"
          >
            Food
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/restaurants"
          >
            Restaurants
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/bustickets"
          >
            Bus Tickets
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/entertainment"
          >
            Entertainment
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/shopppingstores"
          >
            Shopping Stores
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/storenearyour"
          >
            Store Near Your
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/service"
          >
            Service
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/newuseroffer"
          >
            New User Offer
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/education"
          >
            Education
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/exchanges"
          >
            {" "}
            Exchanges
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/cashOnBackpack"
          >
            {" "}
            Cash On Backpack
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/loyalityRedumption"
          >
            {" "}
            Loyalty Redemption
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/boxOffice"
          >
            {" "}
            Box Office
          </Link>
          <Link
            className="btn bg-light mt-2 me-2 offer-links"
            onBlur={removeClass}
            onClick={addClass}
            to="/offers/mobikwick-blue"
          >
            {" "}
            Mobikwik Blue American Express Card
          </Link>
        </div>
          </SwipeableViews>
      </div>
    </div>
  );
}
