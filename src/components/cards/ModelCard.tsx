import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ModelCardProps = {
	src?: string;
	alt?: string;
};

const ModelCard: FC<ModelCardProps> = ({ src, alt }) => {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<Flex
			overflow='hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			h='100%'
			w='100%'
			flex={1}
		>
			<Image
				h='100%'
				w='100%'
				cursor='pointer'
				src={src ? src : ''}
				objectFit='cover'
				alt={alt ? alt : ''}
				transition='transform 0.3s ease-in-out'
				transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
			/>
		</Flex>
	);
};

export default ModelCard;
