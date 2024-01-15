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
	);
};

export default CustomNumberInput;
