import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class ShoppingStores extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        ShoppingStoresitems:
        [{
            brandName: "SKTVC",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/SK.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/sk_logo.png`
        },
        {
            brandName: "Oppo Stores",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Oppo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Oppo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oppo26mbk_logo.png`
        },
        {
            brandName: "Vivo stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`

        },
        {
            brandName: "Vivo stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vivo.jpg`,
            offerText: 'Get flat Rs.1200 Cashback @ Vivo stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vivo26mk_logo.png`
        },
        {
            brandName: "Reliance Digital",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
            offerText: 'Special Offer: Get Flat Rs.500 cashback on your 1st transaction of the Month @ Reliance Digital!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
        },
        {
            brandName: "Relaxo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
        },
        {
            brandName: "Red Tape",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Red-Tape.jpg`,
            offerText: 'Get 10% SuperCash @ Red Tape stores',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/redtape-logo.png`
        },
        {
            brandName: "Crossword",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/crossword.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/crossword_march.png`
        },
        {
            brandName: "Trends Stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/trends.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/trends_march.png`
        },
        {
            brandName: "pantaloons",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pantaloonss.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pantaloons_march.png`
        },
    
       
    ]}
    }

    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.ShoppingStoresitems.length - 7},()=>{
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
        if(this.state.current_item === this.state.ShoppingStoresitems.length - 4){
            this.setState({current_item: (this.state.ShoppingStoresitems.length - this.state.current_item )},()=>{
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
   
        this.state.ShoppingStoresitems.unshift( this.state.ShoppingStoresitems[this.state.ShoppingStoresitems.length-1])
        this.state.ShoppingStoresitems.unshift( this.state.ShoppingStoresitems[this.state.ShoppingStoresitems.length-2])
        this.state.ShoppingStoresitems.push( this.state.ShoppingStoresitems[2])
        this.state.ShoppingStoresitems.push( this.state.ShoppingStoresitems[3])

   }
    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading">Shopping Stores</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                     <Link to='/offers/shopppingstores'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.ShoppingStoresitems.map( item =>(

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
