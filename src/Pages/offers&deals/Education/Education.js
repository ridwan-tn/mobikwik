import React  from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views'
import CardComponent from '../CardComponent/CardComponent'
export default  class Education extends Component {
    constructor(props){
        super(props)
    this.state ={
        current_item:2,
        clicked: false,
        EducationItems:
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



} // state closing
    } // constructor closing


    prevBtn = ()=>{

        if(this.state.current_item === 0){
            this.setState({current_item:  this.state.EducationItems.length - 5},()=>{
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
        if(this.state.current_item === this.state.EducationItems.length - 4){
            this.setState({current_item: (this.state.EducationItems.length - this.state.current_item )-3},()=>{
                this.carousel_container.style.transition = 'none'
                this.carousel_container.style.transform = `translate(${-325  * this.state.current_item}px)`
               console.log(this.state.EducationItems.length);
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
   if(this.state.EducationItems.length > 4){
        this.state.EducationItems.unshift( this.state.EducationItems[this.state.EducationItems.length-1])
        this.state.EducationItems.unshift( this.state.EducationItems[this.state.EducationItems.length-2])
        this.state.EducationItems.push( this.state.EducationItems[2])
        this.state.EducationItems.push( this.state.EducationItems[3])
   }
   }

    render(){
    return (
        <div className="row ms-3 carousel_container">
            <div className="col-12 "  style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="component-heading"> Education</h3>
                { this.state.EducationItems.length > 4? 
                <div className="buttons">
                    <button className="prev-btn" onClick={this.prevBtn}> </button>
                    <button className="next-btn" onClick={this.nextbtn}> </button>
                    <Link to='/offers/education'> <button className="see-all-btn">See All </button></Link>
                </div>
        :""}
            </div>
            <SwipeableViews>
            <div className="card_container"   ref={ ref_id => this.carousel_container = ref_id}>
            {this.state.EducationItems.map( item =>(

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
