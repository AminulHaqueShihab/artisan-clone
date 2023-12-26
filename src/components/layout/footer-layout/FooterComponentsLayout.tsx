import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type FooterComponentsLayoutProps =FlexProps & {
	children: React.ReactNode;
};

const FooterComponentsLayout: FC<FooterComponentsLayoutProps> = ({
	children,
  ...props
}) => {
	// HOOKS

	// STATE

	// VARIABLES
	const PY_BASE = '4rem';
	const PY_LARGE = '6rem';
	const PX_BASE = '2rem';
	const PX_LARGE = '2rem';
	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex
			py={{ base: PY_BASE, lg: PY_LARGE }}
			px={{ base: PX_BASE, lg: PX_LARGE }}
			{...props}
		>
			<Flex w='full'>{children}</Flex>
		</Flex>
	);
};

export default FooterComponentsLayout;
