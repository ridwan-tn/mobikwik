import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Food extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    FoodItems:
        [{
            brandName: "Swiggy",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Swiggyx.jpg`,
            offerText: 'Get 5% Cashback @ Swiggy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/swiggy_logo.png`
        },
         {
            brandName: "Domino's",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Dominos-online.jpg`,
            offerText: 'SGet up to Rs.300 Cashback @ Dominos!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dominos_logo.png`

        },
        {
            brandName: "Hungerbox",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Hungerbox30jan.jpg`,
            offerText: 'Use SuperCash to get up to Rs.1000 discount @ Hunger box! ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hungerbox30jan_logo.png`
        },
        {
            brandName: "Starbucks",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Starbucks.jpg`,
            offerText: 'Use SuperCash to get up to Rs. 1000 discount @ Starbucks!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/starbucks_logo.png`
        },
        {
            brandName: "Freshmenu",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
            offerText: 'Get up to 100 Cashback @ Freshmenu!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`
        },
        {
            brandName: "Bikanervala Online",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BIKANERVALAa.jpg`,
            offerText: 'Use 5% SuperCash @ Bikanervala!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
        },
        {
            brandName: "Cococart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Cococart.jpg`,
            offerText: 'Use SuperCash to get up to Rs.1000 discount @ COCOCART!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cococart_logo.png`
        },
        {
            brandName: "MDP Food & Beverages",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/MDPDEC.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ MDP Coffee House|',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mdp-coffee-house.png`
        },
        {
            brandName: "Anjappar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Anjappar_Listing.jpg`,
            offerText: 'Get 10% SuperCash on MobiKwik payments @Anjappar outlets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/anjappar-logo2.png`
        }
       
       
    ]}
    }


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.FoodItems.length - 7},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               
             })
                
        }else{
         this.setState({current_item:  this.state.current_item - 1},()=>{
            this.carousel_container.style.transition  = 'ease'
            this.carousel_container.style.transitionDuration = '0.5s'
            this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
            console.log(this.state.current_item);
         })
        }  
    }

    nextbtn = ()=>{
        if(this.state.current_item === this.state.FoodItems.length - 4){
            this.setState({current_item: (this.state.FoodItems.length - this.state.current_item )},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               
             })
                
        }else{
        this.setState({current_item:  this.state.current_item + 1}, ()=>{
            this.carousel_container.style.transition = 'ease'
            this.carousel_container.style.transitionDuration = '0.5s'
            this.carousel_container.style.transform = `translate(${-325  *  this.state.current_item }px)`
            console.log(this.state.current_item);
        })
        }
       
   }
   componentWillMount(){
   
    this.state.FoodItems.unshift( this.state.FoodItems[this.state.FoodItems.length-3])
    this.state.FoodItems.unshift( this.state.FoodItems[this.state.FoodItems.length-4])
    this.state.FoodItems.push( this.state.FoodItems[5])
    this.state.FoodItems.push( this.state.FoodItems[6])

}

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Food </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/food'> <button className="see-all-btn">See All </button> </Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.FoodItems.map( item =>(

                <CardComponent
                 brandName = {item.brandName}
                 imageUrl = {item.imageUrl}
                 offerText = {item.offerText}
                 brandimageUrl = {item.brandimageUrl} 
                 />

            ))}
            </div>
            </SwipeableViews>
        </div>
    )
}
}
