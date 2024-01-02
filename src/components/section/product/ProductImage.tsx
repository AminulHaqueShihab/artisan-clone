import SingleProductCarousel from '@/components/carousel-items/SingleProductCarousel';
import Column from '@/components/util/Column';
import { Flex, GridItem } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductImageProps = {};

const ProductImage: FC<ProductImageProps> = ({}) => {

const images = [
	'https://swiperjs.com/demos/images/nature-1.jpg',
	'https://swiperjs.com/demos/images/nature-2.jpg',
	'https://swiperjs.com/demos/images/nature-3.jpg',
	'https://swiperjs.com/demos/images/nature-4.jpg',
	'https://swiperjs.com/demos/images/nature-5.jpg',
	'https://swiperjs.com/demos/images/nature-6.jpg',
];

	return (
		<Flex w='full'>
			<SingleProductCarousel images={images}/>
		</Flex>
	);
};

export default ProductImage;
