import {
	Box,
	BoxProps,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { layout, symbol } from '@/lib/config';
import CustomIconButton from '../util/buttons/CustomIconButton';
import NavTopSection from './NavTopSection';
import NavBottomSection from './NavBottomSection';
import StickyNav from './StickyNav';
import { motion } from 'framer-motion';

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
