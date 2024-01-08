type productDataProps = {
	name: string;
	description: string;
	isActive: boolean;
	image: string;
	images: string[];
	category: string;
	isFeatured: boolean;
	price: number;
	isDisCount: boolean;
	tags: string[];
	stock: number;
	unit: string;
	unitValue: number;
	discountedPrice: number;
	discount: number;
	isVisible: boolean;
	createdAt: string;
	updatedAt: string;
};

export const productData = {
	doc: [
		{
			id: '1',
			name: "Men's Hoodie",
			description: 'This is test product',
			image: 'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: true,
			price: 600,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
		{
			id: '2',
			name: "Men's Puffer Jacket",
			description: 'This is product 1',
			image: 'https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: true,
			price: 2600,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
		{
			id: '3',
			name: "Men's Jacket",
			description: 'This is product 1',
			image:
				'https://images.pexels.com/photos/7392712/pexels-photo-7392712.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: true,
			price: 1500,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
		{
			id: '4',
			name: "Men's T-Shirt",
			description: 'This is product 1',
			image:
				'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: true,
			price: 200,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
		{
			id: '5',
			name: "Men's Shirt",
			description: 'This is product 1',
			image:
				'https://images.pexels.com/photos/2932748/pexels-photo-2932748.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: false,
			price: 1100,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
		{
			id: '6',
			name: "Men's Casual Shirt",
			description: 'This is product 1',
			image:
				'https://images.pexels.com/photos/3177812/pexels-photo-3177812.jpeg',
			images: [
				'https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg',
				'https://images.pexels.com/photos/2046790/pexels-photo-2046790.jpeg',
			],
			category: 'Winter',
			isFeatured: true,
			price: 700,
			isDisCount: false,
			tags: ['Winter Men', 'Winter', "Men's Hoodie"],
			stock: 10,
			sizes: [
				{
					size: 'S',
					shoulder: 17.5,
					chest: 20,
					length: 28,
				},
				{
					size: 'M',
					shoulder: 18.5,
					chest: 21,
					length: 29,
				},
				{
					size: 'L',
					shoulder: 19.5,
					chest: 22,
					length: 30,
				},
				{
					size: 'XL',
					shoulder: 20.5,
					chest: 23,
					length: 31,
				},
				{
					size: 'XXL',
					shoulder: 21.5,
					chest: 24,
					length: 32,
				},
			],
			colors: ['Cream', 'Black', 'Blue', 'Red'],
			SKU: 'NS-1577, C-684, 1-1.5YRS, 0040125333',
			unit: 'pcs',
			unitValue: 1,
			discountedPrice: 90,
			discount: 10,
			createdAt: '2021-01-01',
			updatedAt: '2021-01-01',
		},
	],
};
