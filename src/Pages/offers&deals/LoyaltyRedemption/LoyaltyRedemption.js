import React  from 'react'
import { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class LoyaltyRedemption  extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        LoyaltyRedemptionItems:
        [{
            brandName: "PAYBACK",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/paybacknw.jpg`,
            offerText: "Get PAYBACK points on MobiKwik payments!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/payback18aprillogo.png`
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.LoyaltyRedemptionItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.LoyaltyRedemptionItems.length - 4){
            this.setState({current_item: (this.state.LoyaltyRedemptionItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.LoyaltyRedemptionItems.length);
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
   if(this.state.LoyaltyRedemptionItems.length > 4){
        this.state.LoyaltyRedemptionItems.unshift( this.state.LoyaltyRedemptionItems[this.state.LoyaltyRedemptionItems.length-1])
        this.state.LoyaltyRedemptionItems.unshift( this.state.LoyaltyRedemptionItems[this.state.LoyaltyRedemptionItems.length-2])
        this.state.LoyaltyRedemptionItems.push( this.state.LoyaltyRedemptionItems[2])
        this.state.LoyaltyRedemptionItems.push( this.state.LoyaltyRedemptionItems[3])
   }
   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Loyalty Redemption </h3>
                { this.state.LoyaltyRedemptionItems.length > 4? 
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <button className="see-all-btn">See All </button>
                </div>
        :""}
            </div>
            <SwipeableViews>
            <div className="card_container" style={{ transform:'translate(0px)'}}  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.LoyaltyRedemptionItems.map( item =>(

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
