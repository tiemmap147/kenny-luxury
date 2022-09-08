import React from "react";
import { Category } from "./Category";

export const Categories = () => {
	return (
		<div className='mt-10  px-5'>
			<div className='flex gap-5 h-[260px]'>
				<Category />
				<Category />
			</div>
			<div className='h-[179px] mt-6'>
				<Category />
			</div>
		</div>
	);
};
