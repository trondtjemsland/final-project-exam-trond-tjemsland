import React from 'react';
import Image from 'next/image';

function Activities() {
	return (
		<div className="activities_Wrapper">
			<div className="activities_box1">
				<Image src={'/img/jetski.png'} height={500} width={430} />
				<div className="activities_textBox">
					<p>Activities</p>
				</div>
			</div>
			<div className="activities_box2">
				<div className="activities_middleBox">
					<Image src={'/img/aztec.png'} height={240} width={350} />
					<div className="activities_textBox">
						<p>Activities</p>
					</div>
				</div>
				<div className="activities_middleBox">
					<Image src={'/img/streetfood.png'} height={240} width={350} />
					<div className="activities_textBox">
						<p>Activities</p>
					</div>
				</div>
			</div>
			<div className="activities_box3">
				<Image src={'/img/market.png'} height={500} width={430} />
				<div className="activities_textBox">
					<p>Activities</p>
				</div>
			</div>
		</div>
	);
}

export default Activities;
