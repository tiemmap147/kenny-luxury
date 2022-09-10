import React from "react";
import { Category } from "./Category";
import { Title } from "./Title";
import Fade from "react-reveal/Fade";

export const Categories = () => {
	return (
		<div>
			<Title title='BỘ SƯU TẬP' />
			<div className='pb-10  px-5'>
				<Fade top>
					<div className='flex gap-3 h-[216px]'>
						<Category gender='men' />
						<Category gender='women' />
					</div>
				</Fade>
				<Fade bottom>
					<div className='h-[179px] mt-6'>
						<Category gender={"couple"} />
					</div>
				</Fade>
			</div>
		</div>
	);
};
