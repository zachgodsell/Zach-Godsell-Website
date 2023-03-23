import React from "react";
import Logo from "../assets/header-logo.png";
type Props = {};

export const Navbar = (props: Props) => {
	return (
		<div className='flex justify-between py-8 relative px-20'>
			<div className='left flex w-full justify-start my-2 gap-x-10'>
				<NavButton text='CLIENTS' />
				<NavButton text='WORKS' />
			</div>
			<div className='flex justify-center w-full'>
				<span className=' font-TerminaBlack text-white text-center text-5xl'>
					ZACH
					<br />
					GODSELL
				</span>
			</div>
			<div className='right flex w-full justify-end my-2 gap-x-10'>
				<NavButton text='ABOUT' />
				<NavButton text='CONTACT' />
			</div>
		</div>
	);
};

type buttonProps = {
	text: String;
};

const NavButton = (props: buttonProps) => {
	return (
		<button
			className='px-2 py-1 w-1/3 bg-transparent border-2 
    text-white font-TerminaHeavy 
    border-white rounded-md
    hover:bg-white hover:ease-in-out duration-700 hover:text-z-gray'
		>
			{props.text}
		</button>
	);
};
