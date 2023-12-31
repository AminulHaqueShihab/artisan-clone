import ModelCard from '@/components/cards/ModelCard';
import { modelsData } from '@/components/data/DemographicData';
import { Flex, Grid, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type ModelsSectionProps = {};

const ModelsSection: FC<ModelsSectionProps> = ({}) => {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<Grid
			templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
			w='full'
			position='relative'
			gap={3}
			justifyContent='center'
			alignItems='center'
			flex={1}
		>
			{modelsData.map(model => (
				<ModelCard src={model.image} alt={model.alt} />
			))}
		</Grid>
	);
};

export default ModelsSection;
