import Image from 'next/image';

// Iconify

const GuestReviews = ({ reviews }) => {
	return (
		<div className="guestReviewContainer">
			<div className="guestReviewContainer__title">
				<h3>Guest reviews of the area</h3>
			</div>

			<div className="guestReview__wrapper">
				{reviews.map(({ id, name, guestImg, reviewTitle, reviewText }) => {
					const guestImgLoader = ({ src }) => {
						return `${guestImg}?w=500&q=75`;
					};
					return (
						<div className="guestReview__card" key={id}>
							<div className="guestReview__top">
								<Image
									src={guestImg}
									alt={name}
									width={60}
									height={60}
									className="guestReview__img"
									loader={guestImgLoader}
									priority
								/>
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
