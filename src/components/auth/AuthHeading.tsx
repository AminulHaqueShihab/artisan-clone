import { FlexProps, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type AuthHeadingProps = FlexProps & {
	title: string;
};

const AuthHeading: FC<AuthHeadingProps> = ({ title, ...props }) => {
	return (
		<Heading color='text' gap={4} fontSize='1.25rem' {...props}>
			{title}
		</Heading>
	);
};

export default AuthHeading;
