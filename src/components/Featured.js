import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedCard } from "./FeaturedCard";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Featured = () => {
	const FEATURED_DATA = [
		{
			backroundSrc: "/images/featuredMask.png",
			imgSrc: "images/featuredWatch.png",
			name: "Integrated King Gold Ceramic",
			price: "705.000.000 đ",
		},
		{
			backroundSrc: "/images/mask1.png",
			imgSrc: "images/watch1.png",
			name: "Round Dial Black Automatic",
			price: "805.000.000 đ",
		},
		{
			backroundSrc: "/images/mask3.png",
			imgSrc: "images/watch3.png",
			name: "Integrated King Gold Ceramic",
			price: "995.000.000 đ",
		},
	];
	const [slideIndex, setSlideIndex] = useState(0);
	const [touchIndex, setTouchIndex] = useState(0);

	return (
		<div className='w-full h-[545px] bg-[#1A1A1A]'>
			<Swiper
				speed={800}
				onSlideChange={(e) => setSlideIndex(e.activeIndex)}
				pagination={true}
				modules={[Pagination]}
				onTouchMove={(e) => setTouchIndex(e.touches.startX)}
				spaceBetween={0}
				slidesPerView={1}
				className='h-full'>
				{FEATURED_DATA.map((item) => (
					<SwiperSlide>
						<FeaturedCard
							slideIndex={slideIndex}
							touchIndex={touchIndex}
							backroundSrc={item.backroundSrc}
							name={item.name}
							imgSrc={item.imgSrc}
							price={item.price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
