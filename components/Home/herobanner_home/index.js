import React from 'react';
import { NavbarHero } from '../heroheader';

function HeroBanner() {
	return (
		<div className="heroImage">
			<NavbarHero />
			<div className="heroImage_textBox">
				<h1 className="heroImage_h1">Find your hotel here!</h1>
			</div>
		</div>
	);
}

export default HeroBanner;
