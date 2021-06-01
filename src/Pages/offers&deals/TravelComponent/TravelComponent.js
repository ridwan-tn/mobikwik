import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class TravelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TravelComponentItems:  [{
        brandName: "IndiGo",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
        offerText: 'Get upto Rs.600 Cashback on IndiGo!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png `
    },
    {
        brandName: "HappyEasyGo",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Happyeasygo31.jpg`,
        offerText: 'Flat Rs.300 Cashback on HappyEasyGo!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo31_logo.png`
    },
    {
        brandName: "IRCTC Rail Connect",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IRCTCAug.jpg`,
        offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctc_logo.png`

    },
    {
        brandName: "MakeMyTrip",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
        offerText: 'Save flat Rs.700 on MakeMyTrip! ',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`
    },
    {
        brandName: "Vistara",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Airvistara.jpg`,
        offerText: 'Get up to Rs.400 Cashback on Vistara!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/airvistaralogo.png`
    },
    {
        brandName: "SpiceJet",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
        offerText: 'Get 10% Cashback on SpiceJet!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`
    },
    {
        brandName: "Yatra",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
        offerText: 'Save flat Rs.600 on Yatra!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
    },
    {
        brandName: "Woodland",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/woodland.jpg`,
        offerText: 'Special Offer: Get 10% upto Rs.200 cashback on your 1st transaction of the Month @ Woodland',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/woodland_march.png`
    },
    {
        brandName: "Relaxo",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
        offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @ Relaxo',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
    }
],
    };
  }

  render() {
    return (
      <div className="row row-component">
        <h1 className="component-heading"> Travel </h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.TravelComponentItems.map((item) => (
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
