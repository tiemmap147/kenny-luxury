import React from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
export const Title = ({ title = "Bộ sưu tập" }) => {
	return (
		<div className='py-10 '>
			<div className='w-fit mx-auto'>
				<div className=' py-2 px-5 relative flex flex-col '>
					<Bounce left>
						{/* borderTop-Left */}
						<div className='absolute flex w-[30px]  top-0 left-0 '>
							<div className=' bg-gradient-to-r from-[#F4CC72] w-[30px] h-[1px]'></div>
						</div>
						{/* borderLeft-Top */}
						<div className='absolute w-[1px] h-[30px] top-0 left-0 bg-gradient-to-b from-[#F4CC72]'></div>
					</Bounce>
					<Bounce right>
						{/* borderTop-Right */}
						<div className='absolute flex w-[30px]  top-0 right-0 '>
							<div className='bg-gradient-to-l from-[#F4CC72] w-[30px] h-[1px]'></div>
						</div>

						{/* borderRight-Top */}
						<div className='absolute w-[1px] h-[30px] top-0 right-0 bg-gradient-to-b from-[#F4CC72]'></div>
					</Bounce>
					<Bounce bottom>
						<div className='absolute  flex mx-auto w-[100px] h-[1px] bottom-0 left-0 right-0  bg-gradient-to-r from-[#000000] via-[#F4CC72] to-[#000000]'></div>
					</Bounce>
					{/* <Slide top> */}
					<p className=' text-[#FFFFFF] text-[22px] leading-8 '>
						{title}
					</p>
					{/* </Slide> */}
				</div>
			</div>
		</div>
	);
};
