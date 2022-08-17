import Link from 'next/link';
import React from 'react';

export default function NavComponent() {

	return (
		<>
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
				<div className="flex-1">
					<Link href="/"> 
						<div className="text-[#40AAE8] btn btn-ghost normal-case text-3xl" >
							Crypto Scoper
						</div>
					</Link>
				</div>


			</div>

			</div>
			</nav>
		</>
	);
}
