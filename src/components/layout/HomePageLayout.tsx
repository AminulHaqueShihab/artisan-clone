'use client';
import { Flex } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';
import StickyNav from '../navbar/StickyNav';
import NavTopSection from '../navbar/NavTopSection';
import Footer from '../footer/Footer';
import Column from '../util/Column';
import _debounce from 'lodash/debounce';

type HomePageLayoutProps = {
	children: React.ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children, ...props }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = _debounce(() => {
			const scrollThreshold = 100;
			setScrolled(window.scrollY > scrollThreshold);
			// const isScrolled = window.scrollY >= 150;
			// setScrolled(isScrolled);
		}, 100);

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
						display={{ base: 'block', xl: 'none' }}
						position='sticky'
						top='0'
						zIndex={999}
					/>
					<StickyNav
						isScrolled={scrolled}
						display={{ base: 'none', xl: 'block' }}
						position='sticky'
						top='0'
						zIndex={99}
					/>
				</>
			) : (
				<Navbar zIndex={6} />
			)}
			{children}
			{/* <Body>{children}</Body> */}
			<Footer />
		</>
	);
};

export default HomePageLayout;
