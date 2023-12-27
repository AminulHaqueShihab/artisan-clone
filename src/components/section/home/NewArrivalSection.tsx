import ProductCard from '@/components/cards/product-card/ProductCard';
import { categoryTabData } from '@/components/data/CategoryTabData';
import CategoryTab from '@/components/tabs/CategoryTab';
import Column from '@/components/util/Column';
import { Grid, Heading } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type NewArrivalSectionProps = {};

const NewArrivalSection: FC<NewArrivalSectionProps> = ({}) => {
	return (
		<Column gap='2rem' alignItems='center' w='full'>
			<Heading fontSize='3rem'>New Arrivals</Heading>
			<CategoryTab data={categoryTabData} />
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
				<ProductCard />
				<ProductCard />
			</Grid>
		</Column>
	);
};

export default NewArrivalSection;
