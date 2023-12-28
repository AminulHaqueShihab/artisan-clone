import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomInputProps = InputProps & {
	label?: string;
	placeholder?: string;
  required?: boolean;
};

const CustomInput: FC<CustomInputProps> = ({
	label,
	placeholder,
  required,
	...props
}) => {
	return (
		<>
			<FormControl isRequired={required? required : false}>
        {label && <FormLabel>{label}</FormLabel>}
				<Input placeholder={placeholder? placeholder:''} {...props} focusBorderColor='primary' borderRadius='0rem' />
			</FormControl>
		</>
	);
};

export default CustomInput;
