import React from "react";
import Logo from "../assets/header-logo.png";
type Props = {};

export const Navbar = (props: Props) => {
	return (
		<div className='flex justify-between my-8'>
			<div className='left flex w-full justify-start my-2 gap-x-10'>
				<button className='px-2 py-1 w-1/3 bg-transparent border-2 border-black rounded-md'>
					Profile
				</button>
				<button className=' w-1/3 bg-transparent border-2 border-black rounded-md'>
					Profile
				</button>
			</div>
			<div className='flex justify-center w-full'>
				<img className='' src={Logo} alt='' />
			</div>
			<div className='right flex w-full justify-end my-2 gap-x-10'>
				<button className='px-2 py-1 w-1/3 bg-transparent border-2 border-black rounded-md'>
					Profile
				</button>
				<button className='px-2 py-1 w-1/3 bg-transparent border-2 border-black rounded-md'>
					Profile
				</button>
			</div>
		</div>
	);
};
