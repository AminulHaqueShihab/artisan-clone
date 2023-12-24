'use client';
import HomePageLayout from '@/components/layout/HomePageLayout';
import styles from './page.module.css';
import { Flex, Text } from '@chakra-ui/react';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
	return (
		<HomePageLayout>
			<HomePage />
		</HomePageLayout>
	);
}
