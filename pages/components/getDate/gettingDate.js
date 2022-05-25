import { useState } from 'react';

const DateComponent = () => {
	let defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate());

	const [dateOne, setDateOne] = useState(defaultDate);
	const [dateTwo, setDateTwo] = useState(defaultDate);

	const onSetDateOne = (event) => {
		setDateOne(new Date(event.target.value));
	};
	const onSetDateTwo = (event) => {
		setDateTwo(new Date(event.target.value));
	};

	console.log(dateOne, dateTwo);
	return (
		<>
			<div className="detailsInput">
				{/* <p>date: {date.toLocaleDateString('en-CA')}</p> */}
				<input
					type="date"
					value={dateOne.toLocaleDateString('en-CA')}
					onChange={onSetDateOne}
				/>
			</div>
			<div className="detailsInput">
				{/* <p>date: {date.toLocaleDateString('en-CA')}</p> */}
				<input
					type="date"
					value={dateTwo.toLocaleDateString('en-CA')}
					onChange={onSetDateTwo}
				/>
			</div>
		</>
	);
};

export default DateComponent;
