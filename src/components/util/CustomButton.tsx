import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomButtonProps = ButtonProps & {
	variant?: 'demographic';
	label: string;
};

const CustomButton: FC<CustomButtonProps> = ({ variant, label, ...props }) => {
	return (
		<>
			{variant === 'demographic' && (
				<Button w='full' bg='white' size='lg'_hover={{bg:'black', color:'white'}} color='text' borderRadius='0rem' {...props}>
					{label}
				</Button>
			)}
		</>
	);
};

export default CustomButton;
