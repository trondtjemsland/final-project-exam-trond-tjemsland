import React, { useState } from 'react';
import MessageModal from '../enquiriesmodal/enquiriesmodal';
import Modal from '../popupmodal/popupmodal';
import { Icon } from '@iconify/react';

function Searchbar({ hotels }) {
	const [isOpen, setIsOpen] = useState(false);
	const [modalOpen, setmodalOpen] = useState(false);

	const options = [
		{ label: '1', id: 1 },
		{ label: '2', id: 2 },
		{ label: '3', id: 3 },
		{ label: '4', id: 4 },
		{ label: '5', id: 5 },
		{ label: '6', id: 6 },
	];

	const handleChangeRooms = (e) => {
		setRoomValue(e.target.roomValue);
	};

	const [roomValue, setRoomValue] = useState();
	const [dateOne, setDateOne] = useState();
	const [dateTwo, setDateTwo] = useState();

	const onSetDate = (event) => {
		setDateOne(new Date(event.target.value));
		setDateTwo(new Date(event.target.value));
	};

	return (
		<div className="searchBarDetails_wrapper">
			<div className="detailsFormContainer">
				<div className="detailsInput">
					<input
						id="date"
						type="date"
						onChange={(e) => {
							console.log(e.target.value);
							setDateOne(e.target.value);
						}}
					/>
				</div>
				<div className="detailsInput">
					<input
						id="date"
						type="date"
						onChange={(e) => {
							console.log(e.target.value);
							setDateTwo(e.target.value);
						}}
					/>
				</div>

				<div className="detailsInput">
					<select value={roomValue} onChange={handleChangeRooms}>
						<option>Add rooms</option>
						{options.map(({ id, label }) => {
							return (
								<option key={id} value={roomValue}>
									{label}
								</option>
							);
						})}
					</select>
				</div>
				<div className="detailsInput">
					<select value={roomValue} onChange={handleChangeRooms}>
						<option>Add Guests</option>
						{options.map(({ id, label }) => {
							return (
								<option key={id} value={roomValue}>
									{label}
								</option>
							);
						})}
					</select>
				</div>
				<div className="buttonFormContainer">
					<button
						className="searchBarBtn_primary"
						id="bookbtn"
						onClick={() => setIsOpen(true)}>
						Book Now
					</button>
					{isOpen && (
						<Modal
							dateOne={dateOne}
							dateTwo={dateTwo}
							hotels={hotels}
							setIsOpen={setIsOpen}
						/>
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
