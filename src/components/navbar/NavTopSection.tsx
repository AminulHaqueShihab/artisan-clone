import {
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
import NavSearch from './NavSearch';

type NavTopSectionProps = {};

const NavTopSection: FC<NavTopSectionProps> = ({}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Grid
			templateColumns='1fr 1fr 1fr'
			justifyContent='center'
			p='1.25rem 1.875rem'
			maxW='1320px'
			mx='auto'
		>
			<NavSearch />

			<Flex
				// bg={'yellow'}
				justifyContent='center'
				alignItems='center'
			>
				<Heading fontSize='3rem'>ARTISAN</Heading>
			</Flex>

			<Flex
				//  bg='white'
				justify='flex-end'
			>
				<Flex gap={3} alignItems='center'>
					<CustomIconButton
						icon={<VscAccount size='1.5rem' />}
						aria-label='Account'
					/>
					<CustomIconButton
						icon={<FaRegHeart size='1.5rem' />}
						aria-label='Whishlist'
					/>
					<CustomIconButton
						icon={<AiOutlineShoppingCart size='1.5rem' />}
						aria-label='Cart'
					/>

					<Text fontSize='1.5rem' fontWeight='600'>
						{symbol.TAKA} 420
					</Text>
				</Flex>
			</Flex>
		</Grid>
	);
};

export default NavTopSection;
