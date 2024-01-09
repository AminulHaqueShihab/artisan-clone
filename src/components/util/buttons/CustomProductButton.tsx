import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

type CustomProductButtonProps = {
	isHovered: boolean;
	label: string;
};

const CustomProductButton: FC<CustomProductButtonProps> = ({
	isHovered,
	label,
	...props
}) => {
	return (
		<Button
			w='full'
			bg='footer'
			_hover={{ bg: 'primary' }}
			color='white'
			borderRadius='0rem'
			position='absolute'
			bottom={isHovered ? '0' : '-100'}
			zIndex={3}
			transition={'bottom 0.3s ease-in'}
			{...props}
		>
      {label}
    </Button>
	);
};

export default CustomProductButton;
