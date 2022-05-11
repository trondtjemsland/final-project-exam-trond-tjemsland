import React from 'react';

import Head from 'next/head';

import Footer from './components/footer/footer';
import Herobannerhotels from './components/Hotels/herobanner_hotels/herobannerhotels';
import HotelSearchbar from './components/Hotels/hotelSearchbar/hotelSearchbar';
import HotelCards from './components/Hotels/hotelCards/hotelcards';
import { Navbar } from './components/header/header';

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:1337/hotels');
	const data = await res.json();

	return {
		props: { hotels: data },
	};
};

function Hotels({ hotels }) {
	console.log(hotels);
	return (
		<div>
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
			<Herobannerhotels />
			<main>
				<div className="hotelsWrapper">
					<div className="hotelsHeading">
						<h3 className="hotelsHeading_h3">
							Find the perfect hotel for your destination
						</h3>
					</div>
				</div>
				<HotelSearchbar hotelsArray={hotels} />
				<div className="hotelCards_wrapper">
					{hotels.map(({ title, price, imageUrl, id, adress }) => (
						<HotelCards
							key={id}
							title={title}
							price={price}
							imageUrl={imageUrl}
							adress={adress}
							id={id}
						/>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Hotels;
