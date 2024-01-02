import { Box, Image, ImageProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SwiperProductImageProps = ImageProps & {
	src?: string;
};

const SwiperProductImage: FC<SwiperProductImageProps> = ({ src }) => {
	return (
		<Box flex={1}>
			<Image h='100%' w='100%' objectFit='cover' src={src ? src : ''} />
		</Box>
	);
};

export default SwiperProductImage;
