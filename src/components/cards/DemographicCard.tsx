import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import CustomButton from '../util/buttons/CustomButton';

type DemographicCardProps = FlexProps & {
	data?: any;
};

const DemographicCard: FC<DemographicCardProps> = ({ data, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Flex
			direction='column'
			cursor='pointer'
			flex={1}
			position='relative'
			overflow='hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			bgColor='white'
			{...props}
		>
			<Image
				maxH='350px'
				src={data?.image ? data.image : ''}
				objectFit='cover'
				transition='transform 0.5s ease-in-out'
				transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
				w='100%'
				h='100%'
				userSelect='none'
			/>
			<CustomButton
				position='absolute'
				top='85%'
				left={{ base: '50%', lg: '35%' }}
				transform='translate(-50%, -50%)'
				w={{ base: '70%', lg: '50%' }}
				transition='all 0.3s ease-in-out'
				variant='demographic'
				label={data?.title ? data.title : 'N/A'}
			/>
		</Flex>
	);
};

export default DemographicCard;
