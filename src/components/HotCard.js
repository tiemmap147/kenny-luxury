import React, { useState } from "react";
import { Title } from "./Title";

export const HotCard = ({
	backroundSrc = "/images/mask1.png",
	imgSrc = "images/watch1.png",
	name = "Black Dial Numeral Red Au...",
	price = "600.000.000 đ",
}) => {
	return (
		<div
			style={{ backgroundImage: `url(${backroundSrc})` }}
			className={` h-[391px] flex flex-col  items-center justify-center  bg-cover bg-no-repeat text-white`}>
			<div className='max-h-[300px]'>
				<img className='h-full' src={imgSrc} />
			</div>
			<div className='flex flex-col '>
				<span className='font-bold text-[15px]'>{name}</span>
				<span className='text-[#F4CC72] text-[12px]'>{price}</span>
			</div>
		</div>
	);
};
