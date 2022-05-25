import React from 'react';
import Image from 'next/image';

function Activities() {
	return (
		<div className="activities_Wrapper">
			<div className="activities_box1">
				<Image
					src={'/img/jetski.png'}
					height={500}
					width={430}
					alt="Action image of watersport atctivity with jetski"
				/>
				<div className="activities_textBox">
					<p>Activities</p>
				</div>
			</div>

			<div className="activities_box3">
				<Image
					src={'/img/market.png'}
					height={500}
					width={430}
					alt="The market in Marrakech"
				/>
				<div className="activities_textBox">
					<p>Activities</p>
				</div>
			</div>
			<div className="activities_box2">
				<div className="activities_middleBox">
					<Image
						src={'/img/aztec.png'}
						height={240}
						width={350}
						alt="Visit the Aztec pyramids"
					/>
					<div className="activities_textBox">
						<p>Activities</p>
					</div>
				</div>
				<div className="activities_middleBox">
					<Image
						src={'/img/streetfood.png'}
						height={240}
						width={350}
						alt="Image of the streetfood market in Barcelona"
					/>
					<div className="activities_textBox">
						<p>Activities</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Activities;
