import { Box, Hide, HStack, Show, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';

import { Metrics } from '~/components/features/Metrics/Metrics';
import { FavouriteNotes, Likes } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { recipe } from '~/query/types/types';
type SliderCardProps = {
    item: recipe;
};

export function SliderCard({ item }: SliderCardProps) {
    const { data: categoriesResponse } = useGetCategoriesQuery({});
    const categoryData = categoriesResponse?.length ? categoriesResponse : [];
    const catData = Array.isArray(categoryData) ? categoryData : [];
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
    const imageWidth = useBreakpointValue({
        base: '158px',
        xl: '277px',
        '2xl': '322px',
    });
    const imageHeight = useBreakpointValue({
        base: '128px',
        xl: '230px',
    });

    return (
        <VStack
            position='relative'
            textAlign='left'
            minW={cardWidth}
            maxW={cardWidth}
            minH={cardHeight}
            maxH={cardHeight}
            borderRadius={8}
            alignItems='flex-start'
            border='1px solid rgba(0, 0, 0, 0.08)'
        >
            <Image
                src={`https://training-api.clevertec.ru/${item.image}`}
                objectFit='cover'
                borderTopRadius={8}
                minW={imageWidth}
                maxW={imageWidth}
                minH={imageHeight}
                maxHeight={imageHeight}
            />
            <Hide above='xl'>
                <HStack
                    position='absolute'
                    left={{ base: '8px' }}
                    top={{ base: '8px' }}
                    w='fit-content'
                    maxW={{ base: '136px' }}
                    h='24px'
                    p={{ base: '2px 4px' }}
                    borderRadius='4px'
                    spacing='2px'
                    bg='#D7FF94'
                >
                    <Image
                        src={`https://training-api.clevertec.ru/${
                            catData?.find((cat) =>
                                cat.subCategories?.some((sub) => sub._id === item.categoriesIds[0]),
                            )?.icon
                        }`}
                    ></Image>
                    <Text
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={14}
                        lineHeight={5}
                        noOfLines={1}
                    >
                        {
                            catData?.find((cat) =>
                                cat.subCategories?.some((sub) => sub._id === item.categoriesIds[0]),
                            )?.title
                        }
                    </Text>
                </HStack>
            </Hide>
            <Box
                textAlign='left'
                w='100%'
                mt={{ xl: 1, '2xl': 2 }}
                px={{ base: 2, xl: 3, '2xl': 6 }}
                noOfLines={{ base: 2, xl: 1 }}
                fontFamily='Inter'
                fontWeight={500}
                fontSize={{ base: 16, xl: 18, '2xl': '20' }}
                lineHeight={{ base: 6, xl: 7 }}
            >
                {item.title}
            </Box>
            <Show above='xl'>
                <Box
                    textAlign='left'
                    w='100%'
                    pl={{ xl: 3, '2xl': 6 }}
                    noOfLines={3}
                    fontFamily='Inter'
                    fontWeight={400}
                    fontSize={14}
                    lineHeight={5}
                >
                    {item.description}
                </Box>
                <HStack
                    w='fit-content'
                    position='absolute'
                    bottom={{ base: 3, '2xl': 5 }}
                    left={{ base: 3, '2xl': 6 }}
                    h='24px'
                    p={{ base: '2px 8px' }}
                    borderRadius='4px'
                    spacing='2px'
                    bg='#D7FF94'
                >
                    <Image
                        src={`https://training-api.clevertec.ru/${
                            catData?.find((cat) =>
                                cat.subCategories?.some((sub) => sub._id === item.categoriesIds[0]),
                            )?.icon
                        }`}
                    ></Image>
                    <Text
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize={14}
                        lineHeight={5}
                        noOfLines={1}
                    >
                        {
                            catData?.find((cat) =>
                                cat.subCategories?.some((sub) => sub._id === item.categoriesIds[0]),
                            )?.title
                        }
                    </Text>
                </HStack>
            </Show>
            <HStack
                w='fit-content'
                bg='transparent'
                position='absolute'
                bottom={{ base: 1.5, xl: 3, '2xl': 5 }}
                left={{ base: 2.5, xl: 'auto' }}
                right={{ xl: 3, '2xl': 6 }}
                spacing={{ base: 2, '2xl': 4 }}
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
        </VStack>
    );
}
