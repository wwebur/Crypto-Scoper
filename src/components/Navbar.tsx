import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


export default function NavComponent() {
	const router = useRouter()
	return (
		<>
			<nav className="px-2 bg-green border-gray-200 dark:bg-gray-900 dark:border-gray-700">
				{/* <div className="container flex flex-wrap justify-between items-center mx-auto"> */}
					<div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
						{/* <div className="flex-1"> */}
							<Link href="/"> 
								<div className="text-light-green btn btn-ghost normal-case font-bold md:text-5xl text-2xl">
									<Image
										src="/crypto_scoper_c_whitebg.PNG"
										alt="C Logo"
										width={100} 
										height={100}
									/>
									{/* <img src="./crypto_scoper_c_whitebg.PNG" alt="" width={100} height={100}/> */}
									Crypto Scoper
								</div>
								
							</Link>
						{/* </div> */}


					{/* </div> */}
					{/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
						<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								{/* <a href="/" className="block py-2 pr-4 pl-3 text-light-green bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a> */}
								<a href="/" className={`block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white ${router.pathname == "/" ? "text-light-green" : "matte-grey"}`} aria-current="page">Home</a>
							</li>
							{/* <div className='hidden md:flex'> */}
								{/* <li>
									<a href="" className="hidden md:flex block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 active:text-light-green md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >About</a>
								</li>
								<li>
									<a href="#" className="hidden md:flex block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
								</li> */}
							{/* </div> */}

						</ul>
					</div>
				{/* {/* </div> */}
			</nav>
		</>
	);
}
