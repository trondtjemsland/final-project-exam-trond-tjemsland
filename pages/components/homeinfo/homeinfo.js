import React from 'react';
import { Icon } from '@iconify/react';

function Homeinfo() {
	return (
		<div className="homeInfo_wrapper">
			<div className="homeInfo_heading">
				<h2>Why use Holidaze</h2>
			</div>
			<div className="homeInfo_iconBox">
				<div className="iconBox">
					<Icon icon="fluent:checkmark-starburst-16-filled" />
				</div>
				<div className="iconBox"></div>
				<div className="iconBox"></div>
				<div className="iconBox"></div>
				<div className="iconBox"></div>
				<div className="iconBox"></div>
			</div>
		</div>
	);
}

export default Homeinfo;
