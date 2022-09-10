import React from "react";
import Slide from "react-reveal/Slide";
export const Title = ({ title = "Bộ sưu tập" }) => {
	return (
		<div className='py-10 '>
			<div className='w-fit mx-auto'>
				<div className='border-custom p-5'>
					<Slide top>
						<p className='text-[#FFFFFF] text-[22px] leading-8'>
							{title}
						</p>
					</Slide>
				</div>
			</div>
		</div>
	);
};
