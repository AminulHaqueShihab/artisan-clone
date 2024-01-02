import { Divider, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';
import Login from './login/Login';
import Register from './register/Register';
import { redirect } from 'next/dist/server/api-utils';

type AuthSectionProps = {};

const AuthSection: FC<AuthSectionProps> = ({}) => {
	return (
		<Grid
			templateColumns='1fr 1fr'
			w='full'
			// gap={10}
			py='3rem'
			// bg='yellow'
		>
			<Login borderRight='1px solid' borderColor='gray.100' />
			<Register />
		</Grid>
	);
};

export default AuthSection;
