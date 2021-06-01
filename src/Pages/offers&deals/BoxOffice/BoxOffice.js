import React  from 'react'
import { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class BoxOffice  extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        BoxOfficeItems:
        [{
            brandName: "cinepolis",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Cinepolis31jan.jpg`,
            offerText: "Get 25% SuperCash @ Cinepolis!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/cinepolis_logo.png`
        },
        {
            brandName: "Carnival Cinemas",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Carnival.jpg`,
            offerText: "Get 15% SuperCash @ Carnival Cinemas!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/carvinal_logo.png`
        },
        {
            brandName: "Mukta A2 Cinemas",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Mukta.jpg`,
            offerText: "Special Offer: Get 10% upto Rs.50 cashback on your 1st transaction of the Month @",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
        },
        {
            brandName: "Movie Time",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/MT.jpg`,
            offerText: "Get 15% SuperCash @ Movietime!",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mukta_logo.png`
        },
        
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.BoxOfficeItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.BoxOfficeItems.length - 4){
            this.setState({current_item: (this.state.BoxOfficeItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.BoxOfficeItems.length);
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
   if(this.state.BoxOfficeItems.length > 4){
        this.state.BoxOfficeItems.unshift( this.state.BoxOfficeItems[this.state.BoxOfficeItems.length-1])
        this.state.BoxOfficeItems.unshift( this.state.BoxOfficeItems[this.state.BoxOfficeItems.length-2])
        this.state.BoxOfficeItems.push( this.state.BoxOfficeItems[2])
        this.state.BoxOfficeItems.push( this.state.BoxOfficeItems[3])
   }
   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> BoxOffice </h3>
                { this.state.BoxOfficeItems.length > 4? 
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <button className="see-all-btn">See All </button>
                </div>
        :""}
            </div>
            <SwipeableViews>
            <div className="card_container" style={{transform:"translate(0px)"}}  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.BoxOfficeItems.map( item =>(

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
