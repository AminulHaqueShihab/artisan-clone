import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';
import { motion } from 'framer-motion';

type NavBottomSectionProps = {};

const NavBottomSection: FC<NavBottomSectionProps> = ({}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS
	const menuItems = (
		<Flex display={{ base: 'none', lg: 'flex' }} gap={4} align='center' px={2}>
			<NavItem href='/' title='WINTER'>
				WINTER
			</NavItem>
			<NavItem href='/' title='WINTER MEN'>
				WINTER MEN
			</NavItem>
			<NavItem href='/' title='WINTER LADIES'>
				WINTER LADIES
			</NavItem>
			<NavItem href='/' title='WINTER KIDS'>
				WINTER KIDS
			</NavItem>
			<NavItem href='/' title='GIFT VOUCHAR'>
				GIFT VOUCHAR
			</NavItem>
			<NavItem href='/' title='SUMMER'>
				SUMMER
			</NavItem>
		</Flex>
	);

	return (
		<Flex bg='red' maxW='1320px' py='1.125rem' mx='auto' justify='center'>
			{menuItems}
		</Flex>
	);
};

export default NavBottomSection;
