import Head from 'next/head';
import Dazeclub from '../components/Home/dazeclub/dazeclub';
import Footer from '../components/footer/footer';
import HeroBanner from '../components/Home/herobanner_home';
import Homeinfo from '../components/Home/homeinfo/homeinfo';
import { BASEURL } from '../components/lib/variables';
import FeaturedHotelCards from '../components/Home/featured/featuredcards';

import Carousel from '../components/Home/homeslider/homeslider';

export const getStaticProps = async () => {
	const res = await fetch(BASEURL + '/hotels');
	const data = await res.json();

	return {
		props: { hotels: data },
	};
};

export default function Home({ hotels }) {
	return (
		<>
			<>
				<Head>
					<title>Holidaze</title>
					<lang />
					<html lang="en" />
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
				<HeroBanner />
				<main>
					<div className="recommend_wrapper">
						<h3 className="recommend_heading">
							Hotels we recommend for our customers
						</h3>
					</div>
					<Carousel FeaturedHotelCards={hotels} />
					<Homeinfo />
					<Dazeclub />
				</main>
			</>
			<Footer />
		</>
	);
}
