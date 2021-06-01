import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class HealthComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        HealthComponentItems:
        [{
            brandName: "Medlife",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Medlife1.jpg`,
            offerText: 'Get up to Rs.50 discount + Rs.500 Cashback @ Medlife!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medlife_logo.png`
        },
        {
            brandName: "1mg",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/1MG25thnov.jpg`,
            offerText: 'Get up to Rs.500 Cashback @ 1mg!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/1mg_logo.png`
        },
        {
            brandName: "Netmeds",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Netmeds.jpg`,
            offerText: 'Get up to Rs.500 Cashback @ Netmeds!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

        },
        {
            brandName: "SastaSundar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
        },
        {
            brandName: "BFL_ECOM_FITNESSONE_Health_OfferTab_01042021",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/fitnessonejuly.jpg`,
            offerText: 'Fitness & Workout Equipments | No Cost EMIs',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fitnessonejuly_logo.png`
        },
        {
            brandName: "Lybrate Goodkart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
            offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
        },
        {
            brandName: "Medplusonline",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ Medplus Online!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
        },
        {
            brandName: "HealthKart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthkart.jpg`,
            offerText: 'Get up to Rs.250 Cashback @ Healthkart!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthkartlogo1.png`
        }
    ]
}
    }




    render(){
    return (
        <div className="row  row-component">
            <h1 className="component-heading"> Health </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.HealthComponentItems.map( item =>(
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
