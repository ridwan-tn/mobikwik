import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class NewUserOffersComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        NewUserOffersComponentItems:
        [{
            brandName: "Ferns N Petals",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FernsNPetals-Nov.jpg`,
            offerText: "New MobiKwik user offer: Get 20% cashback @ Ferns N Petals!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ferns-n-petals.png`
        },
        {
            brandName: "Zoomin",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/zoomin31jan.jpg`,
            offerText: "Get 10% Cashback @ Zoomin",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zoomin31jan_logo.png`
        },
        {
            brandName: "Khelplay Rummy",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/khelplay-rummy.jpg`,
            offerText: "Flat Rs.50 Cashback @ Khelplay Rummy!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
        },
        {
            brandName: "Justickets",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Jus-ticket.jpg`,
            offerText: "Get 10% SuperCash @ on Mobikwik payments @ Justickets!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
        },
    ]
    
}
    }




    render(){
    return (
        <div className="row row-component ">
            <h1 className="component-heading"> New User Offers </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.NewUserOffersComponentItems.map( item =>(
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
