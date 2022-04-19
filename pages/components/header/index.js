import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
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
				<ul>
					<li>
						<Link href="/hotels">
							<a className="navlinks">Hotels</a>
						</Link>
					</li>
					<li>
						<Link href="#">
							<a className="navlinks">Reviews</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a className="navlinks">Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
