import { Box, Image, ImageProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SwiperProductImageProps = ImageProps & {
	src?: string;
};

const SwiperProductImage: FC<SwiperProductImageProps> = ({ src, ...props }) => {
	return (
		<Box h='100%' w='100%' border='1px solid' borderColor='gray.200'>
			<Image
				objectFit='cover'
				src={src ? src : ''}
				h='100%'
				w='100%'
				userSelect='none'
				cursor='pointer'
				{...props}
			/>
		</Box>
	);
};

export default SwiperProductImage;
