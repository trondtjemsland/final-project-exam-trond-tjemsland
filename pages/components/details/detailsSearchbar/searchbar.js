import React, { useState } from 'react';
import MessageModal from '../enquiriesmodal/enquiriesmodal';
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
					<button
						onClick={() => setIsOpen(true)}
						className="searchBarBtn_secondary">
						Contact us
					</button>
					{isOpen && <MessageModal setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
}

export default Searchbar;
