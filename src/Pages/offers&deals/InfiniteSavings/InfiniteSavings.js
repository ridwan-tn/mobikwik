import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class InfiniteSavings extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        InfiniteSavingsItems:
        [{
            brandName: "IRCTC Website",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/IRCTC_Web_2019.jpg`,
            offerText: 'Get up to Rs.1000 Supercash @ IRCTC Rail Website!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/irctcweb_logo.png`
        },
        {
            brandName: "NNNOW",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/NNnow.jpg`,
            offerText: "Earn unlimited SuperCash @ NNNOW!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nnnow_logo.png`
        },
        {
            brandName: "Shoppers Stop",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/shopperstop_mainbanner.jpg`,
            offerText: 'Get Flat Rs.200 Cashback @ shoppersstop.com',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/shopperstop1.png`

        },
        {
            brandName: "Petsutra",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Petsutra.jpg`,
            offerText: 'Get 10% MobiKwik Cashback @ Petsutra!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petsutra-logo.png`
        },
        {
            brandName: "PSPCL Bill Payment",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pspcl-offer.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ PSPCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
        },
        {
            brandName: "Electricity Bill payment Offer ",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/bijlibill.jpg`,
            offerText: 'Get 2% SuperCash up to Rs.1000 on Electricity Bill Payment',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bijlibilllogo.png`
        },
        {
            brandName: "DGVCL Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/dgvcl-offer.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ DGVCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dgvcl_logo.png`
        },
        {
            brandName: "PGVCL Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/PGVCL.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ PGVCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pgvcl-logo.png`
        },
        {
            brandName: "realme",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Realme_Listing.jpg`,
            offerText: 'Get 10% Cashback at Realme!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/realme_logo.png`
        },

    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.InfiniteSavingsItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.InfiniteSavingsItems.length - 4){
            this.setState({current_item: (this.state.InfiniteSavingsItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.InfiniteSavingsItems.length);
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
   
        this.state.InfiniteSavingsItems.unshift( this.state.InfiniteSavingsItems[this.state.InfiniteSavingsItems.length-1])
        this.state.InfiniteSavingsItems.unshift( this.state.InfiniteSavingsItems[this.state.InfiniteSavingsItems.length-2])
        this.state.InfiniteSavingsItems.push( this.state.InfiniteSavingsItems[2])
        this.state.InfiniteSavingsItems.push( this.state.InfiniteSavingsItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Infinite Savings </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/infinitesavings'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.InfiniteSavingsItems.map( item =>(

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
