import { Flex, Grid, GridProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

type ProductViewSectionProps = GridProps & {
	data?: any;
};

const ProductViewSection: FC<ProductViewSectionProps> = ({
	data,
	...props
}) => {
	return (
		<Grid
			templateColumns={{ base: '1fr', lg: '6fr 5fr' }}
			w='full'
			// bg='yellow'
			justifyContent='center'
			gap={10}
			{...props}
		>
			<ProductImage />
			<ProductDetails />
		</Grid>
	);
};

export default ProductViewSection;
