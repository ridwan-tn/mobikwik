import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class SuperChoice extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        SuperChoiceItems:
        [{
            brandName: "SuperChoice",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/superchoice-mobikwik.jpg`,
            offerText: 'Choose to earn or use your SuperCash at merchant checkouts!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/superchoice-logo.png`
        },
        {
            brandName: "IRCTC Website",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
            offerText: "Get up to Rs.1000 Supercash @ IRCTC Rail Website!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`
        },
        {
            brandName: "EaseMyTrip",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
            offerText: 'Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`

        },
        {
            brandName: "MakeMyTrip",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
            offerText: 'Save flat Rs.700 on MakeMyTrip!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/makemytrip_logo.png`
        },
        {
            brandName: "IndiGo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
            offerText: 'Save upto Rs.600 on IndiGo!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/indigo-logo-2020.png`
        },
        {
            brandName: "Akbar Travels",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
            offerText: 'Save Flat Rs.500 on Akbar Travels!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`
        },
        {
            brandName: "Freshmenu",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/FreshMenujuly2019.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
        },
        {
            brandName: "PGVCL Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
            offerText: 'Get up to 300 Cashback @ Freshmenu!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/freshmenu_logo.png`
        },
        {
            brandName: "Yatra",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
            offerText: 'Save flat Rs.600 on Yatra!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`
        },
        {
            brandName: "Petrol Pumps",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/NewUserPetrol.jpg`,
            offerText: 'Save upto Rs.100 on fuel!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fuel_logo.png`
        }

    ]
} // state closing
    } // constructor closing


    prevBtn = ()=>{
        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.SuperChoiceItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.SuperChoiceItems.length - 4){
            this.setState({current_item: (this.state.SuperChoiceItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.SuperChoiceItems.length);
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
   
        this.state.SuperChoiceItems.unshift( this.state.SuperChoiceItems[this.state.SuperChoiceItems.length-1])
        this.state.SuperChoiceItems.unshift( this.state.SuperChoiceItems[this.state.SuperChoiceItems.length-2])
        this.state.SuperChoiceItems.push( this.state.SuperChoiceItems[2])
        this.state.SuperChoiceItems.push( this.state.SuperChoiceItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading">  Super Choice </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/superchoice'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.SuperChoiceItems.map( item =>(

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
