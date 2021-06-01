import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
import './Grocery.css'
export default  class Grocery extends Component {
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


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.groceryItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.groceryItems.length - 4){
            this.setState({current_item: (this.state.groceryItems.length - this.state.current_item )},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-332  * this.state.current_item}px)`
               
             })
                
        }else{
        this.setState({current_item:  this.state.current_item + 1}, ()=>{
            this.carousel_container.style.transition = 'ease'
            this.carousel_container.style.transitionDuration = '0.5s'
            this.carousel_container.style.transform = `translate(${-330  *  this.state.current_item }px)`
            console.log(this.state.current_item);
        })
        }
       
   }
   componentWillMount(){
   
    this.state.groceryItems.unshift( this.state.groceryItems[this.state.groceryItems.length-3])
    this.state.groceryItems.unshift( this.state.groceryItems[this.state.groceryItems.length-4])
    this.state.groceryItems.push( this.state.groceryItems[5])
    this.state.groceryItems.push( this.state.groceryItems[6])

}


    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading">Grocery</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/grocery'><button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews enableMouseEvents containerStyle={{overflow:"hidden"}}>
            <div className="card_container"   ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.groceryItems.map( item =>(

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
