import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductTextProps = TextProps & {};

const ProductText: FC<ProductTextProps> = ({ children, ...props }) => {
	return (
		<Text fontSize='0.875rem' fontWeight='400' color='subCategory' {...props}>
			{children}
		</Text>
	);
};

export default ProductText;
