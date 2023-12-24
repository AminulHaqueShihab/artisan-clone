import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Body from './Body';
import Navbar from '../navbar/Navbar';

type HomePageLayoutProps = {
	children: React.ReactNode;
};

const HomePageLayout: FC<HomePageLayoutProps> = ({ children, ...props }) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<>
			<Navbar />
			<Body>{children}</Body>
		</>
	);
};

export default HomePageLayout;
