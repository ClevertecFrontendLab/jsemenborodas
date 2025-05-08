import 'swiper/swiper-bundle.css';

import { Box, Heading, Hide, HStack, Show, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Metrics } from '~/components/features/Metrics/Metrics';
import { FavouriteNotes, Likes } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipeByCreateDateQuery } from '~/query/services/recipesnew';
import { Category, recipe, SubCategory } from '~/query/types/types';

import { SliderButton } from './SliderButton';

export function Slider() {
    const swiperRef = useRef(null);
    const width = useBreakpointValue({
        base: '158px',
        xl: '279px',
        '2xl': '322px',
    });

    const spaceBetween = useBreakpointValue({
        base: '12px',
        xl: '24px',
    });

    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetRecipeByCreateDateQuery({
        limit: 10,
    });
    const { data: catData } = useGetCategoriesQuery({});
    const filteredData = data?.data
        ?.slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    if (isError) {
        return null;
    }
    if (isLoading) {
        return null;
    }
    return (
        <>
            <Box
                maxW={{
                    base: '100vw',
                    sm: 'calc(100vw - 40px)',
                    md: 'calc(880px + (1440px - 880px) * ((100vw - 880px) / (1440 - 880)))',
                    xl: '1360px',
                }}
                minW={{ xl: '880px' }}
                w={{ xl: '100%' }}
                h={{ xl: '466px' }}
                position='relative'
                pr={{ base: '0' }}
                ml={{ xl: '3.2px' }}
                my={{ base: '25px', xl: '14px', '2xl': '0px' }}
                mb={{ xl: '0px', '2xl': '58px' }}
                mt={{ base: '24px', xl: '54px', '2xl': '50px' }}
            >
                <Box display={{ base: 'none', xl: 'block' }}>
                    <SliderButton swiperRef={swiperRef} />
                </Box>

                <Heading
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize={{ base: '24px', xl: '37px', '2xl': '48px' }}
                    lineHeight={{ base: '32px', '2xl': '48px' }}
                    letterSpacing={{ base: '0.61px', xl: '1px', '2xl': '2px' }}
                    textAlign='left'
                    mb={{ base: '10px', md: '12px', xl: '26px', '2xl': '24px' }}
                >
                    Новые рецепты
                </Heading>
                <Swiper
                    threshold={1}
                    ref={swiperRef}
                    slidesPerView='auto'
                    modules={[Navigation]}
                    style={{ width: '100%', minWidth: '0px' }}
                    loop={true}
                    spaceBetween={spaceBetween}
                    data-test-id='carousel'
                >
                    {catData &&
                        data &&
                        'data' in data &&
                        filteredData &&
                        filteredData.map((item: recipe, index: number) => (
                            <HStack bg='red' w='20px' minW='0'>
                                <SwiperSlide
                                    data-test-id={`carousel-card-${index}`}
                                    style={{
                                        width: width,
                                        minWidth: width,
                                        maxWidth: width,
                                    }}
                                >
                                    <VStack
                                        h={{ base: '220px', xl: '402px', '2xl': '414px' }}
                                        flexShrink={0}
                                        position='relative'
                                        border='1px solid #00000014'
                                        borderRadius='8px'
                                        cursor='pointer'
                                        onClick={() => {
                                            const subcategoryLink = catData?.find(
                                                (cat) => cat._id === item.categoriesIds[0],
                                            ) as SubCategory | undefined;
                                            const categoryLink = catData?.find(
                                                (cat) =>
                                                    cat._id === subcategoryLink?.rootCategoryId,
                                            ) as Category | undefined;
                                            navigate(
                                                `/${categoryLink?.category}/${subcategoryLink?.category}/${item._id}`,
                                            );
                                        }}
                                    >
                                        <Box
                                            w={{
                                                base: '158px',
                                                xl: '277px',
                                                '2xl': '322px',
                                            }}
                                            minH={{ base: '128px', xl: '230px' }}
                                            maxH={{ xl: '230px' }}
                                        >
                                            <Image
                                                src={`https://training-api.clevertec.ru/${item.image}`}
                                                w='100%'
                                                h='100%'
                                                borderTopRadius='8px'
                                            ></Image>

                                            <Hide above='xl'>
                                                <HStack
                                                    w='fit-content'
                                                    bg='#D7FF94'
                                                    borderRadius='4px'
                                                    spacing='2px'
                                                    px={{ base: '4px' }}
                                                    py={{ base: '2px' }}
                                                    transform='translateY(-120px) translateX(8px)'
                                                >
                                                    <Image
                                                        src={`https://training-api.clevertec.ru/${
                                                            catData?.find((cat) =>
                                                                cat.subCategories?.some(
                                                                    (sub) =>
                                                                        sub._id ===
                                                                        item.categoriesIds[0],
                                                                ),
                                                            )?.icon
                                                        }`}
                                                    ></Image>
                                                    <Text
                                                        fontWeight='400'
                                                        fontSize='14px'
                                                        fontFamily='Inter'
                                                        h='20px'
                                                        maxW='200px'
                                                        lineHeight='20px'
                                                        noOfLines={1}
                                                        textAlign='left'
                                                        w={{ base: '102px', xl: 'auto' }}
                                                    >
                                                        {
                                                            catData?.find((cat) =>
                                                                cat.subCategories?.some(
                                                                    (sub) =>
                                                                        sub._id ===
                                                                        item.categoriesIds[0],
                                                                ),
                                                            )?.title
                                                        }
                                                    </Text>
                                                </HStack>
                                            </Hide>
                                        </Box>
                                        <Box
                                            w={{ base: '158px', xl: '277px' }}
                                            h={{ base: '92px', xl: '172px' }}
                                            pt={{ xl: '5px', '2xl': '9px' }}
                                        >
                                            <Heading
                                                w={{
                                                    base: '142px',
                                                    xl: '255px',
                                                    '2xl': '274px',
                                                }}
                                                h={{ base: '48px', xl: '28px' }}
                                                lineHeight={{ base: '24px', xl: '28px' }}
                                                fontFamily='Inter'
                                                fontSize={{
                                                    base: '16px',
                                                    xl: '18px',
                                                    '2xl': '20.2px',
                                                }}
                                                fontWeight='500'
                                                textAlign='left'
                                                ml={{ base: '8px', xl: '0px' }}
                                                noOfLines={{ base: 2, xl: 1 }}
                                                display={{ xl: 'block' }}
                                                whiteSpace={{ xl: 'nowrap' }}
                                                pl={{ xl: '12px', '2xl': '2px' }}
                                            >
                                                {item.title}
                                            </Heading>

                                            <Show above='xl'>
                                                <Text
                                                    w={{ xl: '270px', '2xl': '280px' }}
                                                    h='64px'
                                                    fontFamily='Inter'
                                                    fontSize='14px'
                                                    lineHeight='20px'
                                                    textAlign='left'
                                                    mt='8px'
                                                    noOfLines={3}
                                                    pl={{ xl: '12px', '2xl': '1.5px' }}
                                                >
                                                    {item.description}
                                                </Text>
                                            </Show>
                                            <Box
                                                w={{ base: '142px', xl: '100%' }}
                                                h='24px'
                                                mt={{ base: '11px', xl: '23px' }}
                                                ml={{ base: '12px', xl: 0 }}
                                            >
                                                <HStack
                                                    spacing='17px'
                                                    w='100%'
                                                    justifyContent='space-between'
                                                >
                                                    <Show above='xl'>
                                                        <HStack
                                                            ml={{
                                                                xl: '12px',
                                                                '2xl': '2px',
                                                            }}
                                                            px={2}
                                                            spacing='8px'
                                                            w='fit-content'
                                                            h='24px'
                                                            fontWeight='400'
                                                            fontFamily='Inter'
                                                            fontSize='14px'
                                                            lineHeight='20px'
                                                            bg='#D7FF94'
                                                            whiteSpace='nowrap'
                                                        >
                                                            <Image
                                                                src={`https://training-api.clevertec.ru/${
                                                                    catData?.find((cat) =>
                                                                        cat.subCategories?.some(
                                                                            (sub) =>
                                                                                sub._id ===
                                                                                item
                                                                                    .categoriesIds[0],
                                                                        ),
                                                                    )?.icon
                                                                }`}
                                                                w={4}
                                                            ></Image>
                                                            <Text bg='#D7FF94'>
                                                                {
                                                                    catData?.find((cat) =>
                                                                        cat.subCategories?.some(
                                                                            (sub) =>
                                                                                sub._id ===
                                                                                item
                                                                                    .categoriesIds[0],
                                                                        ),
                                                                    )?.title
                                                                }
                                                            </Text>
                                                        </HStack>
                                                    </Show>
                                                    <HStack
                                                        spacing={{
                                                            base: '16px',
                                                            xl: '8px',
                                                        }}
                                                        mr={{ xl: '12px', '2xl': '-1px' }}
                                                        w='fit-content'
                                                        bg='transparent'
                                                    >
                                                        {item.bookmarks > 0 && (
                                                            <Metrics
                                                                w={{ xl: 'fit-content' }}
                                                                bg='transparent'
                                                                icon={FavouriteNotes}
                                                            >{`${item.bookmarks}`}</Metrics>
                                                        )}
                                                        {item.likes > 0 && (
                                                            <Metrics
                                                                w={{ xl: 'fit-content' }}
                                                                bg='transparent'
                                                                icon={Likes}
                                                            >{`${item.likes}`}</Metrics>
                                                        )}
                                                    </HStack>
                                                </HStack>
                                            </Box>
                                        </Box>{' '}
                                    </VStack>
                                </SwiperSlide>
                            </HStack>
                        ))}
                </Swiper>
            </Box>
        </>
    );
}
