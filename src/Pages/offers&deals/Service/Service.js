import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Service extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        ServiceItems:
        [{
            brandName: "Petrol Pumps NCR - Special Offer!",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/petrolt2.jpg`,
            offerText: "Special Offer : Get 10% Up to Rs.100 cashback on your 1st transaction in May'21 @ Petrol Pumps",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/petrolt2_logo.png`
        },
        {
            brandName: "Metro Infrasys",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Metroinfrasyspvtltd.jpg`,
            offerText: "Use SuperCash to get up to Rs.1000 discount @ Metro Infrasys!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metroinfrasyspvtltd_logo.png`
        },
        {
            brandName: "Naukri",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Naukri31jan.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/naukri31jan_logo.png`

        },
        {
            brandName: "Ziffyhomes",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ziffy-Homes.jpg`,
            offerText: 'Use SuperCash to get up to Rs. 1000 discount @ ZiffyHomes!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ziffy-homes_logo.png`
        },
        {
            brandName: "Droom",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Droom30jan.jpg`,
            offerText: 'Use SuperCash to get up to Rs.1000 discount @ Droom!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/droom_logo.png`
        },
        {
            brandName: "Just Dial",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/JustDialwo-V8MGPCYFV9.jpg`,
            offerText: 'Get up to Rs.200 Supercash @ Justdial!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/justdialwo.png`
        },
        {
            brandName: "Razorpay",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/razorpay.jpg`,
            offerText: 'Use 5% of your SuperCash balance at select Razorpay merchants!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/razorpaylogo.png`
        },
        {
            brandName: "Envi Salon and Spa",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Envisalon.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Envi Salon & Spa',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/envi-salon-and-spa_march.png`
        },
        {
            brandName: "Richfeel",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/richfeell.jpg`,
            offerText: 'Get 15% SuperCash @ RichFeel!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/richfeellogo.png`
        },
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.ServiceItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.ServiceItems.length - 4){
            this.setState({current_item: (this.state.ServiceItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.ServiceItems.length);
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
   
        this.state.ServiceItems.unshift( this.state.ServiceItems[this.state.ServiceItems.length-1])
        this.state.ServiceItems.unshift( this.state.ServiceItems[this.state.ServiceItems.length-2])
        this.state.ServiceItems.push( this.state.ServiceItems[2])
        this.state.ServiceItems.push( this.state.ServiceItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Service </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                     <Link to='/offers/service'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.ServiceItems.map( item =>(

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
