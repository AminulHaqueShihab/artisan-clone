import CustomIconButton from '@/components/util/buttons/CustomIconButton';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';

type ProductIconButtonsProps = {
	isHovered: boolean;
};

const ProductIconButtons: FC<ProductIconButtonsProps> = ({ isHovered }) => {
	return (
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
	);
};

export default ProductIconButtons;
