import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Entertainment extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    FoodItems:
        [{
            brandName: "ZEE5",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/radheopaque.jpg`,
            offerText: 'Flat Rs.50 Cashback @ Zee5!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/logoradhe.png`
        },
         {
            brandName: "Justickets",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Jus-ticket.jpg`,
            offerText: 'Get 10% SuperCash @ on Mobikwik payments @ Justickets!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/1justtickets0wo.png`

        },
        {
            brandName: "ALTBalaji",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/altbalaji-1.jpg`,
            offerText: 'Get 20% SuperCash @ Altbalaji!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/altbal17jun19logo.png`
        },
        {
            brandName: "PVR",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/pvr27sept.jpg`,
            offerText: 'Flat 10% Cashback @ PVR!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/pvr27sept_logo.png`
        },
        {
            brandName: "Playo",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Playo.jpg`,
            offerText: 'Get up to Rs.1000 SuperCash @ Playo!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/playo-logo.png`
        },
        {
            brandName: "Hungama",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/HungamaAug.jpg`,
            offerText: 'Use SuperCash to get up to Rs.1000 discount @ Hungama!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hungama-logo-png-1.png`
        },
        {
            brandName: "Smaaash",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Smaaash.jpg`,
            offerText: 'Get 15% SuperCash @ Smaaash!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/smaaash_logo.png`
        },
        {
            brandName: "HoiChoi Entertainment",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Hoihoitv.jpg`,
            offerText: 'Use SuperCash to get up to Rs. 1000 discount @ HoiChoi Entertainments!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/hoihoitv_logo.png`
        },
        {
            brandName: "BFL_B2C_BajajFinserv_Call_For_Personal_Loan",
            imageUrl:`https://static.mobikwik.com/views/images/ui/offer_logos/msdcall_logo.png`,
            offerText: 'Personal Loan a call away',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/msdcall_logo.png`
        }
       
       
    ]}
    }


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.FoodItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.FoodItems.length - 4){
            this.setState({current_item: (this.state.FoodItems.length - this.state.current_item )},()=>{
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
   
    this.state.FoodItems.unshift( this.state.FoodItems[this.state.FoodItems.length-3])
    this.state.FoodItems.unshift( this.state.FoodItems[this.state.FoodItems.length-4])
    this.state.FoodItems.push( this.state.FoodItems[5])
    this.state.FoodItems.push( this.state.FoodItems[6])

}

    render(){
    return (
        <div className="row  ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Entertainment </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/entertainment'> <button className="see-all-btn">See All </button> </Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.FoodItems.map( item =>(

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
