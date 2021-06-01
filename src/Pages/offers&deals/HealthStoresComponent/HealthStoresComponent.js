import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class HealthStoresComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        HealthStoresComponentItems:
        [{
            brandName: "Apollo Pharmacy",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
            offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
        },
        {
            brandName: "Dr.Batra's Multi-Specialty Hom",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/drbatra.jpg`,
            offerText: "Dr.Batra's Multi-Specialty Homeopathy",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
        },
        {
            brandName: "Medplus",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Use 10% SuperCash @ Medplus!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

        },
        {
            brandName: "SastaSundar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
        },
        {
            brandName: "healthians",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthiansz.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthians_logo_march2.png`
        },
        {
            brandName: "Talwalkars Gym  ",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Taalwalkars.jpg`,
            offerText: 'Get flat Rs.1500 SuperCash @ Talwalkars Gym!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/talwalkars.png.png`
        },
        {
            brandName: "the family pharma",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/thefamilypharma.jpg`,
            offerText: 'Get 15% SuperCash up to Rs.400 when you pay via MobiKwik @ The Family ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/thefamilypharma_logo.png`
        },
        {
            brandName: "32 Dental Care",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/32-Dental.jpg`,
            offerText: 'Special Offer: Get flat Rs.100 cashback on your 1st transaction in December',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/32-dental-care_logo.png`
        },
        {
            brandName: "Sabka dentist",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sabkadentist.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sabkadentistlogo.png`
        },
        {
            brandName: "Ninety Eight Point Four",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/nintyfour.jpg`,
            offerText: 'Use 10% SuperCash @ 98.4 Pharmacy',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/98logo.png`
        },

    ]
}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Health Stores </h1>
        <div className="col-12">
        <div className="row cards-items">
            {this.state.HealthStoresComponentItems.map( item =>(
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
