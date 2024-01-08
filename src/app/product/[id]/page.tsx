'use client';
import InfoReviewSection from '@/components/section/product/InfoReviewSection';
import ProductViewSection from '@/components/section/product/ProductViewSection';
import Column from '@/components/util/Column';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC } from 'react';

type ProductPageProps = {
	params: { id: string };
};

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	const { id } = params;
	return (
		<Column alignItems='center' w='full'>
			<ProductViewSection />
			<InfoReviewSection />
		</Column>
	);
};

export default ProductPage;
