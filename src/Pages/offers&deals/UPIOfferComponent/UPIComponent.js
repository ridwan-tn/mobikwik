import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class UPIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UPIComponentItems:   [{
        brandName: "Amazon",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Amazon14.jpg`,
        offerText: 'Get 10% SuperCash on amazon.in using MobiKwik UPI!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/amazonupi12july_logo.png `
    },
    {
        brandName: "Add money offer",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/upicashback.jpg`,
        offerText: 'Get 1% SuperCash on addmoney via UPI!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gullak_logo.png`
    }
]
    }
  }

  render() {
    return (
      <div className="row row-component">
        <h1 className="component-heading"> UPI Offers </h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.UPIComponentItems.map((item) => (
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
