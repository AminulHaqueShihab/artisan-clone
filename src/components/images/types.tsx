import { ImageProps } from '@chakra-ui/react';

export type CustomImageProps = ImageProps & {
  src: string;
  alt: string;
};
