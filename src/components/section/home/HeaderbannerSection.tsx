import { Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import HeaderCarousel from '@/components/carousel-items/HeaderCarousel';
import CoverImage from '@/components/images/CoverImage';

const HeadBannerSection = ({}) => {
	const banners = [
		{
			id: 1,
			image: '/images/banners/new-winter-collection.cover_.jpg',
			title: 'New Winter Collection',
			alt: 'New Winter Collection',
		},
		{
			id: 2,
			image: '/images/banners/gift-vouchers-20-off.png-cover.1.png',
			title: 'Gift Vouchers 20% Off',
			alt: 'Gift Vouchers 20% Off',
		},
	];
	return (
		<Flex
			bg='white'
      w='full'
      maxW='1280px'
      justify='center'
		>
			<HeaderCarousel data={banners} />
		</Flex>
	);
};

export default HeadBannerSection;
