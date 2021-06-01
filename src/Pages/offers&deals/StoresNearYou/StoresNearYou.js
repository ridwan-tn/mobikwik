import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class StoresNearYou extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        StoresNearYouItems:
        [{
            brandName: "Metro Cash and Carry",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`
        },
        {
            brandName: "Reliance Fresh & Smart",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
            offerText: "Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png `
        },
        {
            brandName: "VishalMegaMart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`

        },
        {
            brandName: "Spencer's",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
            offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`
        },
        {
            brandName: "Spar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
            offerText: 'Special Offer: Get Flat Rs.75 cashback on your 1st transaction of the Month @ Spar',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`
        },
        {
            brandName: "Apollo Pharmacy",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
            offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
        },
        {
            brandName: "Medplus",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Use 10% SuperCash @ Medplus!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
        },
        {
            brandName: "Dawaa dost",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dawadost.jpg`,
            offerText: 'Use 10% SuperCash @ Dawaa dost!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/davadost-logo_march.png`
        },
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.StoresNearYouItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.StoresNearYouItems.length - 4){
            this.setState({current_item: (this.state.StoresNearYouItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.StoresNearYouItems.length);
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
   
        this.state.StoresNearYouItems.unshift( this.state.StoresNearYouItems[this.state.StoresNearYouItems.length-1])
        this.state.StoresNearYouItems.unshift( this.state.StoresNearYouItems[this.state.StoresNearYouItems.length-2])
        this.state.StoresNearYouItems.push( this.state.StoresNearYouItems[2])
        this.state.StoresNearYouItems.push( this.state.StoresNearYouItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Stores Near You </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/storenearyour'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.StoresNearYouItems.map( item =>(

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
