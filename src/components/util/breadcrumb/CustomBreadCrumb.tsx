import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react';

import React, { FC } from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';

type CustomBreadCrumbProps = {};

const CustomBreadCrumb: FC<CustomBreadCrumbProps> = ({}) => {
	return (
		<Breadcrumb spacing='8px' separator={<FaChevronRight color='white' />}>
			<BreadcrumbItem>
				<BreadcrumbLink href='/' color='white'>
					<Flex alignItems='center' gap={2}>
						<FaHome /> Home
					</Flex>
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href='#' color='white'>
					About
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href='#' color='white'>
					Contact
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default CustomBreadCrumb;
