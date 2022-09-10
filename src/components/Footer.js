import React from "react";

export const Footer = () => {
	return (
		<div className='mb-[54px]'>
			<div className='w-full h-[218px] '>
				<img
					className='w-full h-full object-cover'
					src='images/map.png'
				/>
			</div>
			<div className='px-6 py-10 flex flex-col items-center jutify-center gap-2'>
				<div className='flex gap-6 items-center jutify-center'>
					<img
						className='w-[24px] h-[24px]'
						src='images/facebook.png'
					/>
					<img
						className='w-[24px] h-[24px]'
						src='images/twitter.png'
					/>
					<img
						className='w-[24px] h-[24px]'
						src='images/youtube.png'
					/>
				</div>
				<p className='text-[12px] text-[#FFFFFF]'>
					©2022 Kenny Luxury - All intellectual property rights
					reserved
				</p>
			</div>
		</div>
	);
};
