import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class FoodComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        FoodComponentItems:  [{
        brandName: "Swiggy",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Swiggyx.jpg`,
        offerText: 'Get 5% Cashback @ Swiggy!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/swiggy_logo.png`
    },
     {
        brandName: "Domino's",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Dominos-online.jpg`,
        offerText: 'SGet up to Rs.300 Cashback @ Dominos!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dominos_logo.png`

    },
    {
        brandName: "Hungerbox",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Hungerbox30jan.jpg`,
        offerText: 'Use SuperCash to get up to Rs.1000 discount @ Hunger box! ',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hungerbox30jan_logo.png`
    },
    {
        brandName: "Starbucks",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Starbucks.jpg`,
        offerText: 'Use SuperCash to get up to Rs. 1000 discount @ Starbucks!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/starbucks_logo.png`
    },
    {
        brandName: "Freshmenu",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
        offerText: 'Get up to 100 Cashback @ Freshmenu!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`
    },
    {
        brandName: "Bikanervala Online",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BIKANERVALAa.jpg`,
        offerText: 'Use 5% SuperCash @ Bikanervala!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
    },
    {
        brandName: "Cococart",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Cococart.jpg`,
        offerText: 'Use SuperCash to get up to Rs.1000 discount @ COCOCART!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cococart_logo.png`
    },
    {
        brandName: "MDP Food & Beverages",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/MDPDEC.jpg`,
        offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ MDP Coffee House|',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mdp-coffee-house.png`
    },
    {
        brandName: "Anjappar",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Anjappar_Listing.jpg`,
        offerText: 'Get 10% SuperCash on MobiKwik payments @Anjappar outlets!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/anjappar-logo2.png`
    }
]
    };
  }

  render() {
    return (
      <div className="row row-component">
        <h1 className="component-heading"> Food </h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.FoodComponentItems.map((item) => (
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
