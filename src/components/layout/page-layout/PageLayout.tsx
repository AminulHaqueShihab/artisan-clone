import Column from '@/components/util/Column';
import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from '../Body';
import CustomBreadCrumb from '@/components/util/breadcrumb/CustomBreadCrumb';

type PageLayoutProps = FlexProps & {
	children: ReactNode;
	title: string;
};

const PageLayout: FC<PageLayoutProps> = ({ children, title, ...props }) => {
	return (
		<Column>
			<Flex
				backgroundImage='images/banners/green-banner.png'
				w='100vw'
				maxH={{ base: '120px', lg: '200px' }}
				py={{ base: '2rem', lg: '5.5rem' }}
			>
				{/* <Image w='full' h='full' src='/images/banners/green-banner.png' objectFit='cover' /> */}
				<Column
					gap={{ base: 2, md: 4 }}
					mx='auto'
					justify='center'
					alignItems='center'
				>
					<Heading color='white'>{title}</Heading>
					<CustomBreadCrumb />
				</Column>
			</Flex>
			<Body>{children}</Body>
		</Column>
	);
};

export default PageLayout;
