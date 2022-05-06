import React from 'react';
import { Icon } from '@iconify/react';

function Amenities() {
	return (
		<div className="amenities_wrapper">
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:paw" />
				<p>Pet Friendly</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:parking" />
				<p>Free Parking</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:snowflake" />
				<p>Aircon</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:wifi" />
				<p>Free Wifi</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:smoking-ban" />
				<p>No Smoking</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="ic:twotone-restaurant-menu" />
				<p>Food</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:spa" />
				<p>Wellness</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="fa-solid:wheelchair" />
				<p>Accessibility</p>
			</div>
			<div className="amenities">
				<Icon className="amenities_icon" icon="maki:fitness-centre" />
				<p>Fitness</p>
			</div>
		</div>
	);
}

export default Amenities;
