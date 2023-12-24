import {
	TextProps,
	Text,
	Flex,
	FlexProps,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type NavItemProps = FlexProps & {
	children: ReactNode;
	title: string;
	href?: string;
};

const NavItem: FC<NavItemProps> = ({ children, title, href, ...props }) => {
	// const dispatch = useAppDispatch();
	return (
		<Menu>
			<MenuButton
				as={Button}
				bg='transparent'
				_hover={{ bg: 'transparent' }}
				rightIcon={<FaChevronDown />}
        
			>
				{title}
			</MenuButton>
			<MenuList>
				<MenuItem>Download</MenuItem>
				<MenuItem>Create a Copy</MenuItem>
				<MenuItem>Mark as Draft</MenuItem>
				<MenuItem>Delete</MenuItem>
				<MenuItem>Attend a Workshop</MenuItem>
			</MenuList>
		</Menu>
		// <Flex
		// 	as={Link}
		// 	href={href ? href : '/'}
		// 	userSelect='none'
		// 	cursor='pointer'
		// 	fontWeight='600'
		// 	fontSize='1rem'
		// 	letterSpacing='2px'
		// 	{...props}
		// >
		// 	{children}
		// </Flex>
	);
};

export default NavItem;
