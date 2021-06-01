import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class GamingComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        GamingComponentItems:
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
}
    }




    render(){
    return (
        <div className="row row-component">
            <h1 className="component-heading"> Gaming </h1>
        <div className="col-12">
        <div className="row cards-items">
            {this.state.GamingComponentItems.map( item =>(
                <div className="col-4 mb-4 width200" style={{padding:0,width: "327px"}}>
                <CardComponent  
                 brandName = {item.brandName}
                 imageUrl = {item.imageUrl}
                 offerText = {item.offerText}
                 brandimageUrl = {item.brandimageUrl} 
                 />
        </div>
            ))}
            </div>
            </div>
            </div>
    )
}
}
