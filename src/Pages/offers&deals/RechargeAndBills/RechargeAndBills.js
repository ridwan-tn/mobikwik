import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class RechargeAndBills extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:0,
        clicked: false,
    RechargeAndBillsItems:
        [{
            brandName: "Recharge & Bill Payment Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/cashback50.jpg`,
            offerText: 'Get 5% Cashback on first transaction of month  Recharge or Bill Payment',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mbk100logo.png`
        },
        {
            brandName: "Electricity Cashback Offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/firstlight.jpg`,
            offerText: 'Get Flat Rs.100 Cashback on your First Electricity Transaction of  Month',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logo31_logo.png`
        },
        {
            brandName: "Recharge Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/addkaro-addmoney.jpg`,
            offerText: 'Get 2% SuperCash up to Rs.500 on recharges',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/addkaro-logo.png`

        },
        {
            brandName: "Credit card payment offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/ccpay.jpg`,
            offerText: 'Get 1% SuperCash on your every Credit card Bill payment',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ccpaylogo.png`
        },
        {
            brandName: "Electricity Bill payment Offer",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/bijlibill.jpg`,
            offerText: 'Get 2% SuperCash up to Rs.1000 on Electricity Bill Payment',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bijlibilllogo.png`
        },
        {
            brandName: "DishTV",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Dishtv31jan.jpg`,
            offerText: 'Use SuperCash to get up to Rs. 1000 discount @ DishTv!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dishtv31jan_logo.png`
        },
        {
            brandName: "PSPCL Bill Payment",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pspcl-offer.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ PSPCL!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pspcl-logo.png`
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
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.RechargeAndBillsItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.RechargeAndBillsItems.length - 4){
            this.setState({current_item: (this.state.RechargeAndBillsItems.length - this.state.current_item )},()=>{
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
   
        this.state.RechargeAndBillsItems.unshift( this.state.RechargeAndBillsItems[this.state.RechargeAndBillsItems.length-3])
        this.state.RechargeAndBillsItems.unshift( this.state.RechargeAndBillsItems[this.state.RechargeAndBillsItems.length-4])
        this.state.RechargeAndBillsItems.push( this.state.RechargeAndBillsItems[5])
        this.state.RechargeAndBillsItems.push( this.state.RechargeAndBillsItems[6])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Recharge and Bills </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/recharge'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.RechargeAndBillsItems.map( item =>(

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
