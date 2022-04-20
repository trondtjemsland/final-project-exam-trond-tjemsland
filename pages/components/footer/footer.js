import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
	return (
		<div className="footer_wrapper">
			<div className="footer_box1">
				<div>
					<h3 className="footer_heading">holidaze</h3>
				</div>
				<div>
					<p>Faq</p>
					<Link href="/admin">
						<a className="footerlinks">Admin</a>
					</Link>
				</div>
			</div>
			<div className="footer_box2">
				<Image src="/footerLogo.svg" width="80px" height="200px"></Image>
			</div>
		</div>
	);
}

export default Footer;
