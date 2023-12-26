import React, { FC } from 'react';
import Column from '../util/Column';
import { FlexProps, Heading } from '@chakra-ui/react';

type FooterColumnsProps = FlexProps & {
	title: string;
	children: React.ReactNode;
};

const FooterColumns: FC<FooterColumnsProps> = ({
	children,
	title,
	...props
}) => {
	return (
		<Column gap={6} alignItems={{base:'center', md:'unset'}} {...props}>
			<Heading fontSize='1rem' fontWeight='700' color='white'>
				{title}
			</Heading>
			<Column gap={2} fontWeight='600'>
				{children}
			</Column>
		</Column>
	);
};

export default FooterColumns;
