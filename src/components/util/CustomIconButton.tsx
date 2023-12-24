import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

type CustomIconButtonProps = IconButtonProps & {
	variant?: string;
	icon: React.ReactNode;
};

const CustomIconButton: FC<CustomIconButtonProps> = ({
	variant,
	icon,
	...props
}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<>
			{!variant && (
				<IconButton
					as={motion.button}
					whileHover={{ scale: 1.1 }}
					icon={icon}
					bg='transparent'
					_hover={{ bg: 'transparent' }}
					{...props}
				/>
			)}
		</>
	);
};

export default CustomIconButton;
