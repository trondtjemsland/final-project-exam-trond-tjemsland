import React from 'react';
import Image from 'next/image';

function Dazeclub() {
	return (
		<div className="club_wrapper">
			<div className="club_imgWrapper">
				<Image
					className="club_imageWrapper_img"
					src="/img/dazeclub.png"
					layout="fill"
					objectFit="cover"
					alt="Lady sunbathing on orange towel"
					priority
				/>
			</div>

			<div className="club_textBoxWrapper">
				<h2>Join our DazeClub</h2>
				<input placeholder="Enter your email..."></input>
				<div className="club_textBox">
					<div className="club_textBoxContainer">
						<div className="club_textBoxContainer_info">
							<p>Bonus Points</p>
							<span>Get bonuspoints to use later</span>
						</div>
						<div className="club_textBoxContainer_info">
							<p>Advantages</p>
							<span>Get advanteges every where you go.</span>
						</div>
						<p className="textBoxLink">Learn more +</p>
					</div>
					<div className="club_btnBox">
						<button className="club_btn">Join Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dazeclub;
