import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class MobikwikBlueAmericanExpressCard  extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        MobikwikBlueAmericanExpressCardItems:
        [   {
            brandName: "1% SuperCash Earn Blue Card Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/sc1percent.jpg`,
            offerText: "Earn 1% SuperCash on every transaction",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/supercash_amex.jpg.png`
        },
        {
            brandName: "Use 3% SuperCash on every transaction",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/amex-janburn.jpg`,
            offerText: "Use 2% SuperCash on every transaction",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/supercash_amex.jpg.png`
        },
            {
            brandName: "Cleartax Blue Card Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/cleartax_AmEx.jpg`,
            offerText: "Flat 25% discount on CA assisted services on Cleartax!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cleartax_amex_logo.png`
        },
        {
            brandName: "Zee5 Blue Card Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Zee5amex.jpg`,
            offerText: "Get 15% off on Zee5 annual subscription fee!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zee5amex-logo.jpg.png`
        },
        {
            brandName: "Ferns n Petals Blue Card Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FnPamexnew.jpg`,
            offerText: "Get 20% instant discount on Ferns n Petals!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fnpamexlogo.jpg.png`
        },
        {
            brandName: "Zoom car",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/amex_zoomcar.jpg`,
            offerText: "Get flat Rs.500 off* across Zoomcar Pan India",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zoomcar_logo.png`
        }   
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.MobikwikBlueAmericanExpressCardItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.MobikwikBlueAmericanExpressCardItems.length - 4){
            this.setState({current_item: (this.state.MobikwikBlueAmericanExpressCardItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.MobikwikBlueAmericanExpressCardItems.length);
               console.log(this.state.current_item);
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
   if(this.state.MobikwikBlueAmericanExpressCardItems.length > 4){
        this.state.MobikwikBlueAmericanExpressCardItems.unshift( this.state.MobikwikBlueAmericanExpressCardItems[this.state.MobikwikBlueAmericanExpressCardItems.length-1])
        this.state.MobikwikBlueAmericanExpressCardItems.unshift( this.state.MobikwikBlueAmericanExpressCardItems[this.state.MobikwikBlueAmericanExpressCardItems.length-2])
        this.state.MobikwikBlueAmericanExpressCardItems.push( this.state.MobikwikBlueAmericanExpressCardItems[2])
        this.state.MobikwikBlueAmericanExpressCardItems.push( this.state.MobikwikBlueAmericanExpressCardItems[3])
   }
   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Mobikwik Blue American Express Card </h3>
                { this.state.MobikwikBlueAmericanExpressCardItems.length > 4? 
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/mobikwick-blue'> <button className="see-all-btn">See All </button></Link>
                </div>
        :""}
            </div>
            <SwipeableViews>
            <div className="card_container"   ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.MobikwikBlueAmericanExpressCardItems.map( item =>(

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
