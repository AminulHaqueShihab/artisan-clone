type catergoryDataProps = {
	id: string;
	title?: string;
	href?: string;
	children?: catergoryDataProps[];
};

export const categoryData = [
	{
		id: '1',
		title: 'Winter',
		href: '/',
	},
	{
		id: '2',
		title: 'Winter Men',
		href: '/',
		children: [
			{
				id: '1',
				title: "Men's Denim Jacket",
				href: '/',
			},
			{
				id: '2',
				title: "Men's Jacket",
				href: '/',
			},
			{
				id: '3',
				title: "Men's Hoodie",
				href: '/',
			},
			{
				id: '4',
				title: "Men's Blazer",
				href: '/',
			},
			{
				id: '5',
				title: "Men's Vest",
				href: '/',
			},
		],
	},
	{
		id: '3',
		title: 'Winter Ladies',
		href: '/',
		children: [
			{
				id: '1',
				title: "Men's Denim Jacket",
				href: '/',
			},
			{
				id: '2',
				title: "Men's Jacket",
				href: '/',
			},
			{
				id: '3',
				title: "Men's Hoodie",
				href: '/',
			},
			{
				id: '4',
				title: "Men's Blazer",
				href: '/',
			},
			{
				id: '5',
				title: "Men's Vest",
				href: '/',
			},
		],
	},
	{
		id: '4',
		title: 'Winter Kids',
		href: '/',
		children: [
			{
				id: '1',
				title: "Men's Denim Jacket",
				href: '/',
			},
			{
				id: '2',
				title: "Men's Jacket",
				href: '/',
			},
			{
				id: '3',
				title: "Men's Hoodie",
				href: '/',
			},
			{
				id: '4',
				title: "Men's Blazer",
				href: '/',
			},
			{
				id: '5',
				title: "Men's Vest",
				href: '/',
			},
		],
	},
	{
		id: '5',
		title: 'Vouchars',
		href: '/',
	},
	{
		id: '6',
		title: 'Summer',
		href: '/',
		children: [
			{
				id: '1',
				title: 'Men',
				href: '/',
			},
			{
				id: '2',
				title: 'Women',
				href: '/',
			},
			{
				id: '3',
				title: 'Kids',
				href: '/',
			},
			{
				id: '4',
				title: 'Accessories',
				href: '/',
			},
		],
	},
];
