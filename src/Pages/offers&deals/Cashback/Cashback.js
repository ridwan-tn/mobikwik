import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Cashback extends Component {
    constructor(props){
        super(props)
    this.state ={
    CashbackItems:
        [{
            brandName: "MilkBasket",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/milkbasket.jpg`,
            offerText: 'Get up to Rs.75 cashback @ Milkbasket!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/milkbasket_logo.png `
        },
        {
            brandName: "Mi Online Store",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/xiaomi_march21.jpg`,
            offerText: 'Get FLAT Rs.600 Cashback @ Xiaomi!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/xiaomi_1.png`
        },
        {
            brandName: "Samsung",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/samsung_feb21.jpg`,
            offerText: 'Get Flat Rs.500 Cashback @ Samsung!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/samsung_listing_logo.png`

        },
        {
            brandName: "realme",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
            offerText: 'Get 10% Cashback at Realme! ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
        },
        {
            brandName: "croma",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
        },
        {
            brandName: "croma Online",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
            offerText: 'Get 10% Cashback on SpiceJet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma_logo_cashback.png`
        },
        {
            brandName: "Oppo Stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Oppo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oppo26mbk_logo.png`
        },
        {
            brandName: "Vivo stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`
        },
        {
            brandName: "Lybrate Goodkart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
            offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
        }
    ]



} // state closing
    } // constructor closing

    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.CashbackItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.CashbackItems.length - 4){
            this.setState({current_item: (this.state.CashbackItems.length - this.state.current_item )},()=>{
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
   
    this.state.CashbackItems.unshift( this.state.CashbackItems[this.state.CashbackItems.length-3])
    this.state.CashbackItems.unshift( this.state.CashbackItems[this.state.CashbackItems.length-4])
    this.state.CashbackItems.push( this.state.CashbackItems[5])
    this.state.CashbackItems.push( this.state.CashbackItems[6])

}

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Cashback </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/cashback'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
                <div className="row ">
                    <SwipeableViews>
                    <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
                    {this.state.CashbackItems.map( item =>(

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
        </div>
    )
}
}
