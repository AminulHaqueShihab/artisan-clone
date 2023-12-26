import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

type FooterComponentsLayoutProps = {
	children: React.ReactNode;
};

const FooterComponentsLayout: FC<FooterComponentsLayoutProps> = ({
	children,
}) => {
	// HOOKS

	// STATE

	// VARIABLES
	const PY_BASE = '4rem';
	const PY_LARGE = '6rem';
	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex py={{ base: PY_BASE, lg: PY_LARGE }}>
			<Flex bg='red' w='full'>
				{children}
			</Flex>
		</Flex>
	);
};

export default FooterComponentsLayout;
