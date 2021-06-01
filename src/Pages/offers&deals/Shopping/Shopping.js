import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Shopping extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    shoppingItems:
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

    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.shoppingItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.shoppingItems.length - 4){
            this.setState({current_item: (this.state.shoppingItems.length - this.state.current_item )},()=>{
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
   
        this.state.shoppingItems.unshift( this.state.shoppingItems[this.state.shoppingItems.length-1])
        this.state.shoppingItems.unshift( this.state.shoppingItems[this.state.shoppingItems.length-2])
        this.state.shoppingItems.push( this.state.shoppingItems[2])
        this.state.shoppingItems.push( this.state.shoppingItems[3])

   }
    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading">Shopping</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/shopping'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.shoppingItems.map( item =>(

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
