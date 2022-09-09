import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedCard } from "./FeaturedCard";

export const Featured = () => {
	return (
		<div className='w-full h-[545px] bg-[#1A1A1A]'>
			<Swiper spaceBetween={0} slidesPerView={1}>
				<SwiperSlide>
					<FeaturedCard />
				</SwiperSlide>
				<SwiperSlide>
					<FeaturedCard />
				</SwiperSlide>
				<SwiperSlide>
					<FeaturedCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
