import React from 'react';
import Image from 'next/image';

function Herobannerhotels() {
	return (
		<div className="heroBanner_wrapper">
			<Image
				className="heroBanner_img"
				src="/img/hotelsBanner.jpg"
				layout="fill"
				alt="Poolside picture of one the hotels"
			/>
		</div>
	);
}

export default Herobannerhotels;
