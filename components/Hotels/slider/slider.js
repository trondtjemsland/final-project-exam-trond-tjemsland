import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function DetailSlider({
	imageUrl,
	imgAlt,
	sliderImages: { sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5 },
}) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const myLoader = ({ src }) => {
		return `${imageUrl}?w=500&q=75`;
	};
	const myLoader1 = ({ src }) => {
		return `${sliderImg1}?w=500&q=75`;
	};
	const myLoader2 = ({ src }) => {
		return `${sliderImg2}?w=500&q=75`;
	};
	const myLoader3 = ({ src }) => {
		return `${sliderImg3}?w=500&q=75`;
	};
	const myLoader4 = ({ src }) => {
		return `${sliderImg4}?w=500&q=75`;
	};
	const myLoader5 = ({ src }) => {
		return `${sliderImg5}?w=500&q=75`;
	};

	return (
		<div className="details_sliderWrapper">
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2">
				<SwiperSlide>
					<Image
						loader={myLoader}
						src={imageUrl}
						alt={imgAlt}
						height={650}
						width={800}
						priority
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader1}
						src={sliderImg1}
						alt={imgAlt}
						height={650}
						width={800}
						priority
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader2}
						src={sliderImg2}
						alt={imgAlt}
						height={650}
						width={800}
						priority
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader3}
						src={sliderImg3}
						alt={imgAlt}
						height={650}
						width={800}
						priority
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader4}
						src={sliderImg4}
						height={650}
						width={800}
						alt={imgAlt}
						priority
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader5}
						src={sliderImg5}
						height={650}
						width={800}
						alt={imgAlt}
						priority
					/>
				</SwiperSlide>
			</Swiper>
			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper">
				<SwiperSlide>
					<Image
						loader={myLoader1}
						src={sliderImg1}
						alt={imgAlt}
						height={650}
						width={800}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader2}
						src={sliderImg2}
						alt={imgAlt}
						height={650}
						width={800}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader3}
						src={sliderImg3}
						alt={imgAlt}
						height={650}
						width={800}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader4}
						src={sliderImg4}
						alt={imgAlt}
						height={650}
						width={800}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						loader={myLoader5}
						src={sliderImg5}
						alt={imgAlt}
						height={650}
						width={800}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
