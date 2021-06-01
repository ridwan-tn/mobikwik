import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class FirstPeCashBackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstPeCashBackComponentItems:  [{
        brandName: "Reliance Fresh & Smart",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
        offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png    `
    },
    {
        brandName: "Metro Cash and Carry",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
        offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`
    },
    {
        brandName: "Spencer's",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
        offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`

    },
    {
        brandName: "VishalMegaMart",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
        offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ ',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`
    },
    {
        brandName: "Jio Stores",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/jiostores.jpg`,
        offerText: 'Use 10% SuperCash @ Oliva Skin & Hair Clinic!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/jio-logo-march.png`
    },
    {
        brandName: "Reliance Digital",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
        offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
    },
    {
        brandName: "croma",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
        offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @ Croma Stores',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
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
        <h1 className="component-heading"> First peCashback </h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.FirstPeCashBackComponentItems.map((item) => (
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
