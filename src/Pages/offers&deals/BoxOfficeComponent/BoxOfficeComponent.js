import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class BoxOfficeComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        BoxOfficeComponentItems:
        [{
            brandName: "cinepolis",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Cinepolis31jan.jpg`,
            offerText: "Get 25% SuperCash @ Cinepolis!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cinepolis_logo.png`
        },
        {
            brandName: "Carnival Cinemas",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Carnival.jpg`,
            offerText: "Get 15% SuperCash @ Carnival Cinemas!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/carvinal_logo.png`
        },
        {
            brandName: "Mukta A2 Cinemas",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Mukta.jpg`,
            offerText: "Special Offer: Get 10% upto Rs.50 cashback on your 1st transaction of the Month @",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
        },
        {
            brandName: "Movie Time",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/MT.jpg`,
            offerText: "Get 15% SuperCash @ Movietime!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
        },
        
    ]
}
    }




    render(){
    return (
        <div className="row  ">
            <h1 className="component-heading">Box Office</h1>
        <div className="col-12">
        <div className="row">
            {this.state.BoxOfficeComponentItems.map( item =>(
                <div className="col-4 mb-4" style={{padding:0,width: "327px"}}>
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
