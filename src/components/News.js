import React, { useState } from "react";
import { HotCard } from "./HotCard";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Fade from "react-reveal/Fade";

import { NewsCard } from "./NewsCard";
export const News = () => {
	const NEWS_DATA = [
		{
			backroundSrc: "images/news.png",
			title: "Hublot big bang unico essential grey",
			desc: "A first: this watch limited to 200 pieces is exclusively available online on the e-commerce platform hublot.com.",
		},
		{
			backroundSrc: "images/news.png",
			title: "WATCH IS A PERFECT GIFT FOR HER",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis.",
		},
		{
			backroundSrc: "images/news.png",
			title: "Hublot big bang unico essential grey",
			desc: "A first: this watch limited to 200 pieces is exclusively available online on the e-commerce platform hublot.com.",
		},
		{
			backroundSrc: "images/news.png",
			title: "Hublot big bang unico essential grey",
			desc: "A first: this watch limited to 200 pieces is exclusively available online on the e-commerce platform hublot.com.",
		},
	];
	return (
		<div className='w-full  bg-[#1A1A1A] text-white'>
			<Title title='TIN TỨC' />

			<Fade bottom>
				<div className='w-full py-5 pl-5'>
					<Swiper speed={800} spaceBetween={16} slidesPerView={1.5}>
						{NEWS_DATA.map((item) => (
							<SwiperSlide>
								<NewsCard
									backroundSrc={item.backroundSrc}
									title={item.title}
									desc={item.desc}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Fade>
		</div>
	);
};
