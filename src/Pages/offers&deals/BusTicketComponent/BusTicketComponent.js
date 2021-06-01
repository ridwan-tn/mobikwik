import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class BusTicketComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        BusTicketComponentItems:
        [{
            brandName: "BFL_ECOM_Yatra_Bus_OfferTab_04052021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/gibohgf43.jpg`,
            offerText: 'Domestic & International   Bus, Hotel, Flights',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
        },
        {
            brandName: "BFL_ECOM_EMT_Bus_04052021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/wasymytr43.jpg`,
            offerText: 'Domestic & International Bus, Hotel, Flightsi!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easemytrip_logo.png`
        },
    ]
}
    }




    render(){
    return (
        <div className="row ms-3 row-component">
            <h1 className="component-heading"> Bus Tickets </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.BusTicketComponentItems.map( item =>(
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
