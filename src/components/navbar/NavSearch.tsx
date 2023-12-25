import { Flex, FlexProps, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { FC } from 'react';
import CustomIconButton from '../util/CustomIconButton';
import { CiSearch } from 'react-icons/ci';

type NavSearchProps = FlexProps & {

}

const NavSearch: FC<NavSearchProps> = ({...props}) => {
// HOOKS

// STATE

// VARIABLES

// STYLES

// FUNCTIONS

// EFFECTS

// COMPONENTS

  return (
		<Flex
			//  bg={'white'}
			alignItems='center'
			{...props}
		>
			<InputGroup>
				<InputLeftElement pointerEvents='none'>
					<CustomIconButton
						aria-label='search-icon'
						icon={<CiSearch size='24px' />}
					/>
				</InputLeftElement>
				<Input
					py='1.5rem'
					type='tel'
					placeholder='Search Products...'
					border='none'
					w='80%'
					borderBottom='1px solid'
					borderRadius='none'
					focusBorderColor='transparent'
					outline='none'
					_focus={{
						borderBottom: '1px solid',
						borderBottomColor: 'primary',
					}}
				/>
			</InputGroup>
		</Flex>
	);
};

export default NavSearch;