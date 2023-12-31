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
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import SidebarContents from './SidebarContents';

type SidebarProps = {
	button: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ button }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Flex onClick={onOpen}>{button}</Flex>
			<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bg='black'>
					<DrawerCloseButton
						color='white'
						_hover={{
							bg: 'transparent',
							transform: 'rotate(90deg) scale(1.2)',
						}}
					/>
					<DrawerHeader>
						<Heading fontSize='1.5rem'>URBAN STITCH</Heading>
					</DrawerHeader>
					<DrawerBody color='white' fontSize='1rem'>
						<SidebarContents />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Sidebar;
