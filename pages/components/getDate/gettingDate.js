import { useState } from 'react';

const Component = () => {
	let defaultDate = new Date();
	defaultDate.setDate(defaultDate.getDate() + 3);

	const [date, setDate] = useState(defaultDate);

	const onSetDate = (event) => {
		setDate(new Date(event.target.value));
	};

	return (
		<>
			<p>date: {date.toLocaleDateString('en-CA')}</p>
			<input
				type="date"
				value={date.toLocaleDateString('en-CA')}
				onChange={onSetDate}
			/>
		</>
	);
};

export default Component;
