import ProductCard from '@/components/cards/product-card/ProductCard';
import Column from '@/components/util/Column';
import SectionHeading from '@/components/util/headings/SectionHeading';
import { Grid, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type BestSellingSectionProps = {};

const BestSellingSection: FC<BestSellingSectionProps> = ({}) => {
	return (
		<Column gap='2rem' alignItems='center' w='full'>
			<SectionHeading title='Best Selling' />
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
