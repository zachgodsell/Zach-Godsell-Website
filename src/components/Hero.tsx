import React from "react";
import HeroImage from "../assets/images/Zach-Hero.png";
type Props = {};

export const Hero = (props: Props) => {
	return (
		<div className='flex flex-wrap'>
			<div className='xl:w-fit'>
				<img className='opacity-10' src={HeroImage} alt='' />
			</div>
			<div className='flex-1'>
				<div className=' flex flex-wrap'>
					<div className='w-full flex-wrap'>
						<span className='lg:text-8xl text-white font-TerminaBlack'>
							SOFTWARE
							<br />
							ENGINEER
						</span>
					</div>
					<div className='w-full pt-12'>
						<span className='lg:text-6xl text-z-l-blue font-TerminaBlack'>
							SALESFORCE
							<br />
							DEVELOPER
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
