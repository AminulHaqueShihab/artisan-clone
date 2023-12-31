import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Collapse,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { categoryData } from '../data/CategoryData';
import Column from '../util/Column';
import SidebarItem from './SidebarItem';

type SidebarContentsProps = {};

const SidebarContents: FC<SidebarContentsProps> = ({}) => {
	return (
		<Accordion allowMultiple>
			{categoryData.map(category => (
				<SidebarItem data={category} />
			))}
		</Accordion>
	);
};

export default SidebarContents;
