import { Tab, TabProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomTabProps = TabProps & {
	tabIndex: number;
	index: number;
	label: any;
};

const CustomTab: FC<CustomTabProps> = ({
	tabIndex,
	index,
	label,
	...props
}) => {
	return (
		<Tab
			fontSize={{ base: '1rem', md: '1.25rem' }}
			fontWeight='800'
			{...props}
		>
			<Text color={tabIndex === index ? 'footer' : 'footerText'}>{label}</Text>
		</Tab>
	);
};

export default CustomTab;
