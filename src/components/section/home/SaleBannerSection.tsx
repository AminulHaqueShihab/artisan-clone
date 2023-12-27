import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type SaleBannerSectionProps = {};

const SaleBannerSection: FC<SaleBannerSectionProps> = ({}) => {
	return (
		<Link href='/'>
			<Flex maxH='500px' cursor='pointer'>
				<Image
					src='/images/banners/winter-sale.jpeg'
					objectFit='cover'
					alt='Winter sale banner'
				/>
			</Flex>
		</Link>
	);
};

export default SaleBannerSection;
