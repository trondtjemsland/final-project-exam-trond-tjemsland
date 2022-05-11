import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { useRouter } from 'next/router';

function HotelSearchbar({ hotelsArray }) {
	const sortedArray = hotelsArray.map((elm) => {
		return { value: elm.title, label: elm.title, id: elm.id };
	});

	// console.log('sortedArray', sortedArray);
	const [selectedOption, setSelectedOption] = useState({
		value: '',
		title: '',
		id: 0,
	});

	const options = [
		{ label: '1', id: 1 },
		{ label: '2', id: 2 },
		{ label: '3', id: 3 },
		{ label: '4', id: 4 },
		{ label: '5', id: 5 },
		{ label: '6', id: 6 },
	];

	const [rooms, setRooms] = React.useState();
	const handleChange = (event) => {
		setRooms(event.target.rooms);
	};

	function test(val) {
		setSelectedOption(val);
		console.log(selectedOption);
	}

	const router = useRouter();

	function onclickfunc() {
		router.push('/' + selectedOption.id);
	}

	return (
		<div className="searchBar_container">
			<div className="input_container">
				<Select
					className="typeAhead"
					options={sortedArray}
					defaultValue={selectedOption}
					onChange={test}
				/>
			</div>
			<div className="input_container">
				<input id="date" type="date" />
			</div>
			<div className="input_container">
				<input id="date" type="date" />
			</div>
			<div className="input_container">
				<select value={rooms} onChange={handleChange}>
					{options.map(({ id, label }) => (
						<option key={id} value={rooms}>
							{label}
						</option>
					))}
				</select>
			</div>
			<button onClick={() => onclickfunc()} className="searchBtn">
				Search
			</button>
		</div>
	);
}

export default HotelSearchbar;
