import Column from '@/components/util/Column';
import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from '../Body';
import CustomBreadCrumb from '@/components/util/breadcrumb/CustomBreadCrumb';

type PageLayoutProps = FlexProps & {
	children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children, ...props }) => {
	return (
		<Column>
			<Flex
				backgroundImage='images/banners/green-banner.png'
				w='100vw'
				maxH='340px'
				py='5.5rem'
			>
				{/* <Image w='full' h='full' src='/images/banners/green-banner.png' objectFit='cover' /> */}
				<Column gap={4} mx='auto'>
					<Heading color='white'>My Account</Heading>
					<CustomBreadCrumb />
				</Column>
			</Flex>
			<Body>{children}</Body>
		</Column>
	);
};

export default PageLayout;
