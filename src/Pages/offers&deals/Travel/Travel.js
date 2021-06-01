import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Travel extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    TravelCardItems:
        [{
            brandName: "IndiGo",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
            offerText: 'Get upto Rs.600 Cashback on IndiGo!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png `
        },
        {
            brandName: "HappyEasyGo",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Happyeasygo31.jpg`,
            offerText: 'Flat Rs.300 Cashback on HappyEasyGo!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo31_logo.png`
        },
        {
            brandName: "IRCTC Rail Connect",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IRCTCAug.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctc_logo.png`

        },
        {
            brandName: "MakeMyTrip",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
            offerText: 'Save flat Rs.700 on MakeMyTrip! ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`
        },
        {
            brandName: "Vistara",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Airvistara.jpg`,
            offerText: 'Get up to Rs.400 Cashback on Vistara!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/airvistaralogo.png`
        },
        {
            brandName: "SpiceJet",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
            offerText: 'Get 10% Cashback on SpiceJet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`
        },
        {
            brandName: "Yatra",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
            offerText: 'Save flat Rs.600 on Yatra!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
        },
        {
            brandName: "Woodland",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/woodland.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.200 cashback on your 1st transaction of the Month @ Woodland',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/woodland_march.png`
        },
        {
            brandName: "Relaxo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @ Relaxo',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.TravelCardItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.TravelCardItems.length - 4){
            this.setState({current_item: (this.state.TravelCardItems.length - this.state.current_item )},()=>{
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
   
        this.state.TravelCardItems.unshift( this.state.TravelCardItems[this.state.TravelCardItems.length-3])
        this.state.TravelCardItems.unshift( this.state.TravelCardItems[this.state.TravelCardItems.length-4])
        this.state.TravelCardItems.push( this.state.TravelCardItems[5])
        this.state.TravelCardItems.push( this.state.TravelCardItems[6])

   }
    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Travel </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/travel'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.TravelCardItems.map( item =>(

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
