import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function HotelCards({
	imageUrl,
	title,
	price,
	adress,
	id,
	imgAlt,
	isFeatured,
}) {
	const myLoader = ({ src }) => {
		return `${imageUrl}?w=500&q=75`;
	};

	return (
		<>
			<div className="hotelCard">
				<Image
					className="hotelCard_img"
					loader={myLoader}
					src={imageUrl}
					alt={imgAlt}
					width={430}
					height={290}
					layout="responsive"
					priority
				/>
				<div className="hotelCard_textBox">
					<div className="hotelCard_box1">
						<h3 className="hotelCard_title">{title}</h3>
						<p className="hotelCard_adress">{adress}</p>
						<div className="hotelCard_rating">
							<p>4.5</p>
							<Icon className="ratingIcon" icon="fa-solid:star" />
						</div>
					</div>
					<div className="hotelCard_box2">
						<p className="hotelCard_price">
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
		</>
	);
}

export default HotelCards;
