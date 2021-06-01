import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Health extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    HealthCardItems:
        [{
            brandName: "Medlife",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Medlife1.jpg`,
            offerText: 'Get up to Rs.50 discount + Rs.500 Cashback @ Medlife!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medlife_logo.png`
        },
        {
            brandName: "1mg",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/1MG25thnov.jpg`,
            offerText: 'Get up to Rs.500 Cashback @ 1mg!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/1mg_logo.png`
        },
        {
            brandName: "Netmeds",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Netmeds.jpg`,
            offerText: 'Get up to Rs.500 Cashback @ Netmeds!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

        },
        {
            brandName: "SastaSundar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
        },
        {
            brandName: "BFL_ECOM_FITNESSONE_Health_OfferTab_01042021",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/fitnessonejuly.jpg`,
            offerText: 'Fitness & Workout Equipments | No Cost EMIs',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fitnessonejuly_logo.png`
        },
        {
            brandName: "Lybrate Goodkart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Lybrate.jpg`,
            offerText: 'Get assured Cashback up to Rs.300 @ Lybrate!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo_lybrate_goodkart.png`
        },
        {
            brandName: "Medplusonline",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ Medplus Online!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
        },
        {
            brandName: "HealthKart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthkart.jpg`,
            offerText: 'Get up to Rs.250 Cashback @ Healthkart!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthkartlogo1.png`
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.HealthCardItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.HealthCardItems.length - 4){
            this.setState({current_item: (this.state.HealthCardItems.length - this.state.current_item )},()=>{
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
   
        this.state.HealthCardItems.unshift( this.state.HealthCardItems[this.state.HealthCardItems.length-3])
        this.state.HealthCardItems.unshift( this.state.HealthCardItems[this.state.HealthCardItems.length-4])
        this.state.HealthCardItems.push( this.state.HealthCardItems[5])
        this.state.HealthCardItems.push( this.state.HealthCardItems[6])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Health </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/health'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.HealthCardItems.map( item =>(

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
