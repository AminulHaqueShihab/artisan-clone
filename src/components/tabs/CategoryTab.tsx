import { Button, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type CategoryTabProps = FlexProps & {
	data?: any;
};

const CategoryTab: FC<CategoryTabProps> = ({ data, ...props }) => {
  const [activeTab, setActiveTab] = useState(false);
  const handleActive = ()=>{
    setActiveTab(!activeTab)
  }
	return (
		<Flex gap={4} flex={1}>
			{data?.map((item: any) => (
				<Button variant='tabButton' isActive={activeTab} onClick={()=>handleActive}>{item.label}</Button>
			))}
		</Flex>
	);
};

export default CategoryTab;
