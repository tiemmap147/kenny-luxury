import React from "react";

export const Category = ({ gender }) => {
	return (
		<div
			className={`${
				gender === "men"
					? "background-for-men"
					: gender === "women"
					? "background-for-women"
					: gender === "couple"
					? "background-for-couple"
					: ""
			} w-full h-full flex flex-col justify-end`}>
			<div className='text-[#FFFFFF] pl-2 h-[74px] w-full backdrop-blur-md flex flex-col justify-center'>
				<p className='text-[11] leading-3'>DÀNH CHO</p>
				<p className='font-bold text-2xl'>
					{gender === "men"
						? "NAM"
						: gender === "women"
						? "NỮ"
						: gender === "couple"
						? "CẶP ĐÔI"
						: ""}
				</p>
			</div>
		</div>
	);
};
