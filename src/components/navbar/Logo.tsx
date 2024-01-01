import { Image, ImageProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type LogoProps = ImageProps & {};

const Logo: FC<LogoProps> = ({ ...props }) => {
	return (
		<Link href='/'>
			<Image
				src='images/logo/logo.png'
				userSelect='none'
				alt='logo'
				cursor='pointer'
				zIndex={5}
				{...props}
			/>
		</Link>
	);
};

export default Logo;
