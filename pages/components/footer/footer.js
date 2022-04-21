import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

function Footer() {
	return (
		<div className="footer_wrapper">
			<div className="footer_box1">
				<div>
					<h3 className="footer_heading">holidaze</h3>
				</div>
				<div className="footer_links">
					<a>Faq</a>
					<Link href="/contact">
						<a className="footerlinks">Conctact</a>
					</Link>
					<Link href="/admin">
						<a className="footerlinks">Admin</a>
					</Link>
				</div>
				<div className="footer_icons">
					<Icon className="footer_icons_icon" icon="fa6-brands:instagram" />
					<Icon
						className="footer_icons_icon"
						icon="fa-brands:facebook-square"
					/>
					<Icon className="footer_icons_icon" icon="fa-brands:linkedin" />
				</div>
			</div>
			<div className="footer_box2">
				<Image src="/footerLogo.svg" width="180px" height="135px"></Image>
				<p>For educational use only</p>
			</div>
		</div>
	);
}

export default Footer;
