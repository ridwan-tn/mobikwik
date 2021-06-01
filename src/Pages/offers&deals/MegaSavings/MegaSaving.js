import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class MegaSaving extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    MegaSavingItems:
        [{
            brandName: "MedPlus",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Medplus.jpg`,
            offerText: 'Use 10% SuperCash @ Medplus!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/medplus-logo-march.png`
        },
        {
            brandName: "Ninety Eight Point Four",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/nintyfour.jpg`,
            offerText: 'Use 10% SuperCash @ 98.4 Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/98logo.png`
        },
        {
            brandName: "Dawaa dost",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dawadost.jpg`,
            offerText: 'Get up to Rs.500 Cashback @ AJIO!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/davadost-logo_march.png`

        },
        {
            brandName: "Apollo Pharmacy",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/apollo.jpg`,
            offerText: 'Use 10% SuperCash @ Apollo Pharmacy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/apollo-logo2.png`
        },
        {
            brandName: "Oliva Skin & Hair Clinic",
            imageUrl:`https://static.mobikwik.com/views/images/ui/offer_logos/oliva.jpg.png`,
            offerText: 'Use 10% SuperCash @ Oliva Skin & Hair Clinic!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oliva_march.png`
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
            this.setState({current_item:  this.state.MegaSavingItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.MegaSavingItems.length - 4){
            this.setState({current_item: (this.state.MegaSavingItems.length - this.state.current_item )},()=>{
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
   
        this.state.MegaSavingItems.unshift( this.state.MegaSavingItems[this.state.MegaSavingItems.length-3])
        this.state.MegaSavingItems.unshift( this.state.MegaSavingItems[this.state.MegaSavingItems.length-4])
        this.state.MegaSavingItems.push( this.state.MegaSavingItems[5])
        this.state.MegaSavingItems.push( this.state.MegaSavingItems[6])

   }


    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading">Mega Saving</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/'><button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.MegaSavingItems.map( item =>(

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
