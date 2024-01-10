import SingleProductCarousel from '@/components/carousel-items/SingleProductCarousel';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductImageProps = {
	images?: any[];
};

const ProductImage: FC<ProductImageProps> = ({ images }) => {
	return (
		<Flex w='full' justify='center'>
			<SingleProductCarousel images={images && images} />
		</Flex>
	);
};

export default ProductImage;
