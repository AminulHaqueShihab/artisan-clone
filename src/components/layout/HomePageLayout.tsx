import { Flex } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import StickyNav from '../navbar/StickyNav';

type HomePageLayoutProps = {
	children: React.ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children, ...props }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 200;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{scrolled ? (
				<StickyNav position='sticky' top='0' zIndex={'sticky'} />
			) : (
				<Navbar zIndex={6} />
			)}
			<Body>{children}</Body>
		</>
	);
};

export default HomePageLayout;
