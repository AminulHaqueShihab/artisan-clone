import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import HeadBannerSection from '../section/home/HeaderbannerSection';
import DemographicSection from '../section/home/DemographicSection';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	return (
		<Flex direction='column' w='full' zIndex={0} gap='3rem'>
			<HeadBannerSection />
			<DemographicSection />
		</Flex>
	);
};

export default HomePage;
