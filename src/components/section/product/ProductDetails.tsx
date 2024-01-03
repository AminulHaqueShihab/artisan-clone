import Column from '@/components/util/Column';
import CustomIconButton from '@/components/util/buttons/CustomIconButton';
import { Badge, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { BsGrid3X2Gap } from 'react-icons/bs';
import { symbol } from '@/lib/config';
import CustomSizeButton from '@/components/util/buttons/CustomSizeButton';

type ProductDetailsProps = {};

const ProductDetails: FC<ProductDetailsProps> = ({}) => {
	return (
		<Column w='full' p='1rem' gap={4}>
			<Flex justify='space-between' alignItems='center'>
				<Badge
					colorScheme='green'
					fontSize='0.75rem'
					py='0.25rem'
					px='1rem'
					fontWeight='800'
					// color='white'
				>
					In Stock
				</Badge>
				<Flex gap={1}>
					<CustomIconButton
						icon={<FaRegArrowAltCircleLeft size='1.5rem' />}
						aria-label='Previous'
					/>
					<CustomIconButton
						icon={<BsGrid3X2Gap size='1.5rem' />}
						aria-label='Next'
					/>

					<CustomIconButton
						icon={<FaRegArrowAltCircleRight size='1.5rem' />}
						aria-label='Next'
					/>
				</Flex>
			</Flex>
			<Heading color='text'> Boys White Puffer Jacket</Heading>
			<Text fontSize='2rem' fontWeight='700' color='primary'>
				{' '}
				{symbol.TAKA} 420
			</Text>
			<Column gap={3} fontSize='1rem' fontWeight='400'>
				<Text>Boys Puffer Jacket</Text>
				<Text>100% Polyester</Text>
				<Text>Color: Cream White</Text>
			</Column>
			<Column gap={2}>
				<Text fontSize='1rem' fontWeight='400'>
					Size
				</Text>
				<Flex gap={2} wrap='wrap'>
					<CustomSizeButton label='12-18 Months' />
					<CustomSizeButton label='18-24 Months' />
					<CustomSizeButton label='2-3 Years' />
					<CustomSizeButton label='3-4 Years' />
					<CustomSizeButton label='5-6 Years' />
				</Flex>
				<Flex gap={3}></Flex>
			</Column>
		</Column>
	);
};

export default ProductDetails;
