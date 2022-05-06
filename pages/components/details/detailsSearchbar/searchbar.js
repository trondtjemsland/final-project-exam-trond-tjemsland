import React from 'react';

function Searchbar() {
	return (
		<div className="searchBarDetails_wrapper">
			<div className="searchBarDetails_container">
				<form>
					<div className="input_icons">
						<input id="date" type="date" />
					</div>
					<div className="input_icons">
						<input id="date" type="date" />
					</div>
					<div className="input_icons">
						<input id="text" type="text" placeholder="Rooms" />
					</div>
					<button className="searchBarBtn_primary">Book Now</button>
					<button className="searchBarBtn_secondary">Contact us</button>
				</form>
			</div>
		</div>
	);
}

export default Searchbar;
