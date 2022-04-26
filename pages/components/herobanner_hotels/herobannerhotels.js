import React from 'react';
import Image from 'next/image';

function Herobannerhotels() {
	return (
		<div className="heroBanner_wrapper">
			<Image
				height={300}
				width={1440}
				layout="responsive"
				className="heroBanner_img"
				src="/img/hotelsBanner2.png"
				alt="Poolside picture of one the hotels"
			/>
		</div>
	);
}

export default Herobannerhotels;
