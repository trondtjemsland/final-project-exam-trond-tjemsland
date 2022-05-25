import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import AdminModal from '../admin/adminmodal/adminmodal';

function Footer() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="footer_wrapper">
			<div className="footer_box1">
				<div>
					<h3 className="footer_heading">holidaze</h3>
				</div>
				<div className="footer_links">
					<a>Faq</a>
					<Link href="/contact">
						<a className="footerlinks">Contact</a>
					</Link>
					<p onClick={() => setIsOpen(true)}>Admin</p>
					{isOpen && <AdminModal setIsOpen={setIsOpen} />}
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
				<Image
					src="/footerLogo.svg"
					width="180px"
					height="135px"
					alt="Palmtree logo of holidaze"></Image>
				<p>For educational use only</p>
			</div>
		</div>
	);
}

export default Footer;
