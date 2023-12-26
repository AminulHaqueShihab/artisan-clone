import { Flex } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import StickyNav from '../navbar/StickyNav';
import NavTopSection from '../navbar/NavTopSection';
import Footer from '../footer/Footer';
import Column from '../util/Column';

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
				<>
					<NavTopSection
						display={{ base: 'block', lg: 'none' }}
						position='sticky'
						top='0'
						zIndex={'sticky'}
					/>
					<StickyNav
						display={{ base: 'none', lg: 'block' }}
						position='sticky'
						top='0'
						zIndex={'sticky'}
					/>
				</>
			) : (
				<Navbar zIndex={6} />
			)}
			<Body>{children}</Body>
			<Footer />
		</>
	);
};

export default HomePageLayout;
