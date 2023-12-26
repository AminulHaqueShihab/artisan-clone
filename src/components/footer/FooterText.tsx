import { Text, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type FooterTextProps = TextProps & {
	children: ReactNode;
};

const FooterText: FC<FooterTextProps> = ({ children, ...props }) => {
	return (
		<Text
			fontSize='0.875rem'
			textAlign={{ base: 'center', md: 'unset'}}
			fontWeight='500'
			{...props}
		>
			{children}
		</Text>
	);
};

export default FooterText;
