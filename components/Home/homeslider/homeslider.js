import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 3 },
};

export default function Carousel({ FeaturedHotelCards }) {
	console.log(FeaturedHotelCards);
	// const items = [
	// 	<div className="item" data-value="1">
	// 		1
	// 	</div>,
	// 	<div className="item" data-value="2">
	// 		2
	// 	</div>,
	// 	<div className="item" data-value="3">
	// 		3
	// 	</div>,
	// ];

	const sliderItems = FeaturedHotelCards.map(
		({ title, adress, imgAlt, imageUrl, isFeatured, price, id }) => {
			if (isFeatured) {
				const myLoader = ({ src }) => {
					return imageUrl;
				};
				return (
					<div key={id} className="item" data-value="1">
						<div className="hotelCardSlider">
							<Image
								className="hotelCardSlider_img"
								loader={myLoader}
								src={imageUrl}
								alt={imgAlt}
								width={480}
								height={290}
								layout="responsive"
								priority
							/>
							<div className="hotelCardSlider_textBox">
								<div className="hotelCard_box1">
									<h3 className="hotelCardSlider_title">{title}</h3>
									<p className="hotelCardSlider_adress">{adress}</p>
									<div className="hotelCardSlider_rating">
										<p>4.5</p>
										<Icon className="ratingIcon" icon="fa-solid:star" />
									</div>
								</div>
								<div className="hotelCardSlider_box2">
									<p className="hotelCardSlider_price">
										${price}
										<span>/day</span>
									</p>
									<Link href={`/${id}`}>
										<a>
											<button className="cardBtn">Order Now</button>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			} else {
				return '';
			}
		}
	);

	const newItems = sliderItems.slice(0, 3);

	return (
		<AliceCarousel
			mouseTracking
			items={newItems}
			responsive={responsive}
			controlsStrategy="alternate"
		/>
	);
}
