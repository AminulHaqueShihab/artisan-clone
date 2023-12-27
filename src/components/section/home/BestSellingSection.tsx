import ProductCard from '@/components/cards/product-card/ProductCard';
import Column from '@/components/util/Column';
import { Grid, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type BestSellingSectionProps = {};

const BestSellingSection: FC<BestSellingSectionProps> = ({}) => {
	return (
		<Column gap='2rem' alignItems='center' w='full'>
			<Heading fontSize='3rem'>Best Selling</Heading>
			<Grid
				w='full'
				gap={2}
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr ',
					lg: '1fr 1fr 1fr 1fr ',
				}}
			>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</Grid>
		</Column>
	);
};

export default BestSellingSection;
