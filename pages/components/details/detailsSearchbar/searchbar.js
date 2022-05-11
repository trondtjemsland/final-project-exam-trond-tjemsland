import React from 'react';

function Searchbar() {
	return (
		<div className="searchBarDetails_wrapper">
			<form className="detailsFormContainer">
				<div className="detailsInput">
					<input id="date" type="date" />
				</div>
				<div className="detailsInput">
					<input id="date" type="date" />
				</div>
				<div className="detailsInput">
					<input id="text" type="text" placeholder="Rooms" />
				</div>
				<div className="buttonFormContainer">
					<button className="searchBarBtn_primary">Book Now</button>
					<button className="searchBarBtn_secondary">Contact us</button>
				</div>
			</form>
		</div>
	);
}

export default Searchbar;
