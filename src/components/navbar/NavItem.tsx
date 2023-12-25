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
	useDisclosure,
	MenuGroup,
} from '@chakra-ui/react';
import { on } from 'events';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC, ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type NavItemProps = FlexProps & {
	children: ReactNode;
	title: string;
	href?: string;
	id: string;
	data?: any;
	variant?: 'menu' | 'link';
};

const NavItem: FC<NavItemProps> = ({
	children,
	title,
	id,
	href,
	data,
	variant,
	...props
}) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<string | null>(null);

	const handleOpen = (categoryId: string) => {
		setIsOpen(categoryId);
	};

	const handleClose = () => {
		setIsOpen(null);
	};

	return (
		<>
			{variant === 'link' && (
				<Button
					px='0rem'
					fontWeight={800}
					fontSize='1rem'
					variant='link'
					_hover={{ color: 'primary' }}
					color='text'
				>
					{title}
				</Button>
			)}
			{variant === 'menu' && (
				<Menu isOpen={isOpen === id} onClose={handleClose} gutter={0}>
					<MenuButton
						as={Button}
						px='0rem'
						position={'relative'}
						bg='transparent'
						fontWeight='800'
						fontSize='1rem'
						_focusVisible={{ outline: 'none' }}
						_hover={{ bg: 'transparent', color: 'primary' }}
						onClick={() => handleOpen(id)}
						onMouseEnter={() => handleOpen(id)}
						onMouseLeave={handleClose}
						rightIcon={<FaChevronDown />}
						_active={{ bg: 'transparent' }}
					>
						{title}
					</MenuButton>
					<MenuList
						color='subCategory'
						borderRadius={0}
						onMouseEnter={() => handleOpen(id)}
						onMouseLeave={handleClose}
					>
						{data?.map((item: any) => (
							<MenuItem>{item}</MenuItem>
						))}
					</MenuList>
				</Menu>
			)}
		</>
	);
};

export default NavItem;
