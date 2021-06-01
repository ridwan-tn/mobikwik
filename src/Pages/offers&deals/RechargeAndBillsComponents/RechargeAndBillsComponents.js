import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class RechargeAndBillsComponents extends Component {
    constructor(props){
        super(props)
    this.state ={
        RechargeAndBillsComponentsItems:
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

}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Recharge And Bills </h1>
        <div className="col-12">
        <div className="row card-items">
            {this.state.RechargeAndBillsComponentsItems.map( item =>(
                <div className="col-4 mb-4 width200" style={{padding:0,width: "327px"}}>
                <CardComponent  
                 brandName = {item.brandName}
                 imageUrl = {item.imageUrl}
                 offerText = {item.offerText}
                 brandimageUrl = {item.brandimageUrl} 
                 />
        </div>
            ))}
            </div>
            </div>
            </div>
    )
}
}
