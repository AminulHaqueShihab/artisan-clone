import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import Column from '../util/Column';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { color } from 'framer-motion';
import AccordionText from '../util/texts/AccordionText';

type SidebarItemProps = {
	data?: any;
};

const SidebarItem: FC<SidebarItemProps> = ({ data }) => {
	const router = useRouter();
	return (
		<AccordionItem border='none' userSelect='none'>
			<AccordionButton px={0} justifyContent='space-between' cursor='pointer'>
				<AccordionText onClick={() => router.push(data?.href)}>
					{data?.title && data.title.toUpperCase()}
				</AccordionText>
				{data?.children === undefined ? null : <AccordionIcon />}
			</AccordionButton>
			{data?.children === undefined ? null : (
				<AccordionPanel h='fit-content'>
					<Column gap={2}>
						{data?.children?.map((child: any) => (
							<Link href={child?.href && child.href}>
								<AccordionText>{child?.title && child?.title}</AccordionText>
							</Link>
						))}
					</Column>
				</AccordionPanel>
			)}
		</AccordionItem>
	);
};

export default SidebarItem;
