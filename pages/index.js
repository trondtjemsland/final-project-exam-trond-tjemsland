import Head from 'next/head';
import Dazeclub from './components/Home/dazeclub/dazeclub';
import Footer from './components/footer/footer';
import HeroBanner from './components/Home/herobanner_home';
import Homecards from './components/Home/homecards/homecards';
import Homeinfo from './components/Home/homeinfo/homeinfo';

export default function Home() {
	return (
		<>
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
				<HeroBanner />
				<main>
					<div className="recommend_wrapper">
						<h3 className="recommend_heading">
							Hotels we recommend for our customers
						</h3>
					</div>
					<Homecards />
					<Homeinfo />
					<Dazeclub />
				</main>
			</>
			<Footer />
		</>
	);
}
