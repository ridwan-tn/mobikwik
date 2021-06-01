import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Gaming extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
    GamingCardItems:
        [{
            brandName: "Dream11",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Dream-11.jpg`,
            offerText: 'Get up to Rs.100 Cashback @ Dream11!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/dream-11.png`
        },
        {
            brandName: "MyFab11",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/21augmyfadb11logojpg.jpg`,
            offerText: 'Get flat Rs.25 Cashback @ MyFab11!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/21augmyfab11logo.png`
        },
        {
            brandName: "ace2three",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Ace2threeNew20.jpg`,
            offerText: 'Get up to Rs.100 cashback @ ace2three!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/ace2three_logo.png`

        },
        {
            brandName: "Fanfight",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Fanfight.jpg`,
            offerText: 'Get up to Rs.100 Cashback @ Fanfight!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/fanfight_logo.png`
        },
        {
            brandName: "Gamezy",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/Gamezy.jpg`,
            offerText: 'Get up to Rs.100 Cashback @ Gamezy!',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/gamezy_logo.png`
        },
        {
            brandName: "11Wickets",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/11Wickets.jpg`,
            offerText: 'Get up to Rs.100 Cashback @ 11Wickets',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/11-wickets-logo.png`
        },
        {
            brandName: "MyTeam11",
            imageUrl:`https://static8.mobikwik.com/views/images/ui/offer_images/myteam.jpg`,
            offerText: 'Get up to Rs.100 Cashback @ MyTeam11',
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/myteam_logo.png`
        },
        {
            brandName: "Silk Rummy",
            imageUrl:`http://static8.mobikwik.com/views/images/ui/offer_images/silk-rummy.jpg`,
            offerText: 'Get Rs.2000* cashback  bonus & use SuperCash to get up to Rs.1000 ',
            brandimageUrl: `http://static.mobikwik.com/views/images/ui/offer_logos/silkrummy-logo.png`
        }
    ]



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.GamingCardItems.length - 7},()=>{
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
        if(this.state.current_item === this.state.GamingCardItems.length - 4){
            this.setState({current_item: (this.state.GamingCardItems.length - this.state.current_item )},()=>{
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
   
    this.state.GamingCardItems.unshift( this.state.GamingCardItems[this.state.GamingCardItems.length-3])
    this.state.GamingCardItems.unshift( this.state.GamingCardItems[this.state.GamingCardItems.length-4])
    this.state.GamingCardItems.push( this.state.GamingCardItems[5])
    this.state.GamingCardItems.push( this.state.GamingCardItems[6])

}

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Gaming </h3>
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/gaming'> <button className="see-all-btn">See All </button></Link>
                </div>
            </div>
            <SwipeableViews>
            <div className="card_container"  ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.GamingCardItems.map( item =>(

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
