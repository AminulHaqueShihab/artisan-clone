import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

type CustomSwiperSlideProps = {
	children?: React.ReactNode;
};

const CustomSwiperSlide: FC<CustomSwiperSlideProps> = ({ children, ...props }) => {
	return (
		<SwiperSlide
			style={{
				textAlign: 'center',
				flex:'1',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</SwiperSlide>
	);
};

export default CustomSwiperSlide;
