import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class StoresNearYouComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        StoresNearYouComponentItems:  [{
            brandName: "Metro Cash and Carry",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`
        },
        {
            brandName: "Reliance Fresh & Smart",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
            offerText: "Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png `
        },
        {
            brandName: "VishalMegaMart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`

        },
        {
            brandName: "Spencer's",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
            offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`
        },
        {
            brandName: "Spar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
            offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @ Spar',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`
        },
        {
            brandName: "Apollo Pharmacy",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
            offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
        },
        {
            brandName: "Medplus",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Use 10% SuperCash @ Medplus!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
        },
        {
            brandName: "Dawaa dost",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dawadost.jpg`,
            offerText: 'Use 10% SuperCash @ Dawaa dost!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/davadost-logo_march.png`
        },
    ],
    };
  }

  render() {
    return (
      <div className="row row-component">
        <h1 className="component-heading"> Super Near You</h1>
        <div className="col-12">
          <div className="row cards-items">
            {this.state.StoresNearYouComponentItems.map((item) => (
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
