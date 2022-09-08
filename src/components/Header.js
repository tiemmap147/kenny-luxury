import React from "react";

export const Header = () => {
	return (
		<div className=' border-b border-[#FFFFFF33] p-4 flex items-center justify-between'>
			<div className='w-44  '>
				<img className='w-full h-full' src='/images/logo.png' />
			</div>
			<div className='w-[20px] h-[11px]'>
				<img className='w-full h-ull' src='/images/Union.png' />
			</div>
		</div>
	);
};
