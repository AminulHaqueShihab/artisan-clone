import React, { FC, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import { Box, Image, Button } from '@chakra-ui/react';

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

type SingleProductCarouselProps = {
	images: string[];
};

const SingleProductCarousel: FC<SingleProductCarouselProps> = ({images}) => {
	// const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
		<Box w='full' >
			<Slider {...settings}>
				{images.map((image, index) => (
					<Image key={index} src={image} alt={`Product Image ${index}`} />
				))}
			</Slider>

			<Box mt={4} textAlign='center'>
				{images.map((_, index) => (
					<Button
						key={index}
						mx={2}
						size='sm'
						variant={index === currentSlide ? 'solid' : 'outline'}
						colorScheme='teal'
						onClick={() => setCurrentSlide(index)}
					>
						{index + 1}
					</Button>
				))}
			</Box>
		</Box>

		// <Column>
		// 	{/* <Swiper
		// 		style={{
		// 			// '--swiper-navigation-color': '#fff',
		// 			// '--swiper-pagination-color': '#fff',
		// 			width: '100%',
		// 			display: 'flex',
		// 		}}
		// 		loop={true}
		// 		spaceBetween={10}
		// 		navigation={true}
		// 		thumbs={{ swiper: thumbsSwiper }}
		// 		modules={[FreeMode, Navigation, Thumbs]}
		// 	>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-1.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-2.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-3.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-4.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-5.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-6.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 	</Swiper>
		// 	<Swiper
		// 		onSwiper={setThumbsSwiper as any}
		// 		loop={true}
		// 		spaceBetween={10}
		// 		slidesPerView={4}
		// 		freeMode={true}
		// 		watchSlidesProgress={true}
		// 		modules={[FreeMode, Navigation, Thumbs]}
		// 		style={{
		// 			width: '100%',
		// 			height: '25%',
		// 			display: 'flex',

		// 		}}
		// 	>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-1.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-2.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-3.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-4.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-5.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 		<SwiperSlide>
		// 			<SwiperProductImage
		// 				src={'https://swiperjs.com/demos/images/nature-6.jpg'}
		// 			/>
		// 		</SwiperSlide>
		// 	</Swiper> */}
		// </Column>
	);
};

export default SingleProductCarousel;
