import React from 'react';
import Demo from '../../datepicker';
import HeroHeader from '../heroheader';

function HeroBanner() {
	return (
		<div className="heroImage">
			<HeroHeader />
			<div className="heroImage_textBox">
				<h1 className="heroImage_h1">Find your hotel here!</h1>
			</div>
			<div className="formContainer">
				<Demo />
			</div>
		</div>
	);
}

export default HeroBanner;
