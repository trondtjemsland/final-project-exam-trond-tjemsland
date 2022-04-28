export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:1337/hotels');
	const data = await res.json();

	const paths = data.map((hotel) => {
		return {
			params: { id: hotel.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('http://localhost:1337/hotels/' + id);
	const data = await res.json();

	return {
		props: { hotels: data },
	};
};

const Details = ({ hotels: { title, imageUrl, price } }) => {
	return <div></div>;
};

export default Details;
