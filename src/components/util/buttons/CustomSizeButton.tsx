import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomSizeButtonProps = ButtonProps & {
	label: string;
};

const CustomSizeButton: FC<CustomSizeButtonProps> = ({ label, ...props }) => {
	return (
		<Button
    size='sm'
			variant='outline'
			borderColor='gray.400'
      color='gray.600'
      fontWeight='400'
			_hover={{
				bg: 'white',
				boxShadow: '0 0 2px 2px gray',
			}}
		>
			{label}
		</Button>
	);
};

export default CustomSizeButton;
