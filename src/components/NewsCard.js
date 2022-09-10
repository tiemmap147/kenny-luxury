import React, { useState } from "react";
import { Title } from "./Title";

export const NewsCard = ({
	backroundSrc = "images/news.png",
	title = "Hublot big bang unico essential grey",
	desc = "A first: this watch limited to 200 pieces is exclusively available online on the e-commerce platform hublot.com.",
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${backroundSrc})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
			className='w-full h-[372px] flex flex-col justify-end'>
			<div className=' w-full h-[225px] h-[206px] backdrop-blur-md p-2'>
				<div className=''>
					<span className='font-bold  text-[24px] leading-[28px] uppercase'>
						{title}
					</span>
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};
