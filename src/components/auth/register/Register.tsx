import Column from '@/components/util/Column';
import React, { FC } from 'react';
import AuthHeading from '../AuthHeading';
import CustomInput from '@/components/util/input/CustomInput';
import { Button, Text } from '@chakra-ui/react';

type RegisterProps = {};

const Register: FC<RegisterProps> = ({}) => {
	return (
		<Column p={{ base: '2rem 1rem', md: '3rem 4rem' }} gap={5}>
			<AuthHeading title='Register' />
			<CustomInput label='Username' required />
			<CustomInput label='Email address' required />
			<CustomInput label='Password' required />
			<Column>
				<Text color='subCategory'>
					Your personal data will be used to support your experience throughout
					this website, to manage access to your account, and for other purposes
					described in our
				</Text>
				<Button
					alignSelf='flex-start'
					variant='link'
					color='primary'
					_hover={{}}
				>
					Terms & conditions.
				</Button>
			</Column>
			<Button variant='primary'>Register</Button>
		</Column>
	);
};

export default Register;
