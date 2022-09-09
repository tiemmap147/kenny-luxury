import React from "react";
import { Category } from "./Category";
import { Title } from "./Title";

export const Categories = () => {
	return (
		<div>
			<Title title='BỘ SƯU TẬP' />
			<div className='pb-10  px-5'>
				<div className='flex gap-5 h-[260px]'>
					<Category gender='men' />
					<Category gender='women' />
				</div>
				<div className='h-[179px] mt-6'>
					<Category gender={"couple"} />
				</div>
			</div>
		</div>
	);
};
