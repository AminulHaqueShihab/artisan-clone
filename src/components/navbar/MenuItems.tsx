import { CATEGORIES } from '@/components/data/NavItemsdata';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavItem from './NavItem';

type MenuItemsProps = FlexProps & {};

const MenuItems: FC<MenuItemsProps> = ({ ...props }) => {
	return (
		<Flex gap={7} alignItems='center' justify='space-between' wrap={{base: 'wrap',lg:'nowrap'}} px={2} {...props}>
			{CATEGORIES.map(category => (
				<>
					{category.subcategories ? (
						<NavItem
							key={category.id}
							id={category.id}
							fontSize='0.9rem'
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
							fontSize='0.9rem'
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
};

export default MenuItems;
