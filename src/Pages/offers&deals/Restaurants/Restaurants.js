import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Restaurents extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        RestaurentsItems:
        [{
            brandName: "Cafe Coffee Day",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/ccd.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction in of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ccd_march.png`
        },
        {
            brandName: "Barista",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Barista.jpg`,
            offerText: "Earn 15% SuperCash @ Barista outlets!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/barista_logo.png`
        },
        {
            brandName: "Chaayos",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/chaayoss.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback on your 1st transaction of the Month @ Chaayos',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/chaayos_march.png`

        },
        {
            brandName: "Bikanervala",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Bikaner.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/bikanerwala_march.png`
        },
        {
            brandName: "Havmor",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/IndiGo-2020.jpg`,
            offerText: 'Get 20% SuperCash on paying with MobiKwik wallet @ Havmor',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/havmor_logo.png.png`
        },
        {
            brandName: "Gelato Italiano",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/gelato.jpg`,
            offerText: 'Get 100% SuperCash on your first transaction via MobiKwik @ Gelato',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gelatologo.png`
        },
        {
            brandName: "Costa Coffee",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Costalisting.jpg`,
            offerText: 'Earn 20% SuperCash @ Costa Coffee outlets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/costalisting_logo.png`
        },
        {
            brandName: "Pizza Hut",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Pizzahut.jpg`,
            offerText: 'Regular offer-Earn 20% SuperCash @ Pizza Hut outlets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pizzahut_logo.png`
        },
        {
            brandName: "The Coffee Bean and Tea Leaf",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/cbtlnew.jpg`,
            offerText: 'Get 25% SuperCash @ The Coffee Bean and Tea Leaf',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cbtlnewlogo.png`
        },

    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.RestaurentsItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.RestaurentsItems.length - 4){
            this.setState({current_item: (this.state.RestaurentsItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.RestaurentsItems.length);
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
   
        this.state.RestaurentsItems.unshift( this.state.RestaurentsItems[this.state.RestaurentsItems.length-1])
        this.state.RestaurentsItems.unshift( this.state.RestaurentsItems[this.state.RestaurentsItems.length-2])
        this.state.RestaurentsItems.push( this.state.RestaurentsItems[2])
        this.state.RestaurentsItems.push( this.state.RestaurentsItems[3])

   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Restaurents </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/restaurants'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.RestaurentsItems.map( item =>(

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
