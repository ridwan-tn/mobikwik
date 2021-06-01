import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class GroceryStores extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        GroceryStoresItems:
        [{
            brandName: "DreamReliance Fresh & Smart11",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART, Fresh and Sahakari Bhandar stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png`
        },
        {
            brandName: "Spencer's",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`
        },
        {
            brandName: "Spar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/SparHypermarket.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spar_march.png`

        },
        {
            brandName: "Metro Cash and Carry",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`
        },
        {
            brandName: "Local Shops",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pseudo.jpg`,
            offerText: 'Earn 10% Supercash @ Local Stores',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/nearbystores_logo.png`
        },
        {
            brandName: "Modern Bazaar",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/modernbazaar.jpg`,
            offerText: 'Get 20% SuperCash on MobiKwik payments @ Modern Bazaar!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/modernbazaarlogo.png`
        },
        {
            brandName: "Munafa Mart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/munafamart.jpg`,
            offerText: 'Get 15% SuperCash @ Munafa Mart!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/munafa-mart_march.png`
        },
        {
            brandName: "Safal",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/safal_May.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ Safal ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/safal_march.png`
        },
        {
            brandName: "twentyfourseven",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/TFS_Apr.jpg`,
            offerText: 'Get 20% SuperCash @ TwentyFour Seven stores!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/24-seven_logo_march.png`
        }
    ]



} // state closing
    } // constructor closing


     prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.GroceryStoresItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.GroceryStoresItems.length - 4){
            this.setState({current_item: (this.state.GroceryStoresItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.GroceryStoresItems.length);
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
   
        this.state.GroceryStoresItems.unshift( this.state.GroceryStoresItems[this.state.GroceryStoresItems.length-1])
        this.state.GroceryStoresItems.unshift( this.state.GroceryStoresItems[this.state.GroceryStoresItems.length-2])
        this.state.GroceryStoresItems.push( this.state.GroceryStoresItems[2])
        this.state.GroceryStoresItems.push( this.state.GroceryStoresItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Grocery Stores </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/grocerystores'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.GroceryStoresItems.map( item =>(

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
