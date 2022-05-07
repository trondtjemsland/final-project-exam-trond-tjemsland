import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

export const NavbarHero = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="navBarHero  flex items-center flex-wrap p-4 ">
				<Link href="/">
					<a className="inline-flex items-center p-2 ">
						<Image src="/logo4.svg" width="300px" height="140px" alt="logo" />
					</a>
				</Link>
				<button
					className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
					onClick={handleClick}>
					<svg
						className="w-9 h-9"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<div
					className={`${
						active ? '' : 'hidden'
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className=" Header__Nav lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
						<Link href="/hotels">
							<a className=" navBarLinks lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded items-center justify-center">
								Hotels
							</a>
						</Link>
						<Link href="/contact">
							<a className=" navBarLinks lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded items-center justify-center ">
								Contact
							</a>
						</Link>
						<Link href="#">
							<a className=" navBarLinks lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded items-center justify-center">
								Reviews
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
