import React, { useState } from "react";
import { HotCard } from "./HotCard";
import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Brand = () => {
	const WATCH_DATA = [
		{
			backroundSrc: "/images/mask2.png",
			imgSrc: "images/watch2.png",
			name: "Black Dial Numeral Red Au...",
			price: "990.000.000 đ",
		},
		{
			backroundSrc: "/images/mask1.png",
			imgSrc: "images/watch1.png",
			name: "Black Dial Numeral Red Au...",
			price: "600.000.000 đ",
		},

		{
			backroundSrc: "/images/mask3.png",
			imgSrc: "images/watch3.png",
			name: "Black Dial Numeral Red Au...",
			price: "870.000.000 đ",
		},
	];

	const BRANDS = [
		{
			id: 1,
			name: "rolex",
			logoSrc: "images/rolex.png",
		},
		{
			id: 2,
			name: "hublot",
			logoSrc: "images/hublot.png",
		},
		{
			id: 3,
			name: "patekphilippe",
			logoSrc: "images/patekphilippe.png",
		},
		{
			id: 4,
			name: "richardmille",
			logoSrc: "images/patekphilippe.png",
		},
		{
			id: 5,
			name: "hublot",
			logoSrc: "images/hublot.png",
		},
		{
			id: 6,
			name: "hublot",
			logoSrc: "images/hublot.png",
		},
	];
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTab = (index) => {
		setActiveTab(`tab${index + 1}`);
	};

	return (
		<div className='w-full  bg-[#1A1A1A] text-white'>
			<Title title='THƯƠNG HIỆU' />
			<div className='tabs-brand  '>
				<ul className=' min-w-[417px]  pl-5'>
					<Swiper speed={800} spaceBetween={0} slidesPerView={3.8}>
						{BRANDS.map((brand, index) => (
							<SwiperSlide>
								<li
									className={
										activeTab === `tab${index + 1}`
											? "active"
											: ""
									}
									onClick={() => handleTab(index)}>
									<img
										className='w-full h-full object-fit'
										src={brand.logoSrc}
									/>
								</li>
							</SwiperSlide>
						))}
					</Swiper>
				</ul>
			</div>
			<div className='w-full py-5 pl-5'>
				<Swiper spaceBetween={16} slidesPerView={1.5}>
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
		</div>
	);
};
