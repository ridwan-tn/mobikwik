import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class LoyalityRedemptionComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        LoyalityRedemptionComponentItems:
        [{
            brandName: "PAYBACK",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/paybacknw.jpg`,
            offerText: "Get PAYBACK points on MobiKwik payments!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/payback18aprillogo.png`
        }
    ]
}
    }




    render(){
    return (
        <div className="row row-component ">
            <h1 className="component-heading"> Loyality Redumption </h1>
        <div className="col-12 ">
        <div className="row card-items">
            {this.state.LoyalityRedemptionComponentItems.map( item =>(
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
