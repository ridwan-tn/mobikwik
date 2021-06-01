import React  from 'react'
import { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Travel extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    UPIItems:
        [{
            brandName: "Amazon",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Amazon14.jpg`,
            offerText: 'Get 10% SuperCash on amazon.in using MobiKwik UPI!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/amazonupi12july_logo.png `
        },
        {
            brandName: "Add money offer",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/upicashback.jpg`,
            offerText: 'Get 1% SuperCash on addmoney via UPI!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gullak_logo.png`
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.UPIItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.UPIItems.length - 4){
            this.setState({current_item: (this.state.UPIItems.length - this.state.current_item )},()=>{
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
   
        this.state.UPIItems.unshift( this.state.UPIItems[this.state.UPIItems.length-3])
        this.state.UPIItems.unshift( this.state.UPIItems[this.state.UPIItems.length-4])
        this.state.UPIItems.push( this.state.UPIItems[5])
        this.state.UPIItems.push( this.state.UPIItems[6])

   }
    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Travel </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <button className="see-all-btn">See All </button>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.UPIItems.map( item =>(

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
