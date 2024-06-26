import { Badge, Box, IconButton, IconButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

type CustomIconButtonProps = IconButtonProps & {
	variant?: 'badge' | 'productIcon';
	icon: React.ReactNode;
};

const CustomIconButton: FC<CustomIconButtonProps> = ({
	variant,
	icon,
	...props
}) => {
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
			{variant === 'badge' && (
				<Box position='relative' {...props}>
					<IconButton
						as={motion.button}
						whileHover={{ scale: 1.1 }}
						justifyContent='center'
						alignItems='center'
						icon={icon}
						bg='transparent'
						_hover={{ bg: 'transparent' }}
						{...props}
					/>
					<Badge
						position='absolute'
						top='-1'
						right='-1'
						bg='primary'
						color='white'
						borderRadius='full'
						px='6px'
						size='25px'
					>
						0
					</Badge>
				</Box>
			)}
			{variant === 'productIcon' && (
				<IconButton
					icon={icon}
					bg='white'
					border={'1px solid black'}
					color={'black'}
					borderRadius='0rem'
					variant='outline'
					_hover={{ bg: 'black', color: 'white' }}
					{...props}
				/>
			)}
		</>
	);
};

export default CustomIconButton;
