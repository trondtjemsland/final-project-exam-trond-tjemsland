import { DateRangePicker } from '@mantine/dates';

function Demo() {
	const [value, setValue] = [(new Date(2021, 11, 1), new Date(2021, 11, 5))];

	return (
		<DateRangePicker
			className="datePicker"
			placeholder="Pick dates range"
			value={value}
			onChange={setValue}
		/>
	);
}

export default Demo;
