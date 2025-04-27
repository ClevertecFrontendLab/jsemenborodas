import {
    Box,
    Button,
    Card,
    CardBody,
    Grid,
    Hide,
    HStack,
    Icon,
    Show,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';

import healthyFood from '/public/healthyEating.png';
// eslint-disable-next-line import/order
import leaf from '/public/leaf.png';
import { RecipeData } from '~/components/entities/Data/RecipeData';
import { searchFormFiltersData } from '~/components/entities/Data/searchFormFiltersData';
import { FavouriteNotes, Likes } from '~/icons/Icon';

import childTasty from '../../../../public/childTasty.png';
import internationalFood from '../../../../public/internationalFood.png';
import pan from '../../../../public/pan.png';
import { Metrics } from '../../features/Metrics/Metrics';

interface ContentRecipeProps {
    selectedItems: string[];
    customAllergen: string[];
    isDisabled: boolean;
    isSearchStarted: boolean;
}
export function ContentRecipeDefault({
    selectedItems,
    customAllergen,
    isDisabled,
    isSearchStarted,
}: ContentRecipeProps) {
    const location = useLocation();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        Juciest: 'Самое сочное',
        SecondDelicious: 'Второе блюдо',
    };
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const secondSegment = pathSegments[1];
    const title = Name[secondSegment];
    const navigate = useNavigate();
    const currentCategory = pathSegments[0];
    const currentSubCategory = pathSegments[1];
    const filteredRecipes = RecipeData.filter((item) => item.category.includes(currentCategory));
    let filteredRecipesFull = filteredRecipes.filter((item) =>
        item.subcategory.includes(currentSubCategory),
    );
    filteredRecipesFull = filteredRecipesFull
        .filter((item) => item.date)
        .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
    const selectedItemsTitles: string[] = searchFormFiltersData
        .filter((item) => selectedItems.includes(item.id.toString()))
        .map((item) => item.title);

    let allAllergens = [...selectedItemsTitles, ...customAllergen];
    allAllergens = allAllergens.map((allergen) => allergen.toLowerCase());

    const categoriesDecrypt: { [key: string]: string } = {
        'second-dish': 'Вторые блюда',
        national: 'Национальные',
        'child-food': 'Детские блюда',
        vegan: 'Веганская кухня',
        snacks: 'Закуски',
        salads: 'Салаты',
        soups: 'Супы',
    };
    const categoriesTagDecrypt: { [key: string]: string } = {
        'second-dish': pan,
        national: internationalFood,
        'child-food': childTasty,
        vegan: leaf,
        snacks: healthyFood,
        salads: leaf,
        soups: pan,
    };
    if (isDisabled === false && allAllergens.length > 0) {
        filteredRecipesFull = filteredRecipesFull.filter(
            (item) =>
                !item.ingredients.some((ingredient) =>
                    allAllergens.includes(ingredient.title.toLowerCase()),
                ),
        );
    }

    return (
        <>
            <Box w='100%' rowGap={{ base: '0px' }} pl={{ xl: '4px' }}>
                <Grid
                    w='100%'
                    h='100%'
                    gridTemplateRows={{ base: 'repeat(1, 1fr)' }}
                    gridTemplateColumns={{
                        md: ' repeat(2, 1fr)',
                        xl: 'repeat(1, 1fr)',
                        '2xl': ' repeat(2, 1fr)',
                    }}
                    rowGap={{ base: '12px', xl: '16px' }}
                    columnGap={
                        title === 'Второе блюдо'
                            ? { md: '15px', '2xl': '30px' }
                            : { md: '15px', '2xl': '24px' }
                    }
                >
                    {(pathSegments[1] === 'second-dish'
                        ? filteredRecipesFull.slice(0, 8).reverse()
                        : filteredRecipesFull.slice(0, 8)
                    ).map((item, index) => (
                        <Card
                            border='1px solid #00000014'
                            bg='transparent'
                            w='100%'
                            h={{ base: '128px', xl: '244px' }}
                            borderRadius='8px'
                            overflow='hidden'
                            minW={{ xl: '880px', '2xl': '0' }}
                            data-test-id={isSearchStarted ? '' : `food-card-${index}`}
                        >
                            <CardBody p={0} maxH={{ xl: '244px' }} w='100%' maxW='100%'>
                                <HStack h='100%' maxW='100%'>
                                    <Box
                                        overflow='hidden'
                                        minW={{
                                            base: '47.8%',
                                            md: '44.6%',
                                            xl: '39.6%',
                                            '2xl': '52.11%',
                                        }}
                                        position='relative'
                                    >
                                        <Image
                                            src={item.image}
                                            h={{ base: '126px', xl: '242px' }}
                                            w='100%'
                                            objectFit='cover'
                                            objectPosition='center'
                                        ></Image>
                                        <Hide above='xl'>
                                            <Box
                                                transform={{
                                                    base: 'translateY(-119px) translateX(7px)',
                                                }}
                                                bgColor='#FFFFD3'
                                                w='fit-content'
                                                borderRadius='4px'
                                            >
                                                <HStack
                                                    spacing='2px'
                                                    pl='4px'
                                                    pr='4px'
                                                    pt='2px'
                                                    pb='2px'
                                                >
                                                    <Image
                                                        src={
                                                            categoriesTagDecrypt[
                                                                item.category[
                                                                    item.category.indexOf(
                                                                        currentCategory,
                                                                    )
                                                                ]
                                                            ]
                                                        }
                                                        w='16px'
                                                        h='16px'
                                                    ></Image>
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={400}
                                                        lineHeight='20px'
                                                        fontSize='14px'
                                                    >
                                                        {
                                                            categoriesDecrypt[
                                                                item.category[
                                                                    item.category.indexOf(
                                                                        currentCategory,
                                                                    )
                                                                ]
                                                            ]
                                                        }
                                                    </Text>
                                                </HStack>
                                            </Box>
                                        </Hide>
                                    </Box>
                                    <Box
                                        h={{ base: '126px', xl: '100%' }}
                                        mb={{ base: '12px', xl: '0px' }}
                                        position='relative'
                                        w='100%'
                                        maxW='100%'
                                        ml={
                                            title === 'Второе блюдо'
                                                ? { base: '18px', md: '16px', xl: '12px' }
                                                : { xl: '12px' }
                                        }
                                        mt={title === 'Второе блюдо' ? { md: '4px' } : {}}
                                    >
                                        <VStack
                                            maxW='100%'
                                            w='100%'
                                            spacing={0}
                                            alignItems='flex-start'
                                            mt={{ xl: '18px' }}
                                            pr={{ xl: '28px' }}
                                        >
                                            <HStack
                                                maxW='100%'
                                                h='24px'
                                                ml={{ base: '4px', xl: '3px' }}
                                                justifyContent={{ xl: 'space-between' }}
                                                w={{ xl: '100%' }}
                                                flexWrap='wrap'
                                            >
                                                <Show above='xl'>
                                                    <HStack
                                                        bgColor='#FFFFD3'
                                                        pl={2}
                                                        pr={2}
                                                        pt='1px'
                                                        pb='2px'
                                                        borderRadius='4px'
                                                    >
                                                        <Image
                                                            src={
                                                                categoriesTagDecrypt[
                                                                    item.category[
                                                                        item.category.indexOf(
                                                                            currentCategory,
                                                                        )
                                                                    ]
                                                                ]
                                                            }
                                                            w='14px'
                                                            h='14px'
                                                        ></Image>
                                                        <Text
                                                            fontFamily='Inter'
                                                            fontSize='14px'
                                                            fontWeight={500}
                                                            noOfLines={1}
                                                            overflow='hidden'
                                                        >
                                                            {
                                                                categoriesDecrypt[
                                                                    item.category[
                                                                        item.category.indexOf(
                                                                            currentCategory,
                                                                        )
                                                                    ]
                                                                ]
                                                            }
                                                        </Text>
                                                    </HStack>
                                                </Show>
                                                <HStack spacing='17px'>
                                                    <Metrics icon={FavouriteNotes}>
                                                        {item.bookmarks}
                                                    </Metrics>
                                                    <Metrics icon={Likes}>{item.likes}</Metrics>
                                                </HStack>
                                            </HStack>
                                            <HStack mt={{ xl: '24px' }} ml={{ xl: '2px' }}>
                                                <Text
                                                    fontFamily='Inter'
                                                    fontWeight={500}
                                                    lineHeight={{ base: '24px', xl: '28px' }}
                                                    fontSize={{ base: '16px', xl: '20px' }}
                                                    textAlign='left'
                                                    noOfLines={2}
                                                    h={{ xl: '28px' }}
                                                    letterSpacing={{ xl: '0.15px' }}
                                                >
                                                    {item.title}
                                                </Text>
                                            </HStack>
                                            <Show above='xl'>
                                                <HStack mt='8px' ml='1px'>
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={400}
                                                        fontSize={{ base: '14px' }}
                                                        lineHeight={{ base: '20px' }}
                                                        noOfLines={3}
                                                        textAlign='left'
                                                        h={{ xl: '64px' }}
                                                    >
                                                        {item.description}
                                                    </Text>
                                                </HStack>
                                            </Show>

                                            <HStack
                                                position='absolute'
                                                right={
                                                    title === 'Второе блюдо'
                                                        ? { base: '9px', xl: '20px', '2xl': '18px' }
                                                        : { base: '9px', xl: '20px' }
                                                }
                                                bottom={{ base: '9px', xl: '20px' }}
                                                spacing={{ base: '12px', xl: '8px' }}
                                                maxW='100%'
                                            >
                                                <Button
                                                    size='base'
                                                    w={{ base: '24px', xl: '122px' }}
                                                    h={{ base: '24px', xl: '32px' }}
                                                    border='1px solid #0000007A'
                                                    borderRadius='6px'
                                                    bg='transparent'
                                                >
                                                    <HStack>
                                                        <Icon as={FavouriteNotes} w='12px'></Icon>
                                                        <Show above='xl'>
                                                            <Text
                                                                fontFamily='Inter'
                                                                fontWeight={600}
                                                                fontSize='14px'
                                                                lineHeight='20px'
                                                            >
                                                                Сохранить
                                                            </Text>
                                                        </Show>
                                                    </HStack>
                                                </Button>

                                                <Button
                                                    w={{ base: '70px', xl: '88px' }}
                                                    h={{ base: '24px', xl: '32px' }}
                                                    bg='#000000EB'
                                                    borderRadius='6px'
                                                    onClick={() =>
                                                        navigate(`/the-juiciest/${item.id}`)
                                                    }
                                                >
                                                    <HStack spacing='7.5px'>
                                                        <Text
                                                            color='#FFFFFF'
                                                            fontWeight={600}
                                                            fontFamily='Inter'
                                                            fontSize={{
                                                                base: '12px',
                                                                xl: '14px',
                                                            }}
                                                            lineHeight={{ base: '16px' }}
                                                        >
                                                            Готовить
                                                        </Text>
                                                    </HStack>
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </HStack>
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
                <Button
                    h={{ base: '40px' }}
                    w={{ base: '152px' }}
                    borderRadius='6px'
                    bgColor='#B1FF2E'
                    fontFamily='Inter'
                    fontWeight={600}
                    letterSpacing='0.3px'
                    pl={3}
                    fontSize={16}
                    mt={4}
                    display={filteredRecipesFull.length > 0 ? '' : 'none'}
                >
                    Загрузить ещё
                </Button>
            </Box>
        </>
    );
}
