import ModelCard from '@/components/cards/ModelCard';
import { Flex, Grid, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type ModelsSectionProps = {};

const ModelsSection: FC<ModelsSectionProps> = ({}) => {
	const [isHovered, setIsHovered] = React.useState(false);

  const ModelsData = [
		{
			id: '1',
			image: '/images/models/male-model-1.jpg',
			alt: 'Male Model banner',
      href: '/',
		},
		{
			id: '2',
			image: '/images/models/female-model-1.jpg',
			alt: 'Female Model banner',
      href: '/',
		},
	];

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
			{ModelsData.map(model => (
          <ModelCard src={model.image} alt={model.alt} />
       
			))}
		</Grid>
	);
};

export default ModelsSection;
