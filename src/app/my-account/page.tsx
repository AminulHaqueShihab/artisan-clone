'use client';
import AuthSection from '@/components/auth/AuthSection';
import HomePageLayout from '@/components/layout/HomePageLayout';
import PageLayout from '@/components/layout/page-layout/PageLayout';
import Column from '@/components/util/Column';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { FC } from 'react';

type MyAccountProps = {};

const MyAccount: NextPage<MyAccountProps> = ({}) => {
	return (
		<HomePageLayout>
			<PageLayout>
				<AuthSection />
			</PageLayout>
		</HomePageLayout>
	);
};

export default MyAccount;
