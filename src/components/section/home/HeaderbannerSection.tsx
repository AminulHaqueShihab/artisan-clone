import { Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import HeaderCarousel from '@/components/carousel-items/HeaderCarousel';
import CoverImage from '@/components/images/CoverImage';

const data = {
	doc: [
		{
			id: 1,
			image:
				'https://artisanclick.com/wp-content/uploads/2020/02/new-winter-collection.cover_.jpg',
			title: 'New Winter Collection',
			alt: 'New Winter Collection',
		},
		{
			id: 2,
			image:
				'https://artisanclick.com/wp-content/uploads/2020/02/Artisan-31-greeting_0cover-copy.jpg',
			title: 'Happy New Year',
			alt: 'Happy New Year',
		},
	],
};

const HeadBannerSection = ({}) => {
	return (
		<Flex bg='white' w='full' maxW='1280px' justify='center'>
			<HeaderCarousel data={data?.doc || []} />
		</Flex>
	);
};

export default HeadBannerSection;
