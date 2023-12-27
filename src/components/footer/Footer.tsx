import { layout } from '@/lib/config';
import {
	Box,
	Image,
	Divider,
	Flex,
	Grid,
	Heading,
	Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import FooterComponentsLayout from '../layout/footer-layout/FooterComponentsLayout';
import Column from '../util/Column';
import { title } from 'process';
import FooterColumns from './FooterColumns';
import FooterText from './FooterText';
import {
	FaFacebook,
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';
import CustomIconButton from '../util/CustomIconButton';
import Link from 'next/link';
import footerData from '../data/FooterData';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	//COLUMN 1
	const coloum1 = (
		<FooterColumns title='CONTACT US'>
			<Column alignItems={{ base: 'center', md: 'unset' }}>
				<FooterText>If you have any question, please contact us .</FooterText>
				{/* PHONE NUMBER */}
				<Flex gap={1}>
					<FooterText color='footerText'>Hotline:</FooterText>
					<FooterText cursor='pointer' color='primary'>
						+8801234567890
					</FooterText>
				</Flex>
				{/* EMAIL */}
				<Flex gap={1}>
					<FooterText color='footerText'>Email:</FooterText>
					<FooterText cursor='pointer' color='primary'>
						info@thinkcrypt.io
					</FooterText>
				</Flex>
			</Column>
		</FooterColumns>
	);

	//COLUMN 2
	const coloum2 = (
		<FooterColumns title='STORE LOCATION'>
			<Column gap='2rem'>
				{/* STORE LOCATIONS */}
				<Column>
					<FooterText>
						Dhaka, Chittagong, Sylhet, Bogura, Mymensingh. To know the detail
						location of the stores,
					</FooterText>
					<Link href='/'>
						<FooterText cursor='pointer' color='primary'>
							Click Here
						</FooterText>
					</Link>
				</Column>
				{/* OPENING HOURS */}
				<Column>
					<FooterText>
						Open everyday from <br /> 9:30am – 9:30pm
					</FooterText>
				</Column>
			</Column>
		</FooterColumns>
	);

	//COLUMN 5
	const coloum5 = (
		<FooterColumns title='FOLLOW US'>
			<Flex gap={{ base: 4, md: 2 }} color={'white'}>
				{/* SOCIAL MEDIA ICONS */}
				<CustomIconButton
					color='white'
					icon={<FaFacebookSquare size='1.5rem' />}
					aria-label='Facebook'
				/>
				<CustomIconButton
					color='white'
					icon={<FaYoutube size='1.5rem' />}
					aria-label='Youtube'
				/>
				<CustomIconButton
					color='white'
					icon={<FaInstagram size='1.5rem' />}
					aria-label='Instagram'
				/>
			</Flex>
		</FooterColumns>
	);

	//TOP SECTION
	const topPart = (
		<FooterComponentsLayout maxW={layout.MAX_WIDTH} mx='auto'>
			<Grid
				gap={{ base: '4rem', md: '2rem', lg: '4rem' }}
				templateColumns={{
					base: '1fr',
					md: '1fr 1fr',
					lg: '1fr 1fr 1fr 1fr 1fr',
				}}
			>
				{coloum1}
				{coloum2}
				{/* COLUMN 3 AND 4 */}
				{footerData.map(title => (
					<FooterColumns title={title.title}>
						{title.items.map(item => (
							<FooterText cursor='pointer' _hover={{ color: 'primary' }}>
								{item.title}
							</FooterText>
						))}
					</FooterColumns>
				))}
				{/* COLUMN 5 */}
				{coloum5}
			</Grid>
		</FooterComponentsLayout>
	);

	//BOTTOM SECTION
	const bottomPart = (
		<FooterComponentsLayout maxW={layout.MAX_WIDTH} mx='auto' py='4rem'>
			<Column gap={5} alignItems='center' justify='center'>
				<Image
					src='/images/banners/PaymentPartners.png'
					alt='Payment Partners'
				/>
				<FooterText>
					Copyright © 2023 ThinkCrypt.io. All Rights Reserved.
				</FooterText>
			</Column>
		</FooterComponentsLayout>
	);
	return (
		<Flex direction='column' bg='footer' color='footerText' zIndex={6}>
			{topPart}
			<Divider />
			{bottomPart}
		</Flex>
	);
};

export default Footer;
