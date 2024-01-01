import Column from '@/components/util/Column';
import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type PageLayoutProps = FlexProps & {
	children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children, ...props }) => {
	return (
		<Column pb={{ base: '1rem', md: '2rem', lg: '3rem' }}>
			<Flex
				backgroundImage='images/banners/green-banner.png'
				w='100vw'
				maxH='360px'
				py='5.5rem'
			>
				{/* <Image w='full' h='full' src='/images/banners/green-banner.png' objectFit='cover' /> */}
				<Column gap={4} mx='auto'>
					<Heading color='white'>My Account</Heading>
				</Column>
			</Flex>
			{children}
		</Column>
	);
};

export default PageLayout;
