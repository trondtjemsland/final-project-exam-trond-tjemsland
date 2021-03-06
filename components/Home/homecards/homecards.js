import React from 'react';
import Image from 'next/image';

function Homecards() {
	return (
		<div className="homeCardsWrapper">
			<div className="homeCards">
				<div className="homeCards_imgBox">
					<Image
						src="/img/portugal.jpg"
						height={280}
						width={430}
						layout="responsive"
						className="homeCards_img"
						alt="picture of the hotel in portugal"
						property="priority"
					/>
				</div>
				<div className="homeCards_textBox">
					<div className="homeCards_box1">
						<p className="homeCards_title">Cancun</p>
						<p className="homeCards_adresse">22 Jumpstreet, 750503, Mexico</p>
						<p className="homeCards_rating">4.5</p>
					</div>
					<div className="homeCards_box2">
						<p className="homeCards_price">
							$ 99<span>/day</span>
						</p>
						<button className="cardBtn">Order Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homecards;
