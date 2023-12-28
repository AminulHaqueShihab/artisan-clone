import Column from '@/components/util/Column';
import CustomButton from '@/components/util/buttons/CustomButton';
import CustomIconButton from '@/components/util/buttons/CustomIconButton';
import { symbol } from '@/lib/config';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useRef, useState } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';

type ProductCardProps = {};

const ProductCard: FC<ProductCardProps> = ({}) => {
	const [src, setSrc] = useState('/images/products/product1-1.jpg');
	const [isHovered, setIsHovered] = useState(false);
	const imgRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		if (imgRef.current) {
			console.log('Image height:', imgRef.current.height);
		}
	}, [src]);
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
				// h='100%'
				minH={{ base: '500px', md: '360px' }}
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
					transition='top 1s ease-out'
					w='100%'
					h='200%'
					bg='blue'
				>
					<Box w='100%' h='50%' position='relative' overflow='hidden'>
						<Image
							ref={imgRef}
							src={'/images/products/product1-1.jpg'}
							alt='Image 1'
							width='100%'
							height='100%'
							objectFit='cover'
							position='absolute'
							top='0'
							left='0'
						/>
					</Box>
					<Box w='100%' h='50%' position='relative' overflow='hidden'>
						<Image
							src={'/images/products/product1-3.jpg'}
							alt='Image 2'
							width='100%'
							height='100%'
							objectFit='cover'
							position='absolute'
							top='0'
							left='0'
						/>
					</Box>
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
