import React from 'react';
import Image from 'next/image';

function Herobannerhotels() {
	return (
		<div className="heroBanner_wrapper">
			<Image
				priority
				height={400}
				width={1440}
				layout="responsive"
				src="/img/hotelsBanner2.png"
				alt="Poolside picture of one the hotels"
			/>
		</div>
	);
}

export default Herobannerhotels;
