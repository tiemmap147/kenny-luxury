import React, { useState } from "react";
import { Title } from "./Title";

export const FeaturedCard = ({
	backroundSrc = "/images/featuredMask.png",
	imgSrc = "images/featuredWatch.png",
	name = "Integrated King Gold Ceramic",
	price = "705.000.000 đ",
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${backroundSrc})`,
				animationName: "fade-in",
				animationDuration: "5s",
			}}
			className={` h-[491px] flex flex-col items-center  justify-center bg-center bg-cover bg-no-repeat text-white`}>
			<div className='max-h-[320px]'>
				<img className='h-full' src={imgSrc} />
			</div>
			<div className='flex flex-col max-w-[334px] items-center uppercase '>
				<span className='font-bold text-[32px] text-center'>
					{name}
				</span>
				<span className='text-[#F4CC72] text-[13px] font-bold mt-1'>
					{price}
				</span>
			</div>
		</div>
	);
};
