import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import './GroceryComponent.css'
export default  class GroceryComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    groceryItems:
        [{
            brandName: "jioMart",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Jiomart_sep2020.jpg`,
            offerText: 'Get 5% Cashback @ Jio Mart',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/jiomart_1.png`
        },
        {
            brandName: "Grofers",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Grofers_Mar.jpg`,
            offerText: 'Get upto Rs.200 Cashback @ Grofers',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/groferslogo1.png`
        },
        {
            brandName: "BigBasket",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/big-basket.jpg`,
            offerText: 'Get upto Rs.50 Cashback @Grofers',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bigbasket_logo.png`

        },
        {
            brandName: "bbdaily",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BBDaily.jpg`,
            offerText: 'Get upto Rs.50 Cashback @ bbdaily',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bbdaily_logo.png`
        },
        {
            brandName: "Best Price Wholesale",
            imageUrl:` https://static8.mobikwik.com/views/images/ui/offer_images/Bestprice_jul2020.jpg`,
            offerText: 'Get upto Rs.100 Cashback @ Bestprice',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bestprice_jul2020.png`
        },
        {
            brandName: "Cococart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Cococart.jpg`,
            offerText: 'Use SuperCash to get up to Rs.1000 discount @ COCOCART',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cococart_logo.png`
        },
        {
            brandName: "Mother Diary",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Motherdairy.jpg`,
            offerText: 'Get Flat Rs.25 cashback on your 1st transaction in Apr 21 @ Mother Dairy',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/motherdairy_logo.png`
        },
        {
            brandName: "Milk",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Milk.jpg`,
            offerText: 'Get Flat Rs.25 cashback on your 1st transaction in Apr 21 @ Mother Dairy',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/milk_logo.png`
        },
        {
            brandName: "Prideofcows",
            imageUrl:` https://static8.mobikwik.com/views/images/ui/offer_images/prideofcows.jpg`,
            offerText: 'Use SuperCash to get up to Rs. 1000 discount @ Prideofcows!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/prideofcows_logo.png`
        }
       
    ]}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading">Grocery</h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.groceryItems.map( item =>(
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
