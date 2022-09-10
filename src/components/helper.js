import React, { useState } from "react";
import Fade from "react-reveal/Fade";
export const Helper = () => {
	const [expand, setExpand] = useState(false);

	const toogle = () => {
		setExpand(!expand);
	};

	return (
		<>
			{!expand && (
				<div
					onClick={toogle}
					className='text-center w-full h-[54px] p-4 fixed  bg-[#F4CC72] bottom-0 z-50 cursor-pointer'>
					<span className=' uppercase text-[#000000] font-bold text-[15px]'>
						Quý khách cần tư vấn?
					</span>
				</div>
			)}

			<Fade bottom when={expand}>
				{expand && (
					<div className='w-full fixed bottom-0 z-50 backdrop-blur-2xl p-7'>
						<span className=' uppercase text-[#ffffff] font-bold text-[20px]'>
							Quý khách cần tư vấn?
						</span>
						<p className='text-[14px] text-[#ffffff] mt-2'>
							Hãy để lại sô điện thoại chúng tôi sẽ gọi tư vấn
							trong thời gian sớm nhất!
						</p>
						<div className='mt-2'>
							<input
								type='tel'
								placeholder='Nhập số điện thoại'
								className='w-full p-4 rounded-md bg-[black] placeholder:text-[#FFFFFF]'
							/>
						</div>

						<div className='transition-all ease-in-out delay-150 w-full flex gap-2 my-2 justify-items-stretch'>
							<button className='w-full font-bold uppercase px-5 py-2 bg-[#F4CC72] text-black rounded-md'>
								Gửi ngay
							</button>
							<button
								onClick={toogle}
								className='w-full font-bold uppercase px-5 py-2 border border-[#F4CC72] text-[#F4CC72] bg-[#000000] rounded-md'>
								HỦy
							</button>
						</div>
					</div>
				)}
			</Fade>
		</>
	);
};
