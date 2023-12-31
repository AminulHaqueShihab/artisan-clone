import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type AccordionTextProps = TextProps & {
	children: React.ReactNode;
};

const AccordionText: FC<AccordionTextProps> = ({ children, ...props }) => {
	return (
		<Text as='span' textAlign='start' _hover={{ color: 'primary' }} {...props}>
			{children}
		</Text>
	);
};

export default AccordionText;
