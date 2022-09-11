import React from "react";
import { Category } from "./Category";
import { Title } from "./Title";
import Fade from "react-reveal/Fade";

export const Categories = () => {
	// const [lastYPos, setLastYPos] = React.useState(0);
	// const [shouldShowActions, setShouldShowActions] = React.useState(false);
	// React.useEffect(() => {
	// 	function handleScroll() {
	// 		const yPos = window.scrollY;
	// 		const isScrollingUp = yPos > lastYPos;

	// 		setShouldShowActions(isScrollingUp);
	// 		setLastYPos(yPos);
	// 	}

	// 	window.addEventListener("scroll", handleScroll, false);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll, false);
	// 	};
	// }, [lastYPos]);
	return (
		<div>
			<Title title='BỘ SƯU TẬP' />
			<div className='pb-10  px-5'>
				<Fade
					top
					// when={shouldShowActions}
				>
					<div className='flex gap-3 h-[216px]'>
						<Category gender='men' />
						<Category gender='women' />
					</div>
				</Fade>
				<Fade
					bottom
					// when={shouldShowActions}
				>
					<div className='h-[179px] mt-6'>
						<Category gender={"couple"} />
					</div>
				</Fade>
			</div>
		</div>
	);
};
