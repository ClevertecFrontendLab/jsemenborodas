import 'swiper/swiper-bundle.css';

import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { FetchConsts } from '~/components/consts/FetchConsts';
import { useGetRecipeByCreateDateQuery } from '~/query/services/recipesnew';

import { SliderButtonNext } from './SliderButtonNext';
import { SliderButtonPrev } from './SliderButtonPrevious';
import { SliderCard } from './SliderCard';
export function Slider() {
    const { data } = useGetRecipeByCreateDateQuery({
        limit: FetchConsts.SLIDERCARDSLIMIT,
    });

    const swiperRef = useRef<SwiperType | null>(null);
    const filteredData = data?.data;
    const swiperWidth = useBreakpointValue({
        base: '100vw',
        sm: 'calc(100vw - 24px)',
        xl: '100%',
    });
    const cardWidth = useBreakpointValue({
        base: '158px',
        xl: '277px',
        '2xl': '322px',
    });

    const cardHeight = useBreakpointValue({
        base: '220px',
        xl: '402px',
        '2xl': '414px',
    });
    const swiperMarginTop = useBreakpointValue({
        base: '12px',
        xl: '24px',
    });
    const swiperMarginLeft = useBreakpointValue({
        base: '0px',
        xl: '3px',
        '2xl': '1px',
    });

    const spaceBetween = useBreakpointValue({
        base: '12px',
        '2xl': '24px',
    });
    return (
        <Box position='relative'>
            <Heading
                mt={{ base: '24px', xl: '48px' }}
                fontFamily='Inter'
                fontWeight={500}
                fontSize={{ base: '24px', xl: '36px', '2xl': '48px' }}
                lineHeight={{ base: '32px', xl: '40px', '2xl': '48px' }}
                textAlign='left'
                letterSpacing={{ base: '0.61px', xl: '2px' }}
            >
                Новые рецепты
            </Heading>
            <SliderButtonNext onClickFunc={() => swiperRef.current?.slideNext()} />
            <Swiper
                data-test-id='carousel'
                loop={true}
                modules={[Navigation]}
                allowTouchMove={true}
                style={{
                    minWidth: swiperWidth,
                    maxWidth: swiperWidth,
                    margin: '0',
                    marginTop: swiperMarginTop,
                    marginLeft: swiperMarginLeft,
                }}
                slidesPerView='auto'
                spaceBetween={spaceBetween}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {filteredData?.map((item, index) => (
                    <SwiperSlide
                        key={`swiper-slide-${index}`}
                        data-test-id={`carousel-card-${index}`}
                        style={{
                            minWidth: cardWidth,
                            maxWidth: cardWidth,
                            minHeight: cardHeight,
                            maxHeight: cardHeight,
                        }}
                    >
                        <SliderCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderButtonPrev onClickFunc={() => swiperRef.current?.slidePrev()} />
        </Box>
    );
}
