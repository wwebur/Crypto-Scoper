import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

// type BurgerProps = {
// 	handleClick: (event: React.MouseEvent) => boolean;
// }

// export default function NavComponent(props: BurgerProps) {

const styles = {
	navLink: `text-black flex mx-[10px]`,
	badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
	navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
	nav: `flex justify-center items-center gap-[20px]`,
	header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
	headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
	inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
	input: `bg-transparent outline-none text-white w-70 ml-3`,
	cursorPointer: `mr-5 cursor-pointer`,
	}

export default function NavComponent() {

	return (
		<>
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
				<div className="flex-1">
					<a className="text-[#40AAE8] btn btn-ghost normal-case text-3xl" href="/">
					Crypto Scoper
						<img src="" className="nav--logo" />
					</a>
				</div>


			</div>

			</div>
			</nav>
		</>
	);
}
