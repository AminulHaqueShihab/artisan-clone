import {
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
import React, { FC } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { layout, symbol } from '@/lib/config';
import CustomIconButton from '../util/CustomIconButton';
import NavTopSection from './NavTopSection';
import NavBottomSection from './NavBottomSection';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<>
			<NavTopSection />
			<Divider />
			<NavBottomSection />
		</>
	);
};

export default Navbar;
