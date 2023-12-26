import { layout } from '@/lib/config';
import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import FooterComponentsLayout from '../layout/footer-layout/FooterComponentsLayout';
import Column from '../util/Column';

type FooterProps = {};

const PY_BASE = '4rem';
const PY_LARGE = '6rem';

const columns = (
	<Column gap={3}>
		<Heading fontSize='1rem' fontWeight='700'>
			CATEGORIES
		</Heading>
		<Column gap={2} fontWeight='600'>
			<Text>For Men</Text>
			<Text>For Women</Text>
			<Text>For Boys</Text>
			<Text>For Girls</Text>
			<Text>Accessories</Text>
			<Text>Perfumes</Text>
		</Column>
	</Column>
);

const Footer: FC<FooterProps> = ({}) => {
	return (
		<Flex direction='column' bg='footer' color='footerText'>
			<Box maxW={layout.MAX_WIDTH} mx='auto'>
				<FooterComponentsLayout>
					<Grid
          gap='4rem'
						templateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr 1fr 1fr',
						}}
					>
						{columns}
						{columns}
						{columns}
						{columns}
						{columns}
					</Grid>
				</FooterComponentsLayout>
				<Divider />
				<FooterComponentsLayout>Bottom part</FooterComponentsLayout>
			</Box>
		</Flex>
	);
};

export default Footer;
