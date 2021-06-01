import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class ExchangesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ExchangesComponentItems:  [{
        brandName: "Bitbns",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Bitbns.jpg`,
        offerText: 'Earn unlimited SuperCash on INR deposits!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bitbns_logo.png`
    },
    {
        brandName: "Unocoin",
        imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/unocoin.jpg`,
        offerText: 'Earn unlimited SuperCash when you deposit INR to Unocoin wallet!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/unocoin-logo.png`
    },
    {
        brandName: "CoinDCX",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/CoinDCX.jpg`,
        offerText: 'Earn unlimited SuperCash when you deposit INR to CoinDCX wallet!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/coindcx_logo.png`

    },
    {
        brandName: "BuyUCoin",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BuyUcoin.jpg`,
        offerText: 'Earn unlimited SuperCash when you deposit INR to BuyUCoin wallet!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/buyucoin_logo2.png`
    },
    {
        brandName: "Nuo Exchange",
        imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Nuo-Exchange.jpg`,
        offerText: 'Earn unlimited SuperCash when you deposit INR to Nuo Exchange!',
        brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nuo-exchange_logo.png`
    },
],
    };
  }

  render() {
    return (
      <div className="row  ">
        <h1 className="component-heading"> Exchanges </h1>
        <div className="col-12">
          <div className="row">
            {this.state.ExchangesComponentItems.map((item) => (
              <div
                className="col-4 mb-4"
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
