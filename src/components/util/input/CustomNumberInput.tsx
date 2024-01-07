import {
	Input,
	InputGroup,
	InputProps,
	InputRightElement,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import Column from '../Column';
import CustomIconButton from '../buttons/CustomIconButton';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

type CustomNumberInputProps = InputProps & {};

const CustomNumberInput: FC<CustomNumberInputProps> = ({ ...props }) => {
	const [value, setValue] = React.useState(1);
	const handleChange = (value: number) => setValue(value);
	const handleIncreament = () => {
		setValue(value + 1);
	};
	const handleDecreament = () => {
		if (value > 1) {
			setValue(value - 1);
		}
	};
	return (
		<NumberInput
			onChange={value => handleChange(parseInt(value))}
			size='lg'
			value={value}
			focusBorderColor='primary'
			min={1}
		>
			<NumberInputField borderRadius='unset' />
			<NumberInputStepper>
				<NumberIncrementStepper border='none' />
				<NumberDecrementStepper border='none' />
			</NumberInputStepper>
		</NumberInput>

		// <InputGroup size='lg' maxH='fit-content'>
		// 	<Input
		// 		focusBorderColor='primary'
		// 		value={value}
		// 		type='number'

		// 		borderRadius='unset'
		// 		{...props}
		// 	/>
		// 	<InputRightElement mr='-0.5rem'>
		// 		<Column fontWeight='200'>
		// 			<CustomIconButton
		// 				icon={<FaAngleUp size='1rem' />}
		// 				size='0.2rem'
		// 				_hover={{ color: 'primary' }}
		// 				onClick={handleIncreament}
		// 				aria-label='Increase'
		// 			/>
		// 			<CustomIconButton
		// 				icon={<FaAngleDown size='1rem' />}
		// 				size='0.2rem'
		// 				_hover={{ color: 'primary' }}
		// 				onClick={handleDecreament}
		// 				aria-label='Decrease'
		// 			/>
		// 		</Column>
		// 	</InputRightElement>
		// </InputGroup>
	);
};

export default CustomNumberInput;
