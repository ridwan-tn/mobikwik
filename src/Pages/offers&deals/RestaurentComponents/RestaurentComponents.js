import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class RestaurentComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        RestaurentComponentItems:
        [{
            brandName: "Cafe Coffee Day",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/ccd.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction in of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ccd_march.png`
        },
        {
            brandName: "Barista",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Barista.jpg`,
            offerText: "Earn 15% SuperCash @ Barista outlets!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/barista_logo.png`
        },
        {
            brandName: "Chaayos",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/chaayoss.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ Chaayos',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/chaayos_march.png`

        },
        {
            brandName: "Bikanervala",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Bikaner.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bikanerwala_march.png`
        },
        {
            brandName: "Havmor",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
            offerText: 'Get 20% SuperCash on paying with MobiKwik wallet @ Havmor',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/havmor_logo.png.png`
        },
        {
            brandName: "Gelato Italiano",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/gelato.jpg`,
            offerText: 'Get 100% SuperCash on your first transaction via MobiKwik @ Gelato',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gelatologo.png`
        },
        {
            brandName: "Costa Coffee",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Costalisting.jpg`,
            offerText: 'Earn 20% SuperCash @ Costa Coffee outlets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/costalisting_logo.png`
        },
        {
            brandName: "Pizza Hut",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Pizzahut.jpg`,
            offerText: 'Regular offer-Earn 20% SuperCash @ Pizza Hut outlets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pizzahut_logo.png`
        },
        {
            brandName: "The Coffee Bean and Tea Leaf",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/cbtlnew.jpg`,
            offerText: 'Get 25% SuperCash @ The Coffee Bean and Tea Leaf',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cbtlnewlogo.png`
        },

    ]

}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Restaurants</h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.RestaurentComponentItems.map( item =>(
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
