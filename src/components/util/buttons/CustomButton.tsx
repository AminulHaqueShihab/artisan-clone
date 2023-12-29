import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomButtonProps = ButtonProps & {
	variant?: 'demographic' | 'add-to-cart' | 'key-cap' | 'bnw';
	label: string;
};

const CustomButton: FC<CustomButtonProps> = ({ variant, label, ...props }) => {
	return (
		<>
			{variant === 'demographic' && (
				<Button
					w='full'
					bg='white'
					size='lg'
					_hover={{ bg: 'black', color: 'white' }}
					color='text'
					borderRadius='0rem'
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'add-to-cart' && (
				<Button
					w='full'
					bg='footer'
					_hover={{ bg: 'primary' }}
					color='white'
					borderRadius='0rem'
					{...props}
				>
					{label}
				</Button>
			)}
			{variant === 'key-cap' && (
				<Flex
					position='relative'
					display='inline-block'
					margin='20px'
					_after={{
						content: '""',
						h: '100%',
						w: '100%',
						p: '4px',
						position: 'absolute',
						bottom: '-15px',
						left: '-4px',
						zIndex: '-1',
						bg: 'footer',
						borderRadius: '5px',
					}}
				>
					<Button
						color='white'
						fontSize='1.5rem'
						background='primary'
						// display='block'
						position='relative'
						p='15px 40px'
						textShadow='0px 1px 0px #000'
						dropShadow={{ color: '#000', offX: '0px', offY: '1px' }}
						boxShadow='inset 0 1px 0 #c4ffc8, 0 10px 0 #076a00'
						borderRadius='5px'
						_active={{
							top: '10px',
							bg: '#24e741',
							boxShadow: 'inset 0 1px 0 #c4ffc8, inset 0 -3px 0 #076a00',
							textShadow: '0px 0.5px 0px #000',
						}}
						_focusVisible={{
							border: 'none',
						}}
						_hover={{
							bg: 'primary',
						}}
						{...props}
					>
						{label}
					</Button>
				</Flex>
			)}
			{variant === 'bnw' && (
				<Button
					color='black'
					fontSize='1.5rem'
					background='white'
					border='4px solid #000'
					boxShadow='inset 0 0 0 #000, 4px 4px 0 #000'
					borderRadius='0px'
					_hover={{
						bg: 'white',
						boxShadow: 'inset 0 0 0 transparent, 0px 0px 0 transparent',
					}}
					transition='all 0.3s ease-in-out'
					{...props}
				>
					{label}
				</Button>
			)}
		</>
	);
};

export default CustomButton;
