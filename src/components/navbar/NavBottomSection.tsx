import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';
import { motion } from 'framer-motion';
import { CATEGORIES } from '@/components/data/NavItemsdata';
import MenuItems from './MenuItems';
import { layout } from '@/lib/config';

type NavBottomSectionProps = FlexProps & {};

const NavBottomSection: FC<NavBottomSectionProps> = ({ ...props }) => {
	
	const menuItems = (
		<Flex maxW={layout.MAX_WIDTH} mx='auto' gap={8} wrap={{base:'wrap', lg:'nowrap'}} alignItems='center' px={2}>
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
			zIndex={3}
			{...props}
		>
			{/* {menuItems} */}
			<MenuItems maxW={layout.MAX_WIDTH} mx='auto' />
		</Flex>
	);
};

export default NavBottomSection;
