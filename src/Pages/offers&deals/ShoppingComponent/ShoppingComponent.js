import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class ShoppingComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
ShoppingComponentItems:
[{
    brandName: "Mi Online Store",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21.jpg`,
    offerText: 'Get FLAT Rs.600 Cashback @ Xiaomi',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/xiaomi_1.png`
},
{
    brandName: "Myntra",
    imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/myntra_4feb.jpg`,
    offerText: 'Get upto Rs.500 Cashback + Flat 10% discount upt to Rs.500 @ Myntra',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/myntra_logo.png`
},
{
    brandName: "ajio",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ajio1.jpg`,
    offerText: 'Get up to Rs.500 Cashback @ AJIO!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ajio_logo.png`

},
{
    brandName: "Samsung",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Shopperstop1.jpg`,
    offerText: 'Get Flat Rs.500 Cashback @ Samsung!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/shopperstop1.png`
},
{
    brandName: "realme",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
    offerText: 'Get Rs.10% Cashback at Realme ',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
},
{
    brandName: "Zivame",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Zivame_listing.jpg`,
    offerText: 'Get up to Rs.300 Cashback @ Zivame!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zivame_logo.png`
},
{
    brandName: "Beardo",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Beardo.jpg`,
    offerText: 'Get 10% Cashback upto Rs.150 @ Beardo',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/beardo_logo.png`
},
{
    brandName: "Just Dial",
    imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
    offerText: 'Get up to Rs.200 Supercash @ Justdial!',
    brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`
}

]}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading ">Shopping</h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.ShoppingComponentItems.map( item =>(
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
