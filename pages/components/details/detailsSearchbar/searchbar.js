import React, { useState } from 'react';
import MessageModal from '../enquiriesmodal/enquiriesmodal';
import Modal from '../popupmodal/popupmodal';

function Searchbar({ hotels }) {
	const [isOpen, setIsOpen] = useState(false);
	const [modalOpen, setmodalOpen] = useState(false);

	// let defaultDate = new Date();
	// defaultDate.setDate(defaultDate.getDate());

	const [date, setDate] = useState();

	const onSetDate = (event) => {
		setDate(new Date(event.target.value));
	};

	return (
		<div className="searchBarDetails_wrapper">
			<div className="detailsFormContainer">
				<div className="detailsInput">
					<input
						id="date"
						type="date"
						// value={date.toLocaleDateString('en-CA')}
						onChange={(e) => {
							console.log(e.target.value);
							setDate(e.target.value);
						}}
					/>
				</div>
				<div className="detailsInput">
					<input
						id="date"
						type="date"
						// value={date.toLocaleDateString('en-CA')}
						onChange={(e) => {
							console.log(e.target.value);
							setDate(e.target.value);
						}}
					/>
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
					{isOpen && (
						<Modal date={date} hotels={hotels} setIsOpen={setIsOpen} />
					)}
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
