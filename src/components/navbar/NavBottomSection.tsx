import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/components/data/NavItemsdata';
import MenuItems from './MenuItems';

type NavBottomSectionProps = FlexProps & {};

const NavBottomSection: FC<NavBottomSectionProps> = ({ ...props }) => {
	const menuItems = (
		<Flex maxW='1320px' mx='auto' gap={8} alignItems='center' px={2}>
			{CATEGORIES.map(category => (
				<>
					{category.subcategories ? (
						<NavItem
							key={category.id}
							id={category.id}
							href='/'
							variant='menu'
							data={category.subcategories}
							title={category.name}
						>
							{category.name}
						</NavItem>
					) : (
						<NavItem
							key={category.id}
							id={category.id}
							href='/'
							variant='link'
							title={category.name}
						>
							{category.name}
						</NavItem>
					)}
				</>
			))}
		</Flex>
	);

	return (
		<Flex
			py='0.75rem'
			display={{ base: 'none', lg: 'flex' }}
			justify='center'
			zIndex={99}
			{...props}
		>
			{/* {menuItems} */}
			<MenuItems maxW='1320px' mx='auto' />
		</Flex>
	);
};

export default NavBottomSection;
