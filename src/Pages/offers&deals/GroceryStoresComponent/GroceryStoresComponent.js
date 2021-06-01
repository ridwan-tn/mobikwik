import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class GroceryStoresComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GroceryStoresComponentItems: [
        {
          brandName: "DreamReliance Fresh & Smart11",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART, Fresh and Sahakari Bhandar stores!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png`,
        },
        {
          brandName: "Spencer's",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`,
        },
        {
          brandName: "Spar",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`,
        },
        {
          brandName: "Metro Cash and Carry",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`,
        },
        {
          brandName: "Local Shops",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/pseudo.jpg`,
          offerText: "Earn 10% Supercash @ Local Stores",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nearbystores_logo.png`,
        },
        {
          brandName: "Modern Bazaar",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/modernbazaar.jpg`,
          offerText: "Get 20% SuperCash on MobiKwik payments @ Modern Bazaar!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/modernbazaarlogo.png`,
        },
        {
          brandName: "Munafa Mart",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/munafamart.jpg`,
          offerText: "Get 15% SuperCash @ Munafa Mart!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/munafa-mart_march.png`,
        },
        {
          brandName: "Safal",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/safal_May.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Safal ",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/safal_march.png`,
        },
        {
          brandName: "twentyfourseven",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/TFS_Apr.jpg`,
          offerText: "Get 20% SuperCash @ TwentyFour Seven stores!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/24-seven_logo_march.png`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="row  row-component">
        <h1 className="component-heading"> Grocery Stores </h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.GroceryStoresComponentItems.map((item) => (
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
