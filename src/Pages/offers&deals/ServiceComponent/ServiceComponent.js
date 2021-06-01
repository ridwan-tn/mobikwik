import React from "react";
import { Component } from "react";
import CardComponent from "../CardComponent/CardComponent";
export default class ServiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceComponentItems: [
        {
          brandName: "Petrol Pumps NCR - Special Offer!",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/petrolt2.jpg`,
          offerText:
            "Special Offer : Get 10% Up to Rs.100 cashback on your 1st transaction in May'21 @ Petrol Pumps",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petrolt2_logo.png`,
        },
        {
          brandName: "Metro Infrasys",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Metroinfrasyspvtltd.jpg`,
          offerText:
            "Use SuperCash to get up to Rs.1000 discount @ Metro Infrasys!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metroinfrasyspvtltd_logo.png`,
        },
        {
          brandName: "Naukri",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Naukri31jan.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/naukri31jan_logo.png`,
        },
        {
          brandName: "Ziffyhomes",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Ziffy-Homes.jpg`,
          offerText:
            "Use SuperCash to get up to Rs. 1000 discount @ ZiffyHomes!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ziffy-homes_logo.png`,
        },
        {
          brandName: "Droom",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Droom30jan.jpg`,
          offerText: "Use SuperCash to get up to Rs.1000 discount @ Droom!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/droom_logo.png`,
        },
        {
          brandName: "Just Dial",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
          offerText: "Get up to Rs.200 Supercash @ Justdial!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`,
        },
        {
          brandName: "Razorpay",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/razorpay.jpg`,
          offerText:
            "Use 5% of your SuperCash balance at select Razorpay merchants!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/razorpaylogo.png`,
        },
        {
          brandName: "Envi Salon and Spa",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Envisalon.jpg`,
          offerText:
            "Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Envi Salon & Spa",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/envi-salon-and-spa_march.png`,
        },
        {
          brandName: "Richfeel",
          imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/richfeell.jpg`,
          offerText: "Get 15% SuperCash @ RichFeel!",
          brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/richfeellogo.png`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="row  row-component">
        <h1 className="component-heading"> Service</h1>
        <div className="col-12">
          <div className="row card-items">
            {this.state.ServiceComponentItems.map((item) => (
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
