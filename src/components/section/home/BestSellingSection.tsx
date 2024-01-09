import ProductCard from '@/components/cards/product-card/ProductCard';
import { productData } from '@/components/data/ProductData';
import Column from '@/components/util/Column';
import SectionHeading from '@/components/util/headings/SectionHeading';
import { FlexProps, Grid, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type BestSellingSectionProps = FlexProps;

const BestSellingSection: FC<BestSellingSectionProps> = ({ ...props }) => {
	const featuredProducts = productData?.doc?.slice(0, 8);
	return (
		<Column gap='2rem' alignItems='center' w='full' {...props}>
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
				{featuredProducts?.map(product => (
					<>
						<ProductCard key={product.id} data={product} />
					</>
				))}
			</Grid>
		</Column>
	);
};

export default BestSellingSection;
