import CustomTab from '@/components/tabs/CustomTab';
import ProductText from '@/components/util/texts/ProductText';
import {
	Flex,
	FlexProps,
	Grid,
	TabIndicator,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	TabsProps,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import SizeTable from './SizeTable';

type InfoReviewSectionProps = FlexProps & {};

const InfoReviewSection: FC<InfoReviewSectionProps> = ({ ...props }) => {
	const [tabIndex, setTabIndex] = React.useState(0);
	return (
		<Flex w='full' {...props}>
			<Tabs
				align='center'
				w='full'
				colorScheme='green'
				onChange={index => setTabIndex(index)}
			>
				<TabList>
					<CustomTab tabIndex={tabIndex} index={0} label='Description' />
					<CustomTab
						tabIndex={tabIndex}
						index={1}
						label='Additional information'
					/>
					<CustomTab tabIndex={tabIndex} index={2} label={`Reviews (${0})`} />
				</TabList>
				<TabIndicator height='2px' />
				<TabPanels>
					<TabPanel>
            <SizeTable />
          </TabPanel>
					<TabPanel>
						<Grid
							templateColumns='3fr 7fr'
							w='full'
							bg='grayBox'
							justifyItems='flex-start'
							alignItems='center'
							p='1rem 1.25rem'
						>
							<ProductText color='text' fontWeight='600'>
								Size
							</ProductText>
							<ProductText>XS, S, M, L, XL, XXL</ProductText>
						</Grid>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default InfoReviewSection;
