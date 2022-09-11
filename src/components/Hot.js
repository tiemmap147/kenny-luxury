import React, { useState } from "react";
import { HotCard } from "./HotCard";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Fade from "react-reveal/Fade";

export const Hot = () => {
	const WATCH_DATA = [
		{
			backroundSrc: "/images/mask1.png",
			imgSrc: "images/watch1.png",
			name: "Black Dial Numeral Red Au...",
			price: "600.000.000 đ",
		},

		{
			backroundSrc: "/images/mask2.png",
			imgSrc: "images/watch2.png",
			name: "Black Dial Numeral Red Au...",
			price: "990.000.000 đ",
		},
		{
			backroundSrc: "/images/mask3.png",
			imgSrc: "images/watch3.png",
			name: "Black Dial Numeral Red Au...",
			price: "870.000.000 đ",
		},
	];
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTab1 = () => {
		setActiveTab("tab1");
	};
	const handleTab2 = () => {
		setActiveTab("tab2");
	};
	return (
		<div className='w-full  bg-[#1A1A1A] text-white'>
			<Title title='ĐANG HOT' />
			<div className='flex items-center justify-center border-b border-[#464646] p-4'>
				<ul className='tabs w-fit flex items-center justify-center gap-10 '>
					<li
						className={`${
							activeTab === "tab1" ? "active" : ""
						} description_tab`}
						onClick={handleTab1}>
						CỔ ĐIỂN
					</li>
					<li
						className={`${
							activeTab === "tab2" ? "active" : ""
						} description_tab`}
						onClick={handleTab2}>
						HIỆN ĐẠI
					</li>
					<li className='slider'></li>
				</ul>
			</div>
			<Fade bottom>
				<div className='w-full py-5 pl-5'>
					<Swiper speed={800} spaceBetween={16} slidesPerView={1.5}>
						{WATCH_DATA.map((item) => (
							<SwiperSlide>
								<HotCard
									backroundSrc={item.backroundSrc}
									imgSrc={item.imgSrc}
									name={item.name}
									price={item.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Fade>
		</div>
	);
};
