'use client';
import ProductViewSection from '@/components/section/product/ProductViewSection';
import Column from '@/components/util/Column';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC } from 'react';

type ProductPageProps = {
	params: { id: string };
};

const ProductPage: NextPage<ProductPageProps> = ({}) => {
	return (
		<Column>
      <ProductViewSection />
    </Column>
	);
};

export default ProductPage;
