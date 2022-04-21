import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
	return (
		<header className="navBar">
			<div className="logo">
				<Link href="/">
					<a>
						<Image src="/logo4.svg" width="340px" height="140px" alt="logo" />
					</a>
				</Link>
			</div>
			<nav>
				<ul className="navlinks">
					<li>
						<Link href="/hotels">
							<a
								className={
									router.pathname === '/hotels' ? 'active' : 'inactive'
								}>
								Hotels
							</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className={router.pathname === '#' ? 'active' : 'inactive'}>
								Reviews
							</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a
								className={
									router.pathname === '/contact' ? 'active' : 'inactive'
								}>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
