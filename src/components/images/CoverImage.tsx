import React, { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { CustomImageProps } from './types';

const CoverImage: FC<CustomImageProps> = ({ src, alt, ...props }) => {
  return (
    <Image
      objectFit='cover'
      src={src ? src : ''}
      alt={alt}
      userSelect='none'
      {...props}
    />
  );
};

export default CoverImage;
