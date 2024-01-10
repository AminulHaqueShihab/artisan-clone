import React, { FC, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import { Box, Image, Button, FlexProps } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperProductImage from '../product/SwiperProductImage';
import Column from '../util/Column';
import CustomIconButton from '../util/buttons/CustomIconButton';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { image } from '@/lib/config';

type SingleProductCarouselProps = FlexProps & {
	images?: any[];
};

const SingleProductCarousel: FC<SingleProductCarouselProps> = ({
	images,
	...props
}) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (index: number) => setCurrentSlide(index),
	};
	return (
		<Column
			w='full'
			maxW={{ base: '345px', sm: '505px', md: '700px' }}
			// maxH='1000px'
			h='full'
			gap={{ base: 3, md: 4 }}
			position='relative'
			{...props}
		>
			<CustomIconButton
				icon={<AiOutlineFullscreen color='black' size='1.5rem' />}
				aria-label='Full Screen'
				position='absolute'
				zIndex={3}
				top={2}
				right={2}
			/>
			<Swiper
				style={{
					// '--swiper-navigation-color': '#fff',
					// '--swiper-pagination-color': '#fff',
					width: '100%',
					// border: '1px solid',
					// borderColor: 'gray',
					// height: '600px',
					// display: 'flex',
				}}
				loop={true}
				spaceBetween={5}
				// navigation={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
			>
				{images?.map((image, index) => (
					<SwiperSlide>
						<SwiperProductImage key={index} src={image} />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper as any}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				navigation={true}
				style={{
					width: '100%',
					height: '20%',
					// display: 'flex',
				}}
			>
				{images?.map((image, index) => (
					<SwiperSlide>
						<SwiperProductImage key={index} src={image} />
					</SwiperSlide>
				))}
			</Swiper>
		</Column>
	);
};

export default SingleProductCarousel;
