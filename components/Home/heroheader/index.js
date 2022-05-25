import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import { useState } from 'react';

export const NavbarHero = () => {
	const [active, setActive] = useState(false);
	const router = useRouter();
	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="navBarHero">
				<Link href="/">
					<a className="inline-flex items-center p-2">
						<Image src="/logo4.svg" width="200px" height="140px" alt="logo" />
					</a>
				</Link>

				<div className="Header__Nav ">
					<Link href="/hotels">
						<a
							className={`navBarLinks ${
								router.pathname === '/hotels' ? 'active' : 'inactive'
							}`}>
							Hotels
						</a>
					</Link>
					<Link href="/contact">
						<a
							className={`navBarLinks ${
								router.pathname === '/contact' ? 'active' : 'inactive'
							}`}>
							Contact
						</a>
					</Link>
					<Link href="#">
						<a className={`navBarLinks`}>Reviews</a>
					</Link>
				</div>
				<div className={`hamburgerNav ${active ? 'showmenu' : 'hidemenu'}`}>
					<Link href="/hotels">
						<a className={`navBarLinks hamburgerNav_links`}>Hotels</a>
					</Link>
					<Link href="/contact">
						<a className={`navBarLinks hamburgerNav_links`}>Contact</a>
					</Link>
					<Link href="#">
						<a className={`navBarLinks hamburgerNav_links`}>Reviews</a>
					</Link>
					<Icon
						icon="bi:x"
						className="exitIcon"
						onClick={() => {
							handleClick();
						}}
					/>
					<Icon />
				</div>
				<Icon
					className="hamburgerIcon"
					icon="charm:menu-hamburger"
					onClick={() => {
						handleClick();
					}}
				/>
			</nav>
		</>
	);
};
