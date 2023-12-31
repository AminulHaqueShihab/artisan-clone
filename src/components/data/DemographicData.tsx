type demographicDataProps = {
	image: string;
	title: string;
};

export const demographicData: demographicDataProps[] = [
	{
		image: '/images/models/man.jpg',
		title: 'Men',
	},
	{
		image: '/images/models/woman.jpg',
		title: 'Women',
	},
	{
		image: '/images/models/boy.jpg',
		title: 'Boys',
	},
	{
		image: '/images/models/girl.jpg',
		title: 'Girls',
	},
];
type modelsDataProps = {
	id: string;
	image: string;
	alt: string;
	href: string;
}

export const modelsData:modelsDataProps[] = [
	{
		id: '1',
		image: '/images/models/male-model-1.jpg',
		alt: 'Male Model banner',
		href: '/',
	},
	{
		id: '2',
		image: '/images/models/female-model-1.jpg',
		alt: 'Female Model banner',
		href: '/',
	},
];