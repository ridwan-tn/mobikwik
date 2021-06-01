import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class EntertainmentComponents extends Component {
    constructor(props){
        super(props)
    this.state ={
        EntertainmentComponentsItems:
        [{
            brandName: "MilkBasket",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/milkbasket.jpg`,
            offerText: 'Get up to Rs.75 cashback @ Milkbasket!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/milkbasket_logo.png `
        },
        {
            brandName: "Mi Online Store",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21.jpg`,
            offerText: 'Get FLAT Rs.600 Cashback @ Xiaomi!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/xiaomi_1.png`
        },
        {
            brandName: "Samsung",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/samsung_feb21.jpg`,
            offerText: 'Get Flat Rs.500 Cashback @ Samsung!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/samsung_listing_logo.png`

        },
        {
            brandName: "realme",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
            offerText: 'Get 10% Cashback at Realme! ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
        },
        {
            brandName: "croma",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
        },
        {
            brandName: "croma Online",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
            offerText: 'Get 10% Cashback on SpiceJet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma_logo_cashback.png`
        },
        {
            brandName: "Oppo Stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
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
            brandName: "Lybrate Goodkart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
            offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
        }
    ]
}
    }




    render(){
    return (
        <div className="row row-component ">
            <h1 className="component-heading">Entertainment</h1>
        <div className="col-12">
        <div className="row cards-items ">
            {this.state.EntertainmentComponentsItems.map( item =>(
                <div className="col-4 mb-4 width200" style={{padding:0,width: "327px"}}>
                <CardComponent  
                 brandName = {item.brandName}
                 imageUrl = {item.imageUrl}
                 offerText = {item.offerText}
                 brandimageUrl = {item.brandimageUrl} 
                 />
        </div>
            ))}
            </div>
            </div>
            </div>
    )
}
}
