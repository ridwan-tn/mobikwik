import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class cashOnBackpackComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        cashOnBackpackComponentItems:
        [{
            brandName: "SpiceJet",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
            offerText: "Save Rs.500 on SpiceJet!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`
        },
        {
            brandName: "OYO",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/oyo-jan.jpg`,
            offerText: "Get flat Rs.75 Cashback + 40% off @ OYO!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oyo-jan-logo.png`
        },
        {
            brandName: "MyBusTickets",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/mybustickets.jpg`,
            offerText: "Save upto Rs.200 on MyBusTickets!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mbt_logo.png`
        },
        {
            brandName: "MakeMyTrip",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
            offerText: "Save flat Rs.700 on MakeMyTrip!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/toppr13_logo.png`
        },
        {
            brandName: "Yatra",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
            offerText: "BSave flat Rs.600 on Yatra!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
        },
        {
            brandName: "Akbar Travels",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
            offerText: "Save Flat Rs.500 on Akbar Travels!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`
        },
        {
            brandName: "DriveU",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Driveu31jan.jpg`,
            offerText: "Get Flat Rs.50 Cashback @ DriveU!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/driveu31jan_logo.png`
        },
        {
            brandName: "Blusmart",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/blusmart1.jpg`,
            offerText: "Get upto Rs.100 Cashback on Blusmart!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/blusmartlogo1.png`
        },
        {
            brandName: "EaseMyTrip",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
            offerText: "Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`
        },
    ]
}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Cash On Backpack </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.cashOnBackpackComponentItems.map( item =>(
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
