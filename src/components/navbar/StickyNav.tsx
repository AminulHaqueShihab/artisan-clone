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

type StickyNavProps = BoxProps & {};

const StickyNav: FC<StickyNavProps> = ({ ...props }) => {
	return (
		<Box
			as={motion.nav}
			bg='white'
			initial={{ opacity: 0 }}
			animate={{ opacity: 100 }}
			transition={{ duration: '0.5s', ease: 'ease-in-out' } as any}
			{...props}
		>
			<Grid
				templateColumns='1fr 1fr 1fr'
				justifyContent='center'
				p={{ base: '1rem 1rem', lg: '1.25rem 1rem' }}
				maxW={layout.MAX_WIDTH}
				mx='auto'
			>
				<Flex justify='flex-start' alignItems='center'>
					<Heading fontSize='1.5rem'>ARTISAN</Heading>
				</Flex>
				<MenuItems justify='center' />
				<Flex justify='flex-end'>
					<Flex alignItems='center'>
						<CustomIconButton
							icon={<IoSearch size='24px' />}
							aria-label='Search'
						/>
						<CustomIconButton
							icon={<VscAccount size='1.5rem' />}
							display={{ base: 'none', lg: 'flex' }}
							aria-label='Account'
						/>
						<CustomIconButton
							icon={<FaRegHeart size='1.5rem' />}
							variant='badge'
							display={{ base: 'none', lg: 'flex' }}
							aria-label='Whishlist'
						/>
						<CustomIconButton
							icon={<AiOutlineShoppingCart size='1.5rem' />}
							variant='badge'
							aria-label='Cart'
						/>
					</Flex>
				</Flex>
			</Grid>
		</Box>
	);
};

export default StickyNav;
