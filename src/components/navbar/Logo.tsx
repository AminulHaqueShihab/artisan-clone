import { Image, ImageProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type LogoProps = ImageProps & {};

const Logo: FC<LogoProps> = ({ ...props }) => {
	return <Image src='images/logo/logo.png' alt='logo' {...props} />;
};

export default Logo;
