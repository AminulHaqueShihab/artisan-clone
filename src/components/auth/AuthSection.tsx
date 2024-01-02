import { Divider, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';
import Login from './login/Login';
import Register from './register/Register';
import { redirect } from 'next/dist/server/api-utils';

type AuthSectionProps = {};

const AuthSection: FC<AuthSectionProps> = ({}) => {
	return (
		<Grid
			templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
			w='full'
			// gap={10}
			py={{ base: '1rem', md: '3rem' }}
			// bg='yellow'
		>
			<Login
				borderRight={{ lg: '1px solid' }}
				borderColor={{ lg: 'gray.100' }}
			/>
			<Register />
		</Grid>
	);
};

export default AuthSection;
