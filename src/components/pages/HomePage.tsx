'use client';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import HeadBannerSection from '../section/home/HeaderbannerSection';
import DemographicSection from '../section/home/DemographicSection';
import SaleBannerSection from '../section/home/SaleBannerSection';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full' zIndex={0} gap='3rem'>
			<HeadBannerSection />
			<DemographicSection />
			<SaleBannerSection />
		</Flex>
	);
};

export default HomePage;
