import DemographicCard from '@/components/cards/DemographicCard';
import { demographicData } from '@/components/data/DemographicData';
import Column from '@/components/util/Column';
import CustomButton from '@/components/util/buttons/CustomButton';
import { Button, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

type DemographicSectionProps = {};

const DemographicSection: FC<DemographicSectionProps> = ({}) => {
	return (
		<Column gap='3rem' alignItems='center' w='full'>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }}
				maxW='1280px'
				gap='1rem'
				w='full'
			>
				{demographicData.map((item, index) => (
					<DemographicCard data={item} bg={'yellow'} />
				))}
			</Grid>
			<CustomButton variant='key-cap' label='Shop Now' />
			{/* <Button variant='primary' w='8rem' size='lg'>
				Shop Now
			</Button> */}
		</Column>
	);
};

export default DemographicSection;
