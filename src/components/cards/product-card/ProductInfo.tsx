import Column from '@/components/util/Column';
import { symbol } from '@/lib/config';
import { Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProductInfoProps = {
	data?: any;
};

const ProductInfo: FC<ProductInfoProps> = ({ data }) => {
	return (
		<Column gap={3} bg='white' w='full' textAlign='center' zIndex={6} p={3}>
			<Flex wrap='wrap' fontSize='0.9rem' color='grey' justify='center'>
				{data?.tags?.map((tag: string) => (
					<Text>{tag}, &nbsp;</Text>
				))}
			</Flex>
			<Text fontSize='1rem' color='text' fontWeight='700'>
				{data?.name}
			</Text>
			<Text fontSize='1.1rem' color='primary' fontWeight='800'>
				{symbol.TAKA} {data?.price}
			</Text>
		</Column>
	);
};

export default ProductInfo;
