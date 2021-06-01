import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import CardComponent from '../CardComponent/CardComponent';
export default class CashbackOnBackpack extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current_item: 2,
			clicked: false,
			CashbackOnBackpackItems: [
				{
					brandName: 'SpiceJet',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/spicejet.jpg`,
					offerText: 'Save Rs.500 on SpiceJet!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/spicejet_logo.png`,
				},
				{
					brandName: 'OYO',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/oyo-jan.jpg`,
					offerText: 'Get flat Rs.75 Cashback + 40% off @ OYO!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/oyo-jan-logo.png`,
				},
				{
					brandName: 'MyBusTickets',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/mybustickets.jpg`,
					offerText: 'Save upto Rs.200 on MyBusTickets!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/mbt_logo.png`,
				},
				{
					brandName: 'MakeMyTrip',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Make-My-Trip.jpg`,
					offerText: 'Save flat Rs.700 on MakeMyTrip!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/toppr13_logo.png`,
				},
				{
					brandName: 'Yatra',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Yatrajan.jpg`,
					offerText: 'BSave flat Rs.600 on Yatra!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/yatralogojan.png`,
				},
				{
					brandName: 'Akbar Travels',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Akbartravellisting.jpg`,
					offerText: 'Save Flat Rs.500 on Akbar Travels!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/akbartravellisting_logo.png`,
				},
				{
					brandName: 'DriveU',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/Driveu31jan.jpg`,
					offerText: 'Get Flat Rs.50 Cashback @ DriveU!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/driveu31jan_logo.png`,
				},
				{
					brandName: 'Blusmart',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/blusmart1.jpg`,
					offerText: 'Get upto Rs.100 Cashback on Blusmart!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/blusmartlogo1.png`,
				},
				{
					brandName: 'EaseMyTrip',
					imageUrl: `https://static8.mobikwik.com/views/images/ui/offer_images/EMTOct1.jpg`,
					offerText: 'Get flat Rs.100 Cashback + Rs.600 discount on EaseMyTrip!',
					brandimageUrl: `https://static.mobikwik.com/views/images/ui/offer_logos/easytrip_logo.png`,
				},
			],
		}; // state closing
	} // constructor closing

	prevBtn = () => {
		if (this.state.current_item === 0) {
			this.setState({ current_item: this.state.CashbackOnBackpackItems.length - 5 }, () => {
				this.carousel_container.style.transition = 'none';
				this.carousel_container.style.transform = `translate(${-325 * this.state.current_item}px)`;
			});
		} else {
			this.setState({ current_item: this.state.current_item - 1 }, () => {
				this.carousel_container.style.transition = 'ease';
				this.carousel_container.style.transitionDuration = '0.5s';
				this.carousel_container.style.transform = `translate(${-325 * this.state.current_item}px)`;
				console.log(this.state.current_item);
			});
		}
	};

	nextbtn = () => {
		if (this.state.current_item === this.state.CashbackOnBackpackItems.length - 4) {
			this.setState(
				{ current_item: this.state.CashbackOnBackpackItems.length - this.state.current_item - 3 },
				() => {
					this.carousel_container.style.transition = 'none';
					this.carousel_container.style.transform = `translate(${-325 * this.state.current_item}px)`;
					console.log(this.state.CashbackOnBackpackItems.length);
					console.log(this.state.current_item);
				}
			);
		} else {
			this.setState({ current_item: this.state.current_item + 1 }, () => {
				this.carousel_container.style.transition = 'ease';
				this.carousel_container.style.transitionDuration = '0.5s';
				this.carousel_container.style.transform = `translate(${-325 * this.state.current_item}px)`;
				console.log(this.state.current_item);
			});
		}
	};

	componentWillMount() {
		if (this.state.CashbackOnBackpackItems.length > 4) {
			this.state.CashbackOnBackpackItems.unshift(
				this.state.CashbackOnBackpackItems[this.state.CashbackOnBackpackItems.length - 1]
			);
			this.state.CashbackOnBackpackItems.unshift(
				this.state.CashbackOnBackpackItems[this.state.CashbackOnBackpackItems.length - 2]
			);
			this.state.CashbackOnBackpackItems.push(this.state.CashbackOnBackpackItems[2]);
			this.state.CashbackOnBackpackItems.push(this.state.CashbackOnBackpackItems[3]);
		}
	}

	render() {
		return (
			<div className="row ms-3 carousel_container">
				<div className="col-12 " style={{ display: 'flex', justifyContent: 'space-between' }}>
					<h3 className="component-heading"> CashbackOnBackpack </h3>
					{this.state.CashbackOnBackpackItems.length > 4 ? (
						<div className="buttons">
							<button className="prev-btn" onClick={this.prevBtn}>
								{' '}
							</button>
							<button className="next-btn" onClick={this.nextbtn}>
								{' '}
							</button>
							<Link to="/offers/cashOnBackpack">
								{' '}
								<button className="see-all-btn">See All </button>
							</Link>
						</div>
					) : (
						''
					)}
				</div>
				<SwipeableViews>
					<div className="card_container" ref={(ref_id) => (this.carousel_container = ref_id)}>
						{this.state.CashbackOnBackpackItems.map((item) => (
							<CardComponent
								brandName={item.brandName}
								imageUrl={item.imageUrl}
								offerText={item.offerText}
								brandimageUrl={item.brandimageUrl}
							/>
						))}
					</div>
				</SwipeableViews>
			</div>
		);
	}
}
