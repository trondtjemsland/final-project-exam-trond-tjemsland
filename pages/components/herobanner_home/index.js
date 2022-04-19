import React from 'react';

import Header from '../header';

function HeroBanner() {
	return (
		<div className="heroImage">
			<Header />
			<div className="heroImage_textBox">
				<h1 className="heroImage_h1">Find your hotel here</h1>
			</div>
			<div className="formContainer"></div>
		</div>
	);
}

export default HeroBanner;
