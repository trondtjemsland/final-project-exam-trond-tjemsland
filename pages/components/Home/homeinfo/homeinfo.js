import React from 'react';
import { Icon } from '@iconify/react';

function Homeinfo() {
	return (
		<div className="homeInfo_wrapper">
			<div className="homeInfo_heading">
				<h2>Why use Holidaze</h2>
			</div>
			<div className="homeInfo_iconContainer">
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon
							className="iconBox_icon"
							icon="fluent:checkmark-starburst-16-filled"
						/>
					</div>
					<div>
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon className="iconBox_icon" icon="fa-solid:headset" />
					</div>
					<div>
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon className="iconBox_icon" icon="fa-regular:moon" />
					</div>
					<div>
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
			</div>
			<div className="homeInfo_iconContainer">
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon className="iconBox_icon" icon="fa-brands:cc-visa" />
					</div>
					<div>
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon className="iconBox_icon" icon="fa-solid:percent" />
					</div>
					<div>
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
				<div className="iconBox_wrapper">
					<div className="iconBox">
						<Icon className="iconBox_icon" icon="fa-solid:car" />
					</div>
					<div className="iconBox_textBox">
						<p className="iconBox_heading">Price Match</p>
						<p className="iconBox_link">Learn More {'>'}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homeinfo;
