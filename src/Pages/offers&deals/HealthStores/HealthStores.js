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
    HealthStoresCardItems:
        [{
            brandName: "Apollo Pharmacy",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
            offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
        },
        {
            brandName: "Dr.Batra's Multi-Specialty Hom",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/drbatra.jpg`,
            offerText: "Dr.Batra's Multi-Specialty Homeopathy",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
        },
        {
            brandName: "Medplus",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Use 10% SuperCash @ Medplus!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/netmeds_logo.png`

        },
        {
            brandName: "SastaSundar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sastasundar.jpg`,
            offerText: 'Get assured Cashback up to Rs.500 @ SastaSundar!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sastasundar_logo.png`
        },
        {
            brandName: "healthians",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/healthiansz.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/healthians_logo_march2.png`
        },
        {
            brandName: "Talwalkars Gym  ",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Taalwalkars.jpg`,
            offerText: 'Get flat Rs.1500 SuperCash @ Talwalkars Gym!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/talwalkars.png.png`
        },
        {
            brandName: "the family pharma",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/thefamilypharma.jpg`,
            offerText: 'Get 15% SuperCash up to Rs.400 when you pay via MobiKwik @ The Family ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/thefamilypharma_logo.png`
        },
        {
            brandName: "32 Dental Care",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/32-Dental.jpg`,
            offerText: 'Special Offer: Get flat Rs.100 cashback on your 1st transaction in December',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/32-dental-care_logo.png`
        },
        {
            brandName: "Sabka dentist",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/sabkadentist.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sabkadentistlogo.png`
        },
        {
            brandName: "Ninety Eight Point Four",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/nintyfour.jpg`,
            offerText: 'Use 10% SuperCash @ 98.4 Pharmacy',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/98logo.png`
        },

    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.HealthStoresCardItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.HealthStoresCardItems.length - 4){
            this.setState({current_item: (this.state.HealthStoresCardItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.HealthStoresCardItems.length);
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
   
        this.state.HealthStoresCardItems.unshift( this.state.HealthStoresCardItems[this.state.HealthStoresCardItems.length-1])
        this.state.HealthStoresCardItems.unshift( this.state.HealthStoresCardItems[this.state.HealthStoresCardItems.length-2])
        this.state.HealthStoresCardItems.push( this.state.HealthStoresCardItems[2])
        this.state.HealthStoresCardItems.push( this.state.HealthStoresCardItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Health Stores </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/healthstores'><button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.HealthStoresCardItems.map( item =>(

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
