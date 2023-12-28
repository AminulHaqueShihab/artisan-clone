import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomButtonProps = ButtonProps & {
	variant?: 'demographic'|'add-to-cart';
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
		</>
	);
};

export default CustomButton;
