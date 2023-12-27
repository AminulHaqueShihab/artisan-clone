import { Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type DemographicCardProps = FlexProps & {
	image: string;
};

const DemographicCard: FC<DemographicCardProps> = ({ image, ...props }) => {
	return (
		<Flex
			direction='column'
			position='relative'
			cursor='pointer'
      flex={1}
			bgColor='white'
			{...props}
		>
			<Image maxH='350px' src={image} objectFit='contain' userSelect='none' />
		</Flex>
	);
};

export default DemographicCard;
