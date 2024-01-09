import ProductCard from '@/components/cards/product-card/ProductCard';
import { categoryTabData } from '@/components/data/CategoryTabData';
import { productData } from '@/components/data/ProductData';
import CategoryTab from '@/components/tabs/CategoryTab';
import Column from '@/components/util/Column';
import SectionHeading from '@/components/util/headings/SectionHeading';
import { Grid, Heading } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type NewArrivalSectionProps = {};

const NewArrivalSection: FC<NewArrivalSectionProps> = ({}) => {
	const featuredProducts = productData?.doc?.slice(0, 8);
	return (
		<Column gap='2rem' alignItems='center' w='full'>
			<SectionHeading title='New Arrivals' />
			<CategoryTab data={categoryTabData} />
			<Grid
				w='full'
				gap={2}
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr ',
					lg: '1fr 1fr 1fr 1fr',
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

export default NewArrivalSection;
