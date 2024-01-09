import Column from '@/components/util/Column';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import ImageContainer from './ImageContainer';
import ProductIconButtons from './ProductIconButtons';
import CustomProductButton from '@/components/util/buttons/CustomProductButton';
import ProductInfo from './ProductInfo';

type ProductCardProps = {
	data?: any;
};

const ProductCard: FC<ProductCardProps> = ({ data }) => {
	const [isHovered, setIsHovered] = useState(false);
	const style = {
		position: 'relative',
		flex: 1,
		zIndex: 0,
		minH: { base: '500px', md: '360px' },
		width: 'full',
		bg: 'red',
		overflow: 'hidden',
	};
	return (
		<Column
			gap={2}
			cursor={isHovered ? 'pointer' : 'default'}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Column sx={style}>
				<ProductIconButtons isHovered={isHovered} />
				<ImageContainer isHovered={isHovered} data={data && data} />
				<Link href={`/product/${data?.id}`}>
					<CustomProductButton isHovered={isHovered} label='View Details' />
				</Link>
			</Column>
			<ProductInfo data={data} />
		</Column>
	);
};

export default ProductCard;
