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
		>
			{ModelsData.map(model => (
				<Link href={model.href}>
          <ModelCard src={model.image} alt={model.alt} />
        </Link>
			))}

			{/* <Link href='/'>
				<Image
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					cursor='pointer'
					src='/images/models/female-model-1.jpg'
					transition='transform 0.3s ease-in-out'
					transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
					objectFit='cover'
					alt='Models banner'
					h='100%'
					w='100%'
				/>
			</Link> */}
		</Grid>
	);
};

export default ModelsSection;
