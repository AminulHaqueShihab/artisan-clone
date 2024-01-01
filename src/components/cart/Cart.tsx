import { symbol } from '@/lib/config';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Flex,
	Heading,
	Text,
	Center,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import CustomButton from '../util/buttons/CustomButton';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';

type CartProps = {
	button: ReactNode;
};

const Cart: FC<CartProps> = ({ button }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex onClick={onOpen}>{button}</Flex>
			<Drawer
				placement='right'
				size={{ base: 'xs', lg: 'sm' }}
				onClose={onClose}
				isOpen={isOpen}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton
						_hover={{
							bg: 'transparent',
							transform: 'rotate(90deg) scale(1.5)',
							transition: 'transform 0.3s ease-in-out',
						}}
					/>
					<DrawerHeader borderBottom='1px solid' borderColor='gray'>
						<Heading fontSize='1.5rem'>SHOPPING CART</Heading>
					</DrawerHeader>
					<DrawerBody fontSize='1rem'></DrawerBody>
					<DrawerFooter
						zIndex={999}
						// borderTop='1px solid'
						borderColor='primary'
						alignItems='center'
						justifyItems='center'
						flexDirection='column'
						boxShadow='0px -2px 10px rgba(0, 0, 0, 0.25)'
						py='1.5rem'
						gap={4}
					>
						<Flex
							justify='space-between'
							w='full'
							fontSize='1.25rem'
							fontWeight='800'
						>
							<Text>SUBTOTAL:</Text>
							<Text>{symbol.TAKA} 420</Text>
						</Flex>
						<Button
							variant='primary'
							w='full'
							rightIcon={<FaArrowRightToBracket />}
							borderRadius='0px'
						>
							Checkout
						</Button>
						<CustomButton
							variant='outline'
							label='View Cart'
							rightIcon={<MdOutlineShoppingCartCheckout />}
						/>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Cart;
