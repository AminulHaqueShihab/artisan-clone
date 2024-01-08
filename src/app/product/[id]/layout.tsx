// import PageLayout from '@/components/layout/PageLayout';
// import BasePadding from '@/components/util/base-padding/BasePadding';
import React from 'react';
// import { getData } from '@/server/getProducts';
import { Metadata, ResolvingMetadata } from 'next';
import HomePageLayout from '@/components/layout/HomePageLayout';
import ProductPageLayout from '@/components/layout/page-layout/ProductPageLayout';
// import findAttributeValue from '@/functions/findAttributeValue';

type LayoutProps = {
	children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = async ({ children }) => {
	return (
		<HomePageLayout>
      <ProductPageLayout>
        {children}
      </ProductPageLayout>
    </HomePageLayout>
	);
};

type Props = {
	params: { id: string };
};

// export async function generateMetadata(
// 	{ params }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	// read route params

// 	const ROOT = 'https://bazar365.com/media/catalog/product';

// 	const product = await getData(params.id);
// 	const title = findAttributeValue(product, 'meta_title');
// 	const description = findAttributeValue(product, 'meta_description');
// 	const keywords = findAttributeValue(product, 'meta_keywords');
// 	const image = findAttributeValue(product, 'image');

// 	const url = ROOT + image;

// 	return {
// 		title: title,
// 		description: description,
// 		keywords: keywords,
// 		openGraph: {
// 			title: product?.name,
// 			description: description || '',
// 			images: url,
// 			siteName: 'bazar365.com',
// 		},
// 	};
// }

export default layout;
