import {
	Box,
	BoxProps,
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
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { layout, symbol } from '@/lib/config';
import CustomIconButton from '../util/buttons/CustomIconButton';
import NavSearch from './NavSearch';
import MenuItems from './MenuItems';
import { motion } from 'framer-motion';
import Logo from './Logo';
import LoginPopover from '../popovers/LoginPopover';
import Cart from '../cart/Cart';

type StickyNavProps = BoxProps & {
	isScrolled?: boolean;
};

const StickyNav: FC<StickyNavProps> = ({isScrolled, ...props }) => {
	const leftItems = (
		<Flex justify='flex-start' alignItems='center'>
			<Logo maxH='3rem' />
		</Flex>
	);
	const rightItems = (
		<Flex justify='flex-end'>
			<Flex alignItems='center'>
				<CustomIconButton icon={<IoSearch size='24px' />} aria-label='Search' />
				<LoginPopover
					button={
						<CustomIconButton
							icon={<VscAccount size='1.5rem' />}
							display={{ base: 'none', lg: 'flex' }}
							aria-label='Account'
							h={'1rem'}
						/>
					}
				/>

				<CustomIconButton
					icon={<FaRegHeart size='1.5rem' />}
					variant='badge'
					display={{ base: 'none', lg: 'flex' }}
					aria-label='Wishlist'
				/>
				<Cart
					button={
						<CustomIconButton
							icon={<AiOutlineShoppingCart size='1.5rem' />}
							variant='badge'
							aria-label='Cart'
						/>
					}
				/>
			</Flex>
		</Flex>
	);
	return (
		<Box
			as={motion.nav}
			bg='white'
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -20 }}
			transition={{ duration: 0.3 } as any}
			{...props}
		>
			<Grid
				templateColumns='1fr 1fr 1fr'
				justifyContent='center'
				p={{ base: '1rem 1rem', lg: '1.25rem 1rem' }}
				maxW={layout.MAX_WIDTH}
				mx='auto'
			>
				{leftItems}
				<MenuItems justify='center' />
				{rightItems}
			</Grid>
		</Box>
	);
};

export default StickyNav;
