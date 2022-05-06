import React from 'react';

function HotelSearchbar() {
	return (
		<div className="searchBar_container">
			<form>
				<div className="input_icons">
					<input id="search" type="search" placeholder="Going to" />
				</div>
				<div className="input_icons">
					<input id="date" type="date" />
				</div>
				<div className="input_icons">
					<input id="date" type="date" />
				</div>
				<div className="input_icons">
					<input id="text" type="text" placeholder="Rooms" />
				</div>
			</form>
		</div>
	);
}

export default HotelSearchbar;
