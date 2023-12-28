// import { useAppDispatch } from '@/store/slices/hooks';
// import { toggleSidebar } from '@/store/slices/sidebarSlice';
import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import CustomIconButton from '../util/buttons/CustomIconButton';
import { IoMenu } from 'react-icons/io5';

const SideBarHamburger: React.FC<FlexProps> = ({ ...props }) => {
	// const dispatch = useAppDispatch();
	return (
		<Flex cursor='pointer' {...props}>
			<CustomIconButton icon={<IoMenu size='1.7rem' />} aria-label='Menu' />
			<RxHamburgerMenu
				// color={hamburgerColor}
				size='22px'
				// onClick={() => dispatch(toggleSidebar())}
			/>
		</Flex>
	);
};

export default SideBarHamburger;
