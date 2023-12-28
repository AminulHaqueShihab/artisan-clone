import {
	Button,
	FocusLock,
	FormControl,
	FormLabel,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	useDisclosure,
} from '@chakra-ui/react';
import React, { FC, ReactNode, useRef } from 'react';
import Column from '../util/Column';
import CustomButton from '../util/buttons/CustomButton';
import CustomInput from '../util/input/CustomInput';

type LoginPopoverProps = {
	button: ReactNode;
};

const LoginPopover: FC<LoginPopoverProps> = ({ button, ...props }) => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	// const firstFieldRef = useRef(null);

	return (
		<>
			<Popover
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				placement='auto'
				closeOnBlur={false}
			>
				<PopoverTrigger>
					<span onMouseEnter={onOpen} onMouseLeave={onClose}>
						{button}
					</span>
				</PopoverTrigger>
				<PopoverContent
					p={4}
					bg='white'
					border='2px solid'
					borderColor='footerText'
					borderTop='3px solid'
					borderTopColor='#F44336'
					borderRadius='0rem'
					zIndex={9999}
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
					position={'relative'}
				>
					{/* <FocusLock persistentFocus={false}> */}
					{/* <PopoverArrow /> */}
					<PopoverHeader
						fontSize='1.25rem'
						fontWeight='700'
						border='unset'
						m='unset'
					>
						Sign In
					</PopoverHeader>
					<PopoverBody>
						<Column gap={5} w='full'>
							<CustomInput
								label='Username or email'
								placeholder='Username'
								required
							/>
							<CustomInput label='Password' placeholder='Password' required />
							<Button variant='primary' borderRadius='unset' size='lg'>
								LOGIN
							</Button>
						</Column>
					</PopoverBody>

					{/* </FocusLock> */}
				</PopoverContent>
			</Popover>
		</>
	);
};

export default LoginPopover;
