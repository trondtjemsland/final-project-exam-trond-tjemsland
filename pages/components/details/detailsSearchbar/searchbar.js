import React, { useState } from 'react';
import MessageModal from '../enquiriesmodal/enquiriesmodal';
import Modal from '../popupmodal/popupmodal';

function Searchbar({ hotels }) {
	const [isOpen, setIsOpen] = useState(false);
	const [modalOpen, setmodalOpen] = useState(false);

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
					{isOpen && <Modal hotels={hotels} setIsOpen={setIsOpen} />}
					<button
						onClick={() => setmodalOpen(true)}
						className="searchBarBtn_secondary">
						Contact us
					</button>
					{modalOpen && <MessageModal setIsOpen={setmodalOpen} />}
				</div>
			</div>
		</div>
	);
}

export default Searchbar;
