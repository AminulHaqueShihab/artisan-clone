import { Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ProductImage from './ProductImage';

type ProductViewSectionProps = {};

const ProductViewSection: FC<ProductViewSectionProps> = ({}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Grid templateColumns='5fr 4fr'>
			<ProductImage />
      <Text>Product Details</Text>
		</Grid>
	);
};

export default ProductViewSection;
