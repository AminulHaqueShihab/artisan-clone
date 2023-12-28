import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SectionHeadingProps =HeadingProps & {
title:string
}

const SectionHeading: FC<SectionHeadingProps> = ({title, ...props}) => {


  return <Heading fontSize={{base:'2rem',md:'2.5rem',lg:'3rem'}} {...props}>{title}</Heading>;
};

export default SectionHeading;