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
	sliderImages: { sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5 },
}) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const myLoader = ({ src }) => {
		return imageUrl;
	};

	return (
		<>
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
					<Image loader={myLoader} src={imageUrl} height={650} width={800} />
				</SwiperSlide>
				<SwiperSlide>
					<Image loader={myLoader} src={sliderImg1} height={650} width={800} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg5} />
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
					<img src={sliderImg1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={sliderImg5} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
