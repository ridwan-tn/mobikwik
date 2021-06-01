import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class FirstPeCashback extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    FirstPeCashbackItems:
        [{
            brandName: "Reliance Fresh & Smart",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/RelianceFrsh.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Reliance SMART',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fresh-logo-march.png    `
        },
        {
            brandName: "Metro Cash and Carry",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/metro-wholesale.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback twice every month @ Metro Cash & Carry',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/metrocnclogo.png`
        },
        {
            brandName: "Spencer's",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/spencer.jpg`,
            offerText: 'Special Offer: Get Flat Rs.50 cashback twice every month @ Spencer',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spencers-logo-march.png`

        },
        {
            brandName: "VishalMegaMart",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Vishal-mega-mart.jpg`,
            offerText: 'Special Offer: Get Flat Rs.100 cashback on your 1st transaction of the Month @ ',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vishal-logo-march.png`
        },
        {
            brandName: "Jio Stores",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/jiostores.jpg`,
            offerText: 'Use 10% SuperCash @ Oliva Skin & Hair Clinic!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/jio-logo-march.png`
        },
        {
            brandName: "Reliance Digital",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/digital.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/reliance-digital-march.png`
        },
        {
            brandName: "croma",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Croma.jpg`,
            offerText: 'Special Offer: Get Flat Rs.250 cashback on your 1st transaction of the Month @ Croma Stores',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/croma-logo_march.png`
        },
        {
            brandName: "Woodland",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/woodland.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.200 cashback on your 1st transaction of the Month @ Woodland',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/woodland_march.png`
        },
        {
            brandName: "Relaxo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Relaxo1.jpg`,
            offerText: 'Special Offer: Get 10% upto Rs.100 cashback on your 1st transaction of the Month @ Relaxo',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/relaxo_march.png`
        }
       
       
    ]}
    }


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.FirstPeCashbackItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.FirstPeCashbackItems.length - 4){
            this.setState({current_item: (this.state.FirstPeCashbackItems.length - this.state.current_item )},()=>{
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
   
    this.state.FirstPeCashbackItems.unshift( this.state.FirstPeCashbackItems[this.state.FirstPeCashbackItems.length-3])
    this.state.FirstPeCashbackItems.unshift( this.state.FirstPeCashbackItems[this.state.FirstPeCashbackItems.length-4])
    this.state.FirstPeCashbackItems.push( this.state.FirstPeCashbackItems[5])
    this.state.FirstPeCashbackItems.push( this.state.FirstPeCashbackItems[6])

}

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> First Pe Cashback</h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/firstpecashback'><button className="see-all-btn">See All </button> </Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.FirstPeCashbackItems.map( item =>(

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
