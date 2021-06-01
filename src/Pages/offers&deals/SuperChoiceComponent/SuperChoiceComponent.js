import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class SuperChoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SuperChoiceComponentItems: [
        {
          brandName: "SuperChoice",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/superchoice-mobikwik.jpg`,
          offerText:
            "Choose to earn or use your SuperCash at merchant checkouts!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`,
        },
        {
          brandName: "IRCTC Website",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
          offerText: "Get up to Rs.1000 Supercash @ IRCTC Rail Website!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`,
        },
        {
          brandName: "EaseMyTrip",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
          offerText:
            "Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`,
        },
        {
          brandName: "MakeMyTrip",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
          offerText: "Save flat Rs.700 on MakeMyTrip!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`,
        },
        {
          brandName: "IndiGo",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
          offerText: "Save upto Rs.600 on IndiGo!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png`,
        },
        {
          brandName: "Akbar Travels",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
          offerText: "Save Flat Rs.500 on Akbar Travels!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`,
        },
        {
          brandName: "Freshmenu",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
          offerText: "Get up to Rs.1000 SuperCash @ DGVCL!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`,
        },
        {
          brandName: "PGVCL Offer",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
          offerText: "Get up to 300 Cashback @ Freshmenu!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`,
        },
        {
          brandName: "Yatra",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
          offerText: "Save flat Rs.600 on Yatra!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`,
        },
        {
          brandName: "Petrol Pumps",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/NewUserPetrol.jpg`,
          offerText: "Save upto Rs.100 on fuel!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fuel_logo.png`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="row  row-component">
        <h1 className="component-heading"> Super Choice</h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.SuperChoiceComponentItems.map((item) => (
              <div
                className="col-4 mb-4 width200"
                style={{ padding: 0, width: "327px" }}
              >
                <CardComponent
                  brandName={item.brandName}
                  imageUrl={item.imageUrl}
                  offerText={item.offerText}
                  brandimageUrl={item.brandimageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
