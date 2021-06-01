import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class InfiniteSavingsComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        InfiniteSavingsComponentItems:
        [{
            brandName: "IRCTC Website",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
            offerText: 'Get up to Rs.1000 Supercash @ IRCTC Rail Website!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`
        },
        {
            brandName: "NNNOW",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/NNnow.jpg`,
            offerText: "Earn unlimited SuperCash @ NNNOW!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nnnow_logo.png`
        },
        {
            brandName: "Shoppers Stop",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/shopperstop_mainbanner.jpg`,
            offerText: 'Get Flat Rs.200 Cashback @ shoppersstop.com',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/shopperstop1.png`

        },
        {
            brandName: "Petsutra",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Petsutra.jpg`,
            offerText: 'Get 10% MobiKwik Cashback @ Petsutra!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petsutra-logo.png`
        },
        {
            brandName: "PSPCL Bill Payment",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pspcl-offer.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ PSPCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
        },
        {
            brandName: "Electricity Bill payment Offer ",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/bijlibill.jpg`,
            offerText: 'Get 2% SuperCash up to Rs.1000 on Electricity Bill Payment',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bijlibilllogo.png`
        },
        {
            brandName: "DGVCL Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dgvcl-offer.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
        },
        {
            brandName: "PGVCL Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ PGVCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pgvcl-logo.png`
        },
        {
            brandName: "realme",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
            offerText: 'Get 10% Cashback at Realme!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
        },

    ]
    
}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Infinite Savings </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.InfiniteSavingsComponentItems.map( item =>(
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
