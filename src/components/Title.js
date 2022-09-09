import React from "react";

export const Title = ({ title = "Bộ sưu tập" }) => {
	return (
		<div className='py-10 '>
			<div className='w-fit mx-auto'>
				<div className='border-custom p-5'>
					<p className='text-[#FFFFFF] text-[22px] leading-8'>
						{title}
					</p>
				</div>
			</div>
		</div>
	);
};
