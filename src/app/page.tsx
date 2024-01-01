'use client';
import HomePageLayout from '@/components/layout/HomePageLayout';
import styles from './page.module.css';
import { Flex, Text } from '@chakra-ui/react';
import HomePage from '@/components/pages/HomePage';
import Body from '@/components/layout/Body';

export default function Home() {
	return (
		<HomePageLayout>
			<Body>
				<HomePage />
			</Body>
		</HomePageLayout>
	);
}
