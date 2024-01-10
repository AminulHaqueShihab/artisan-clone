'use client';
import { productData } from '@/components/data/ProductData';
import InfoReviewSection from '@/components/section/product/InfoReviewSection';
import ProductViewSection from '@/components/section/product/ProductViewSection';
import Column from '@/components/util/Column';
import { NextPage } from 'next';
import React from 'react';

type ProductPageProps = {
	params: { id: string };
};

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
	const { id } = params;
	const data = productData?.doc?.find(product => product.id === id);
	return (
		<Column alignItems='center' w='full'>
			<ProductViewSection data={data} />
			<InfoReviewSection />
		</Column>
	);
};

export default ProductPage;
