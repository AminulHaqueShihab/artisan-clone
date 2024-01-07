import Column from '@/components/util/Column';
import CustomIconButton from '@/components/util/buttons/CustomIconButton';
import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	Heading,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FaCartPlus,
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { BsGrid3X2Gap } from 'react-icons/bs';
import { symbol } from '@/lib/config';
import CustomSizeButton from '@/components/util/buttons/CustomSizeButton';
import CustomNumberInput from '@/components/util/input/CustomNumberInput';
import ProductText from '@/components/util/texts/ProductText';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useRouter } from 'next/navigation';

type ProductDetailsProps = {};

const ProductDetails: FC<ProductDetailsProps> = ({}) => {
	const [wishlist, setWishlist] = React.useState(false);
	const router = useRouter();
	return (
		<Column w='full' p='1rem' gap={7}>
			<Flex justify='space-between' alignItems='center'>
				<Badge
					colorScheme='green'
					fontSize='0.75rem'
					py='0.25rem'
					px='1rem'
					fontWeight='800'
					// color='white'
				>
					In Stock
				</Badge>
				<Flex gap={1}>
					<CustomIconButton
						icon={<FaRegArrowAltCircleLeft size='1.5rem' />}
						aria-label='Previous'
					/>
					<CustomIconButton
						icon={<BsGrid3X2Gap size='1.5rem' />}
						aria-label='Next'
					/>

					<CustomIconButton
						icon={<FaRegArrowAltCircleRight size='1.5rem' />}
						aria-label='Next'
					/>
				</Flex>
			</Flex>
			<Heading color='text' fontSize='2rem'>
				{' '}
				Boys White Puffer Jacket
			</Heading>
			<ProductText fontSize='1.5rem' fontWeight='800' color='primary'>
				{symbol.TAKA} 420
			</ProductText>
			<Column gap={3} fontSize='1rem' fontWeight='400'>
				<ProductText>Boys Puffer Jacket</ProductText>
				<ProductText>100% Polyester</ProductText>
				<ProductText>Color: Cream White</ProductText>
			</Column>
			<Column gap={2}>
				<ProductText fontSize='1rem' fontWeight='400'>
					Size
				</ProductText>
				<Flex gap={2} wrap='wrap'>
					<CustomSizeButton label='12-18 Months' />
					<CustomSizeButton label='18-24 Months' />
					<CustomSizeButton label='2-3 Years' />
					<CustomSizeButton label='3-4 Years' />
					<CustomSizeButton label='5-6 Years' />
				</Flex>
			</Column>
			<Grid templateColumns='2fr 5fr' gap={2}>
				<CustomNumberInput />
				<Button
					variant='primary'
					size='lg'
					leftIcon={<FaCartPlus />}
					fontSize='1.ProductTextrem'
					fontWeight='800'
				>
					Add to Cart
				</Button>
			</Grid>
			<ProductText fontWeight='600'>
				Note: Depending on your computer or mobile screen resolution, product
				color may vary slightly.
			</ProductText>
			<Button
				variant='link'
				color='subCategory'
				fontWeight='600'
				alignSelf='flex-start'
				_hover={{}}
				fontSize='0.875rem'
				onClick={() => setWishlist(!wishlist)}
				leftIcon={
					wishlist ? (
						<MdOutlineFavorite color='red' size='1.25rem' />
					) : (
						<MdOutlineFavoriteBorder size='1.25rem' />
					)
				}
			>
				{wishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
			</Button>
			<Divider />
			<Column gap={1}>
				<ProductText fontSize='0.75rem'>
					<Box color='footer' as='span'>
						SKU:{' '}
					</Box>
					NS-1577, C-684, 1-1.5YRS, 0040125333
				</ProductText>
				<ProductText fontSize='0.75rem'>
					<Box color='footer' as='span'>
						CATEGORIES:{' '}
					</Box>
					BOYS JACKET, WINTER, WINTER BOYS
				</ProductText>
				<ProductText fontSize='0.75rem'>
					<Box color='footer' as='span'>
						TAGS:{' '}
					</Box>
					WINTER BOYS, WINTER
				</ProductText>
				<ProductText fontSize='0.75rem'>
					<Box color='footer' as='span'>
						SHARE:{' '}
					</Box>
				</ProductText>
			</Column>
		</Column>
	);
};

export default ProductDetails;
