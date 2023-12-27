import DemographicCard from '@/components/cards/DemographicCard';
import { Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

type DemographicSectionProps = {};

const DemographicSection: FC<DemographicSectionProps> = ({}) => {
	const demographicData = [
		{
			image: '/images/models/man.jpg',
			title: 'Men',
		},
		{
			image: '/images/models/woman.jpg',
			title: 'Women',
		},
		{
			image: '/images/models/boy.jpg',
			title: 'Boys',
		},
		{
			image: '/images/models/girl.jpg',
			title: 'Girls',
		},
	];

	return (
		<Grid templateColumns='1fr 1fr 1fr 1fr' maxW='1280px' gap='1rem'>
			{demographicData.map((item, index) => (
				<DemographicCard image={item.image} />
			))}
		</Grid>
	);
};

export default DemographicSection;
