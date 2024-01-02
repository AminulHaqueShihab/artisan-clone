import Column from '@/components/util/Column';
import CustomBreadCrumb from '@/components/util/breadcrumb/CustomBreadCrumb';
import { Flex, FlexProps, Heading } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import Body from '../Body';

type ProductPageLayoutProps = FlexProps & {
	children: ReactNode;
};

const ProductPageLayout: FC<ProductPageLayoutProps> = ({
	children,
	...props
}) => {
	return (
		<Column {...props}>
			<Flex
				backgroundImage='images/banners/green-banner.png'
				w='100vw'
				maxH='100px'
				py='2rem'
			>
				{/* <Image w='full' h='full' src='/images/banners/green-banner.png' objectFit='cover' /> */}
				<Column gap={4} mx='auto' justify='center' alignItems='center'>
					<CustomBreadCrumb />
				</Column>
			</Flex>
			<Body>{children}</Body>
		</Column>
	);
};

export default ProductPageLayout;
