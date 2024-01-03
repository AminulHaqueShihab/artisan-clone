import SingleProductCarousel from '@/components/carousel-items/SingleProductCarousel';
import Column from '@/components/util/Column';
import CustomIconButton from '@/components/util/buttons/CustomIconButton';
import { Box, Flex, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';

type ProductImageProps = {};

const ProductImage: FC<ProductImageProps> = ({}) => {
	const images = [
		'https://i.dummyjson.com/data/products/15/1.jpg',
		'https://i.dummyjson.com/data/products/15/2.jpg',
		'https://i.dummyjson.com/data/products/15/3.jpg',
		'https://i.dummyjson.com/data/products/15/4.jpg',
		'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
	];

	return (
		<Flex w='full' justify='center'>
			<SingleProductCarousel images={images} />
		</Flex>
	);
};

export default ProductImage;
