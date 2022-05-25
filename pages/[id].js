import { Navbar } from '../components/header/header';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import DetailSlider from '../components/Hotels/slider/slider';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Amenities from '../components/Hotels/amenities/amenities';
import Searchbar from '../components/details/detailsSearchbar/searchbar';

import GuestReviews from '../components/details/guestreviews/guestreviews';
// import Activities from '../components/details/activities/activities';
import { BASEURL } from '../components/lib/variables';

export const getStaticPaths = async () => {
	const res = await fetch(BASEURL + '/hotels');
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
	const res = await fetch(BASEURL + '/hotels/' + id);
	const data = await res.json();

	return {
		props: { hotels: data },
	};
};

const HotelDetails = ({ hotels }) => {
	const destructuredHotel = hotels;
	const {
		title,
		imageUrl,
		sliderImages,
		price,
		adress,
		mapImg,
		reviews,
		imgAlt,
	} = destructuredHotel;

	const myMapLoader = ({ src }) => {
		return `${mapImg}?w=500&q=75`;
	};

	console.log('mapimg loader', mapImg);

	console.log('hotels id', hotels);
	return (
		<>
			<Head>
				<title>Holidaze</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</Head>
			<Navbar />
			<main>
				<div className="details">
					<div className="details_header">
						<div className="details_title">
							<h1>{title}</h1>
							<p>{adress}</p>
							<div className="details_priceMatch">
								<span>
									<Icon
										className="priceMatch_icon"
										icon="fluent:checkmark-starburst-16-filled"
									/>
								</span>
								<p>Pricematch</p>
							</div>
						</div>
						<div className="details_booking">
							<p className="details_booking_price">
								${price}
								<span>/day</span>
							</p>
							<button className="details_bookingBtn">Book your Room</button>
						</div>
					</div>

					<div className="details_infoBox">
						<DetailSlider
							imgAlt={imgAlt}
							imageUrl={imageUrl}
							sliderImages={sliderImages}
						/>
						<div className="details_hotelInfo">
							<div className="mapContainer">
								<Image
									loader={myMapLoader}
									src={mapImg}
									layout="fill"
									alt={imgAlt}
								/>
								<div className="detailsAdress">
									<Icon
										className="detailsAdress_icon"
										icon="fa-solid:map-marker-alt"
									/>
									<p>{adress}</p>
								</div>
							</div>
							<div>
								<div className="details_ratingContainer">
									<div className="details_ratingsBox">
										<p>4.5</p>
									</div>
									<div className="details_ratingText">
										<p className="details_ratingText_heading">Excellent</p>
										<p className="details_ratingText_small">
											128+ verified guest reviews
										</p>
									</div>
								</div>
								<div className="reviewsWrapper">
									<p>
										“ The Hotel rooms where just as the images. The reception
										was very nice and a good experience”
									</p>
									<div className="reviewsWrapper_divider"></div>
									<p>
										“ The Staff at the hotel was helpfull and really servide
										minded”
									</p>
								</div>
							</div>

							<Amenities />
						</div>
					</div>
				</div>
				<Searchbar hotels={hotels} />
				<GuestReviews reviews={reviews} />
				{/* <Activities /> */}
			</main>
			<Footer />
		</>
	);
};

export default HotelDetails;
