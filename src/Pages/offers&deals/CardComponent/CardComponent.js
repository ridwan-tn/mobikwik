import React from 'react';
import './Card.css';
export default function CardComponent({ brandName, imageUrl, offerText, brandimageUrl }) {
const cardClick = ( event )=>{
    event.preventDefault()
    console.log(
        
    );
}

	return (
		<div className=" col-4 col-sm-4  col-md-3 col-lg-3 mr">
			<a href=" " style={{ textDecoration: 'none', color: 'inherit' }} onClick={ cardClick }>
				<div className="card" onClick={ ( event )=> console.log( event.target)}>
					<div className="card-img">
						<img src={imageUrl} className="card-img-top" alt="..." />
					</div>
					<div className="card-body">
						<div className="card-caption">
							<h5 className="card-title">{brandName}</h5>
							<p className="card-text">{offerText}</p>
						</div>
						<div className="brand-logo">
							<img src={brandimageUrl} alt="" />
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
