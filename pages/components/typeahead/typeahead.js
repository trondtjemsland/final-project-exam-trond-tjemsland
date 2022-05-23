import React, { useState } from 'react';
import HotelCards from '../Hotels/hotelCards/hotelcards';

function Typeahead({ hotels }) {
	const [searchTerm, setSearchTerm] = useState('');

	const [rooms, setRooms] = React.useState();
	const handleChange = (event) => {
		setRooms(event.target.rooms);
	};

	return (
		<>
			<div className="searchInput_wrapper">
				<div className="searchInput_container">
					<input
						id="searchInput"
						type="text"
						placeholder="Search..."
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
					<div>
						{hotels
							.filter((val) => {
								if (setSearchTerm == '') {
									return val;
								} else if (
									val.title.toLowerCase().includes(searchTerm.toLowerCase())
								) {
									return val;
								}
							})
							.map(({ title, id }) => {
								// return <p key={id}>{title}</p>;
							})}
					</div>
				</div>
				<div className="searchInput_container">
					<input id="date" type="date" />
				</div>
				<div className="searchInput_container">
					<input id="date" type="date" />
				</div>
			</div>
			<div className="hotelCards_wrapper">
				{hotels
					.filter((val) => {
						if (setSearchTerm == '') {
							return val;
						} else if (
							val.title.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return val;
						}
					})
					.map(({ title, price, imageUrl, id, adress, imgAlt }) => {
						return (
							<HotelCards
								key={id}
								title={title}
								price={price}
								imageUrl={imageUrl}
								adress={adress}
								id={id}
								imgAlt={imgAlt}
							/>
						);
					})}
			</div>
		</>
	);
}

export default Typeahead;
