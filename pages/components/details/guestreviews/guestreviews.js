import { useState, useEffect } from 'react';

// Iconify

const GuestReviews = ({ reviews }) => {
	console.log(reviews);
	return (
		<div className="guestReviewContainer">
			<div className="guestReviewContainer__title">
				<h3>Guest reviews of the area</h3>
			</div>

			<div className="guestReview__wrapper">
				{reviews.map(({ id, name, guestImage, reviewTitle, reviewText }) => {
					return (
						<div className="guestReview__card" key={id}>
							<div className="guestReview__top">
								<img src={guestImage} alt={name} className="guestReview__img" />
								<div>
									<p>{name}</p>
									<h4 className="guestReview__title">{reviewTitle}</h4>
								</div>
							</div>
							<div className="guestReview__textBox">
								<p className="guestReview__text">{reviewText}</p>
								<p className="guestReview__moreReviews">88+ guests reveiws</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GuestReviews;