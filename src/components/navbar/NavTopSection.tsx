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
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMenu, IoSearch } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { layout, symbol } from '@/lib/config';
import CustomIconButton from '../util/buttons/CustomIconButton';
import NavSearch from './NavSearch';
import { motion } from 'framer-motion';
import LoginPopover from '../popovers/LoginPopover';

type NavTopSectionProps = BoxProps & {};

const NavTopSection: FC<NavTopSectionProps> = ({ ...props }) => {
	return (
		<Box
			{...props}
			as={motion.nav}
			bg='white'
			// initial={{ y: -100 }}
			// animate={{ y: 0 }}
			// transition={{ ease: 'easeIn' } as any}
		>
			<Grid
				templateColumns='1fr 1fr 1fr'
				justifyContent='center'
				p={{ base: '1rem 1rem', lg: '1.25rem 1rem' }}
				maxW={layout.MAX_WIDTH}
				mx='auto'
			>
				<NavSearch display={{ base: 'none', xl: 'flex' }} />
				<Flex
					justify='flex-start'
					alignItems='center'
					display={{ base: 'flex', xl: 'none' }}
				>
					<CustomIconButton icon={<IoMenu size='1.7rem' />} aria-label='Menu' />
				</Flex>

				<Flex
					// bg={'yellow'}
					justifyContent='center'
					alignItems='center'
				>
					<Heading fontSize={{ base: '2rem', lg: '3rem' }}>ARTISAN</Heading>
				</Flex>

				<Flex
					//  bg='white'
					justify='flex-end'
				>
					<Flex gap={2} alignItems='center'>
						<LoginPopover
							button={
								<CustomIconButton
									icon={<VscAccount size='1.5rem' />}
									display={{ base: 'none', xl: 'flex' }}
									aria-label='Account'
									h={'1rem'}
								/>
							}
						/>

						<CustomIconButton
							icon={<FaRegHeart size='1.5rem' />}
							variant='badge'
							display={{ base: 'none', xl: 'flex' }}
							aria-label='Whishlist'
						/>
						<CustomIconButton
							icon={<AiOutlineShoppingCart size='1.5rem' />}
							variant='badge'
							aria-label='Cart'
						/>

						<Text
							fontSize='1rem'
							fontWeight='700'
							display={{ base: 'none', xl: 'flex' }}
						>
							{symbol.TAKA} 420
						</Text>
					</Flex>
				</Flex>
			</Grid>
		</Box>
	);
};

export default NavTopSection;
