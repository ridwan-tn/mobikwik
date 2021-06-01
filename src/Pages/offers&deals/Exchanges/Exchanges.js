import React  from 'react'
import { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Exchanges extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    ExchangesItems:
        [{
            brandName: "Bitbns",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Bitbns.jpg`,
            offerText: 'Earn unlimited SuperCash on INR deposits!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bitbns_logo.png`
        },
        {
            brandName: "Unocoin",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/unocoin.jpg`,
            offerText: 'Earn unlimited SuperCash when you deposit INR to Unocoin wallet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/unocoin-logo.png`
        },
        {
            brandName: "CoinDCX",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/CoinDCX.jpg`,
            offerText: 'Earn unlimited SuperCash when you deposit INR to CoinDCX wallet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/coindcx_logo.png`

        },
        {
            brandName: "BuyUCoin",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/BuyUcoin.jpg`,
            offerText: 'Earn unlimited SuperCash when you deposit INR to BuyUCoin wallet!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/buyucoin_logo2.png`
        },
        {
            brandName: "Nuo Exchange",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Nuo-Exchange.jpg`,
            offerText: 'Earn unlimited SuperCash when you deposit INR to Nuo Exchange!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nuo-exchange_logo.png`
        },
    ]}
    }


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.ExchangesItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.ExchangesItems.length - 4){
            this.setState({current_item: (this.state.ExchangesItems.length - this.state.current_item )},()=>{
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
   
    this.state.ExchangesItems.unshift( this.state.ExchangesItems[this.state.ExchangesItems.length-3])
    this.state.ExchangesItems.unshift( this.state.ExchangesItems[this.state.ExchangesItems.length-4])
    this.state.ExchangesItems.push( this.state.ExchangesItems[5])
    this.state.ExchangesItems.push( this.state.ExchangesItems[6])

}

    render(){
    return (
        <div className="row ma-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> First Pe Cashback</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <button className="see-all-btn">See All </button>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.ExchangesItems.map( item =>(

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
