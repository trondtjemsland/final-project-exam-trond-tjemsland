import React, { useState } from 'react';
import Modal from '../popupmodal/popupmodal';

function Searchbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="searchBarDetails_wrapper">
			<div className="detailsFormContainer">
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
					<button
						className="searchBarBtn_primary"
						onClick={() => setIsOpen(true)}>
						Book Now
					</button>
					{isOpen && <Modal setIsOpen={setIsOpen} />}
					<button className="searchBarBtn_secondary">Contact us</button>
				</div>
			</div>
		</div>
	);
}

export default Searchbar;
