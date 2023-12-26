type DataProps = {
	title: string;
	items: {
		title: string;
		href: string;
	}[];
};

const data: DataProps[] = [
	{
		title: 'CATEGORIES',
		items: [
			{
				title: 'For Men',
				href: '/',
			},
			{
				title: 'For Women',
				href: '/',
			},
			{
				title: 'For Boys',
				href: '/',
			},
			{
				title: 'For Girls',
				href: '/',
			},
			{
				title: 'Accessories',
				href: '/',
			},
			{
				title: 'Perfumes',
				href: '/',
			},
		],
	},
	{
		title: 'IMPORTANT LINKS',
		items: [
			{
				title: 'About',
				href: '/',
			},
			{
				title: 'Customer Service',
				href: '/',
			},
			{
				title: 'Terms & Conditions',
				href: '/',
			},
		],
	},
];

export default data;
