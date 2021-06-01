import React  from 'react'
import { Component } from 'react'
import CardComponent from '../CardComponent/CardComponent'
export default  class EducationComponent extends Component {
    constructor(props){
        super(props)
    this.state ={
        EducationComponentItems:
        [{
            brandName: "BFL_ARU_LSF_Byju's_22022021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/byjfb.jpg`,
            offerText: "No Cost EMI at Byju's",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/byjus_logo.png`
        },
        {
            brandName: "BFL_ARU_LSF_Aakash_13042021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/eduaakah.jpg`,
            offerText: "Best education at Aakash",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akasshhhh_logo.png`
        },
        {
            brandName: "BFL_ARU_LSF_Allen_13042021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Alenc.jpg`,
            offerText: "Best education at Allen",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/allen26feb._logo.png`
        },
        {
            brandName: "BFL_ARU_LSF_Toppr_02042021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/oppr15jan21.jpg`,
            offerText: "Best K-12 learning at Toppr",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/toppr13_logo.png`
        },
        {
            brandName: "BFL_ARU_LSF_Extramarks_02042021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/ecommarwex.jpg`,
            offerText: "Best K-12 learning at Extramarks",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/extramarks24mar_logo.png`
        },
        {
            brandName: "BFL_ARU_LSF_ Vedantu_17032021",
            imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Vedan.jpg`,
            offerText: "Courses on No Cost EMIs",
            brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/vedantusep_logo.png`
        },
    ]
}
    }




    render(){
    return (
        <div className="row  ">
            <h1 className="component-heading"> Education </h1>
        <div className="col-12">
        <div className="row">
            {this.state.EducationComponentItems.map( item =>(
                <div className="col-4 mb-4" style={{padding:0,width: "327px"}}>
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
