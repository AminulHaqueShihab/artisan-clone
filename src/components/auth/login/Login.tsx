import Column from '@/components/util/Column';
import CustomInput from '@/components/util/input/CustomInput';
import { Button, Checkbox, Flex, FlexProps, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';
import AuthHeading from '../AuthHeading';

type LoginProps = FlexProps & {};

const Login: FC<LoginProps> = ({ ...props }) => {
	return (
		<Column px='4rem' gap={10} {...props}>
			<Column p='3rem' gap={5} bg='box'>
				<AuthHeading title='Login' />
				<CustomInput label='Username or email address' required />
				<CustomInput label='Password' required />
				<Button variant='primary'>Log in</Button>
			</Column>
			<Flex justify='space-between' alignItems='center' color='subCategory'>
				<Checkbox colorScheme='green'>
					Remember me
				</Checkbox>
				<Button
					variant='link'
					_hover={{ color: 'primary' }}
					color='subCategory'
				>
					Lost your password?
				</Button>
			</Flex>
		</Column>
	);
};

export default Login;
