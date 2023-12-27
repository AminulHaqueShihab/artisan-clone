'use client';
import React, { FC } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Banner } from '@/store/services/types';
// import { URL } from '@/lib/constants';
import CoverImage from '../images/CoverImage';
import { Flex } from '@chakra-ui/react';

type HeaderCarouselProps = {
	data: any;
};

const HeaderCarousel: FC<HeaderCarouselProps> = ({ data }) => {
	//const { data, isLoading, isError, isSuccess } = useGetBannersQuery({});

	return (
		<>
			<Swiper
				pagination={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
				style={{ borderRadius: '0px', width: '100%' }}
			>
				{data.map((banner: any) => (
					<SwiperSlide>
						<CoverImage src={banner.image} alt={banner.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default HeaderCarousel;
