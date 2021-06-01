import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class ShoppingStoresComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ShoppingStoresComponentItems: [{
            brandName: "SKTVC",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/SK.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sk_logo.png`
        },
        {
            brandName: "Oppo Stores",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Oppo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oppo26mbk_logo.png`
        },
        {
            brandName: "Vivo stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`

        },
        {
            brandName: "Vivo stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`
        },
        {
            brandName: "Reliance Digital",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
            offerText: 'Special Offer: Get Flat Rs.500 cashback on your 1st transaction of the Month @ Reliance Digital!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
        },
        {
            brandName: "Relaxo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
        },
        {
            brandName: "Red Tape",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Red-Tape.jpg`,
            offerText: 'Get 10% SuperCash @ Red Tape stores',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/redtape-logo.png`
        },
        {
            brandName: "Crossword",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/crossword.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/crossword_march.png`
        },
        {
            brandName: "Trends Stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/trends.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/trends_march.png`
        },
        {
            brandName: "pantaloons",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pantaloonss.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pantaloons_march.png`
        },
    
       
    ],
    };
  }

  render() {
    return (
      <div className="row  row-component">
        <h1 className="component-heading"> Shoppping Stores</h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.ShoppingStoresComponentItems.map((item) => (
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
