'use client';
import HomePageLayout from '@/components/layout/HomePageLayout';
import PageLayout from '@/components/layout/page-layout/PageLayout';
import { NumberInput } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type WishlistProps = {};

const Wishlist: NextPage<WishlistProps> = ({}) => {
	return (
		<HomePageLayout>
			<PageLayout title='Wishlist'>
        <NumberInput />
      </PageLayout>
		</HomePageLayout>
	);
};

export default Wishlist;
