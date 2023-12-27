'use client';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import HeadBannerSection from '../section/home/HeaderbannerSection';
import DemographicSection from '../section/home/DemographicSection';
import SaleBannerSection from '../section/home/SaleBannerSection';
import FeaturedProductSection from '../section/home/FeaturedProductSection';
import BestSellingSection from '../section/home/BestSellingSection';
import ModelsSection from '../section/home/ModelsSection';
import NewArrivalSection from '../section/home/NewArrivalSection';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full' zIndex={0} gap='3.5rem'>
			<HeadBannerSection />
			<DemographicSection />
			<FeaturedProductSection />
			<SaleBannerSection />
			<BestSellingSection />
			<ModelsSection />
			<NewArrivalSection />
		</Flex>
	);
};

export default HomePage;
