// import useCustomColors from '@/hooks/useCustomColors';
import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';

type BodyProps = FlexProps & {
	children: ReactNode;
};
const Body: FC<BodyProps> = ({ children, ...props }) => {
	
	return (
		<Flex
			as='main'
			bg='white'
			w='full'
			maxW='1440px'
			mx='auto'
			py='72px'
			pt='32px'
			{...props}
		>
			{children}
		</Flex>
	);
};

export default Body;
