import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class NewUserOffers extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        NewUserOffersItems:
        [{
            brandName: "Ferns N Petals",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/FernsNPetals-Nov.jpg`,
            offerText: "New MobiKwik user offer: Get 20% cashback @ Ferns N Petals!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ferns-n-petals.png`
        },
        {
            brandName: "Zoomin",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/zoomin31jan.jpg`,
            offerText: "Get 10% Cashback @ Zoomin",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/zoomin31jan_logo.png`
        },
        {
            brandName: "Khelplay Rummy",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/khelplay-rummy.jpg`,
            offerText: "Flat Rs.50 Cashback @ Khelplay Rummy!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
        },
        {
            brandName: "Justickets",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Jus-ticket.jpg`,
            offerText: "Get 10% SuperCash @ on Mobikwik payments @ Justickets!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/khelplayrummy_logo.png`
        },
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.NewUserOffersItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.NewUserOffersItems.length - 4){
            this.setState({current_item: (this.state.NewUserOffersItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.NewUserOffersItems.length);
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
   if(this.state.NewUserOffersItems.length > 4){
        this.state.NewUserOffersItems.unshift( this.state.NewUserOffersItems[this.state.NewUserOffersItems.length-1])
        this.state.NewUserOffersItems.unshift( this.state.NewUserOffersItems[this.state.NewUserOffersItems.length-2])
        this.state.NewUserOffersItems.push( this.state.NewUserOffersItems[2])
        this.state.NewUserOffersItems.push( this.state.NewUserOffersItems[3])
   }
   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> New User Offers</h3>
                { this.state.NewUserOffersItems.length > 4? 
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/newuseroffer'> <button className="see-all-btn">See All </button></Link>
                </div>
        :""}
            </div>
            <SwipeableViews>
            <div className="card_container" style={{transform:"translate(0px)"}}  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.NewUserOffersItems.map( item =>(

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
