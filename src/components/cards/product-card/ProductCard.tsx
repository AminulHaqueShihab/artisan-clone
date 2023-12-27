import Column from '@/components/util/Column';
import CustomButton from '@/components/util/CustomButton';
import CustomIconButton from '@/components/util/CustomIconButton';
import { symbol } from '@/lib/config';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';

type ProductCardProps = {};

const ProductCard: FC<ProductCardProps> = ({}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Column
			gap={2}
			cursor={isHovered ? 'pointer' : 'default'}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Column
				position='relative'
				flex={1}
				zIndex={0}
				minH={{ base: '520px', lg: '360px' }}
				h='full'
				w='full'
				bg='red'
				overflow='hidden'
			>
				<Flex
					border='1px solid black'
					position='absolute'
					top={isHovered ? '2' : '-20'}
					transition={'top 0.3s ease-in'}
					left={2}
					zIndex={6}
					bg='white'
				
				>
					<CustomIconButton
						icon={<FaHeart size='1.2rem' />}
						aria-label='Add to Whishlist'
						variant='productIcon'
					/>

					<CustomIconButton
						icon={<FaEye size='1.2rem' />}
						aria-label='View Product'
						variant='productIcon'
					/>
				</Flex>
				<Column
					position='absolute'
					top={isHovered ? '-100%' : '0'}
					transition='top 0.3s ease-in'
					w='100%'
					h='200%'
					bg='blue'
				>
					<Image
						src={'/images/products/product1-1.jpg'}
						alt='Image 1'
						w='100%'
						h='100%'
						objectFit='cover'
					/>
					<Image
						src={'/images/products/product1-2.jpg'}
						alt='Image 2'
						w='100%'
						h='100%'
						objectFit='cover'
					/>
				</Column>
				<CustomButton
					label='View Details'
					variant='add-to-cart'
					position='absolute'
					bottom={isHovered ? '0' : '-100'}
					zIndex={3}
					transition={'bottom 0.3s ease-in'}
				/>
			</Column>
			<Column
				gap={3}
				// position='absolute'
				bg='white'
				w='full'
				// bottom={0}
				textAlign='center'
				zIndex={6}
				p={3}
			>
				<Text fontSize='0.9rem' color='grey'>
					Winter, Jacket, Winter Mens
				</Text>
				<Text fontSize='1rem' color='text' fontWeight='700'>
					Men’s Jacket
				</Text>
				<Text fontSize='1.1rem' color='primary' fontWeight='800'>
					{symbol.TAKA} 2390
				</Text>
			</Column>
		</Column>
	);
};

export default ProductCard;
