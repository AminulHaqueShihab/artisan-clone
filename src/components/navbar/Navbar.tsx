import { BoxProps, Divider, Flex } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import NavTopSection from './NavTopSection';
import NavBottomSection from './NavBottomSection';

type NavbarProps = BoxProps & {};

const Navbar: FC<NavbarProps> = ({ ...props }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<Flex direction='column' {...props} bg='white'>
				<NavTopSection />
				<Divider />
				<NavBottomSection />
				<Divider />
			</Flex>
		</>
	);
};

export default Navbar;
