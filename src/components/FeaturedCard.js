import React, { useState } from "react";
import { Title } from "./Title";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export const FeaturedCard = ({
	backroundSrc = "/images/featuredMask.png",
	imgSrc = "images/featuredWatch.png",
	name = "Integrated King Gold Ceramic",
	price = "705.000.000 đ",
	slideIndex = 0,
	touchIndex,
}) => {
	console.log("slide: ", slideIndex);
	console.log("touch: ", touchIndex);

	return (
		<div
			style={
				{
					// backgroundImage: `url(${backroundSrc})`,
					// animationName: "fade-in",
					// animationDuration: ".5s",
					// animationTimingFunction: "linear",
				}
			}
			className={`relative h-full flex flex-col items-center  justify-center bg-center bg-cover bg-no-repeat text-white`}>
			<Fade
				when={touchIndex || slideIndex === 0}
				duration={1000}
				delay={600}
				spy
				appear
				ssrFadeout>
				<img
					src={backroundSrc}
					className='absolute w-full h-full -z-50 bg-transparent object-cover opacity-0'
				/>
			</Fade>
			<div className=''>
				<img className='h-[320px]' src={imgSrc} />
			</div>
			<Fade
				bottom
				when={touchIndex || slideIndex === 0}
				delay={400}
				spy
				appear>
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
