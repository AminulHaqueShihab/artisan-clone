import Column from '@/components/util/Column';
import { Box, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ImageContainerProps = {
	data?: any;
	isHovered?: boolean;
};

const ImageContainer: FC<ImageContainerProps> = ({ isHovered, data }) => {
	return (
		<Column
			position='absolute'
			top={isHovered ? '-100%' : '0'}
			transition='top 1s ease-out'
			w='100%'
			h='200%'
			bg='blue'
		>
			<Box w='100%' h='50%' position='relative' overflow='hidden'>
				<Image
					src={data?.image ? data.image : '/images/placeholder.png'}
					alt='Image 1'
					width='100%'
					height='100%'
					objectFit='cover'
					position='absolute'
					top='0'
					left='0'
				/>
			</Box>
			<Box w='100%' h='50%' position='relative' overflow='hidden'>
				<Image
					src={data?.images[0] ? data.images[0] : '/images/placeholder.png'}
					alt='Image 2'
					width='100%'
					height='100%'
					objectFit='cover'
					position='absolute'
					top='0'
					left='0'
				/>
			</Box>
		</Column>
	);
};

export default ImageContainer;
