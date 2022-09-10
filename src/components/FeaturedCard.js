import React, { useState } from "react";
import { Title } from "./Title";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

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
				// animationName: "fade-in",
				// animationDuration: "5s",
			}}
			className={` h-full flex flex-col items-center  justify-center bg-center bg-cover bg-no-repeat text-white`}>
			<div className=''>
				<img className='h-[320px]' src={imgSrc} />
			</div>
			<Fade right ssrReveal>
				<div className='flex flex-col max-w-[334px] items-center uppercase '>
					<span className='font-bold text-[32px] text-center'>
						{name}
					</span>
					<span className='text-[#F4CC72] text-[13px] font-bold mt-1'>
						{price}
					</span>
				</div>
			</Fade>
		</div>
	);
};
