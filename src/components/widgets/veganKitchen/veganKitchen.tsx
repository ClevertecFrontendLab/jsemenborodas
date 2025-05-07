import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Grid,
    GridItem,
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { FavouriteNotes, Likes } from '~/icons/Icon';
import { useGetCategoriesQuery } from '~/query/services/categories';
import { useGetRecipeByCategoryQuery } from '~/query/services/recipesnew';
import { Category, recipe, SubCategory } from '~/query/types/types';
import { setAppError } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import { Metrics } from '../../features/Metrics/Metrics';

export function VeganKitchen() {
    const [randomCategory, setRandomCategory] = useState<Category>();
    const [randomSubCategory, setRandomSubCategory] = useState<SubCategory>();
    const [categories, setCategories] = useState<Category[]>();
    const [fiveRecipes, setFiveRecipes] = useState<recipe[]>([]);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const categoryName = pathSegments[0];

    const { data: categoryData, isError: isCategoryError } = useGetCategoriesQuery({});
    useEffect(() => {
        setCategories(categoryData?.filter((cat) => cat.subCategories !== undefined));
    }, [categoryData]);

    useEffect(() => {
        if (categoryName && categoryData) {
            setCategories(categoryData?.filter((cat) => cat.category === categoryName));
        }
    }, [categoryName, categoryData]);
    useEffect(() => {
        if (categories && categories.length) {
            setRandomCategory(categories[Math.floor(Math.random() * (categories?.length - 0) + 0)]);
        }
    }, [categories]);
    useEffect(() => {
        if (randomCategory && randomCategory.subCategories) {
            setRandomSubCategory(
                randomCategory?.subCategories[
                    Math.floor(Math.random() * (randomCategory?.subCategories?.length - 0) + 0)
                ],
            );
        }
    }, [randomCategory]);
    const {
        data: recipesOfRandomSubCategory,
        isLoading: _isRecipesLoading,
        isError: isRecipeError,
    } = useGetRecipeByCategoryQuery(
        {
            _id: randomSubCategory?._id ? randomSubCategory?._id : '',
            limit: 5,
        },
        { skip: !randomSubCategory },
    );
    useEffect(() => {
        if (recipesOfRandomSubCategory && recipesOfRandomSubCategory?.data) {
            setFiveRecipes(recipesOfRandomSubCategory?.data.slice(0, 5));
        }
    }, [recipesOfRandomSubCategory]);
    if (isCategoryError || isRecipeError) {
        dispatch(setAppError('Error'));
        localStorage.setItem('Error', 'Error');
        return null;
    } else {
        if (fiveRecipes?.length === 0) {
            return null;
        } else {
            return (
                <>
                    <Box
                        w='100%'
                        mt={{ base: '40px', md: '39px', xl: '62px', '3xl': '60px' }}
                        h={{ xl: '308px' }}
                        mb={{ base: '100px' }}
                    >
                        <Grid>
                            <GridItem>
                                <Grid
                                    templateColumns={{ xl: '33% 1fr' }}
                                    gap={{ base: '14px', '3xl': '245px' }}
                                >
                                    <GridItem>
                                        <Heading
                                            textAlign='left'
                                            fontFamily='Inter'
                                            fontWeight={500}
                                            fontSize={{ base: '24px', xl: '36px', '3xl': '48px' }}
                                            letterSpacing={{
                                                base: '0.4px',
                                                xl: '1px',
                                                '3xl': '1.5px',
                                            }}
                                            pl={{ xl: '4px', '3xl': '2px' }}
                                            pt={{ xl: '2px', '3xl': '8px' }}
                                            lineHeight={{ xl: '40px' }}
                                        >
                                            {randomCategory?.title}
                                        </Heading>
                                    </GridItem>
                                    <GridItem
                                        mt={
                                            pathSegments[0] === 'Juciest'
                                                ? {
                                                      base: '6px',
                                                      md: '8px',
                                                      xl: '4px',
                                                      '2xl': '2px',
                                                  }
                                                : {
                                                      base: '6px',
                                                      md: '8px',
                                                      xl: '4px',
                                                      '2xl': '6px',
                                                  }
                                        }
                                        w={{ base: '90%', md: '100%' }}
                                    >
                                        <Text
                                            w='99%'
                                            textAlign={{ base: 'left' }}
                                            fontFamily='Inter'
                                            fontWeight={500}
                                            color='#000000A3'
                                            fontSize={{ base: '14px', xl: '16px' }}
                                            letterSpacing={{ xl: '0.05px' }}
                                            lineHeight={{ base: '20px', xl: '24px' }}
                                        >
                                            {randomCategory?.description}
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                            <GridItem
                                h={{ base: '540px', md: '172px' }}
                                mt={{ base: '16px', md: '14px', xl: '24px' }}
                            >
                                <Grid
                                    templateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
                                    templateColumns={{
                                        base: '1fr',
                                        md: '31.9% 31.9% 33%',
                                        xl: '31.9% 31.9% 31.5%',
                                        '2xl': '23.9% 23.9% 1fr',
                                    }}
                                    gap={{ base: '12px', xl: '20px', '2xl': '22px' }}
                                    ml={{ xl: '4px' }}
                                >
                                    {fiveRecipes &&
                                        fiveRecipes.length &&
                                        fiveRecipes?.slice(0, 2).map((item) => (
                                            <GridItem
                                                h={{ base: '168px', xl: '180px', '2xl': '194px' }}
                                                minWidth='0'
                                            >
                                                <Card
                                                    h='100%'
                                                    borderRadius='8px'
                                                    border='1px solid #00000014'
                                                    boxShadow='none'
                                                    // className='custom-cursor'
                                                    bg='transparent'
                                                >
                                                    <CardBody
                                                        p={{ base: '12px' }}
                                                        pt={{ xl: '16px', '2xl': '24px' }}
                                                        pl={{ xl: '14px', '2xl': '20px' }}
                                                        pb={{ '2xl': 0 }}
                                                    >
                                                        <VStack
                                                            alignItems='flex-start'
                                                            spacing={{ xl: '5px' }}
                                                        >
                                                            <Box
                                                                maxW={{ base: '100%', xl: '95%' }}
                                                                className='WindowBroker'
                                                            >
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontWeight={500}
                                                                    fontSize={{
                                                                        base: '16px',
                                                                        xl: '20px',
                                                                    }}
                                                                    lineHeight={{
                                                                        base: '24px',
                                                                        xl: '28px',
                                                                    }}
                                                                    textAlign='left'
                                                                    whiteSpace='nowrap'
                                                                    overflow='hidden'
                                                                    textOverflow='ellipsis'
                                                                    letterSpacing={{ xl: '0.25px' }}
                                                                    sx={{
                                                                        WebkitLineClamp: '1',
                                                                    }}
                                                                    w='100%'
                                                                >
                                                                    {item.title}
                                                                </Text>
                                                            </Box>
                                                            <Box mt='2px'>
                                                                <Text
                                                                    fontFamily='Inter'
                                                                    fontWeight={400}
                                                                    fontSize={{ base: '13.9px' }}
                                                                    lineHeight={{ base: '20px' }}
                                                                    textAlign='left'
                                                                    noOfLines={3}
                                                                    mt={{ base: '6px', xl: '0px' }}
                                                                >
                                                                    {item.description}
                                                                </Text>
                                                            </Box>
                                                        </VStack>
                                                    </CardBody>
                                                    <CardFooter
                                                        h={{ '2xl': '50px' }}
                                                        pt={{
                                                            base: '16px',
                                                            xl: '16px',
                                                            '2xl': '4px',
                                                        }}
                                                        pr={{
                                                            base: '17px',
                                                            md: '18px',
                                                            '2xl': '30.5px',
                                                        }}
                                                        pl={{ base: '10px', '2xl': '20px' }}
                                                    >
                                                        <HStack
                                                            justifyContent='space-between'
                                                            w='100%'
                                                            ml={{ xl: '4px', '2xl': '0px' }}
                                                            minW={{ '2xl': '192px' }}
                                                        >
                                                            <Box bg='#FFFFD3' py='2px' px='8px'>
                                                                <HStack>
                                                                    <Image
                                                                        src={`https://training-api.clevertec.ru/${
                                                                            categoryData?.find(
                                                                                (cat) =>
                                                                                    cat.subCategories?.some(
                                                                                        (sub) =>
                                                                                            sub._id ===
                                                                                            item
                                                                                                .categoriesIds[0],
                                                                                    ),
                                                                            )?.icon
                                                                        }`}
                                                                    ></Image>
                                                                    <Text
                                                                        fontFamily='Inter'
                                                                        fontSize={{ base: '14px' }}
                                                                        lineHeight={{
                                                                            base: '20px',
                                                                        }}
                                                                        fontWeight={400}
                                                                        whiteSpace='nowrap'
                                                                        textOverflow='ellipsis'
                                                                        overflow='hidden'
                                                                    >
                                                                        {
                                                                            categoryData?.find(
                                                                                (cat) =>
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
                                                            </Box>
                                                            <Box>
                                                                <HStack spacing='16px'>
                                                                    <Metrics icon={FavouriteNotes}>
                                                                        <Text
                                                                            fontFamily='Inter'
                                                                            fontSize={{
                                                                                base: '12px',
                                                                            }}
                                                                            lineHeight={{
                                                                                base: '20px',
                                                                            }}
                                                                            fontWeight={600}
                                                                            color='#2DB100'
                                                                        >
                                                                            {item.bookmarks}
                                                                        </Text>
                                                                    </Metrics>
                                                                    <Metrics icon={Likes}>
                                                                        <Text>{item.likes}</Text>
                                                                    </Metrics>
                                                                </HStack>
                                                            </Box>
                                                        </HStack>
                                                    </CardFooter>
                                                </Card>
                                            </GridItem>
                                        ))}
                                    <GridItem
                                        h={{ base: '180px', xl: '200px' }}
                                        minW='0'
                                        height={{ base: '52px' }}
                                    >
                                        <VStack
                                            spacing={{
                                                base: '12px',
                                                md: '6px',
                                                xl: '12px',
                                                '2xl': '16px',
                                            }}
                                        >
                                            {fiveRecipes &&
                                                fiveRecipes.slice(2, 5).map((item) => (
                                                    <Card
                                                        borderRadius='8px'
                                                        border='1px solid #00000014'
                                                        h={{ base: '52px' }}
                                                        w='100%'
                                                        minW='0'
                                                        overflow='hidden'
                                                        maxW='100%'
                                                        boxShadow='none'
                                                        // className='custom-cursor'
                                                        bg='transparent'
                                                    >
                                                        <CardBody
                                                            p={{ base: '16px 0px 0px 12px' }}
                                                            pt={{ xl: '12px' }}
                                                            pl={{ md: '10px', xl: '9px' }}
                                                            minW='0'
                                                            w='100%'
                                                        >
                                                            <HStack
                                                                flexShrink={1}
                                                                w={{
                                                                    base: '63%',
                                                                    md: '57%',
                                                                    xl: '67%',
                                                                }}
                                                            >
                                                                <HStack
                                                                    minW='0'
                                                                    gap={{ base: '8px' }}
                                                                >
                                                                    <Box
                                                                        minW='24px'
                                                                        w='24px'
                                                                        ml={{ '2xl': '12px' }}
                                                                    >
                                                                        <Image
                                                                            src={`https://training-api.clevertec.ru/${
                                                                                categoryData?.find(
                                                                                    (cat) =>
                                                                                        cat.subCategories?.some(
                                                                                            (sub) =>
                                                                                                sub._id ===
                                                                                                item
                                                                                                    .categoriesIds[0],
                                                                                        ),
                                                                                )?.icon
                                                                            }`}
                                                                            w='24px'
                                                                            h='24px'
                                                                        ></Image>
                                                                    </Box>
                                                                    <Box
                                                                        w={{
                                                                            base: '100%',
                                                                            md: '100%',
                                                                            xl: '100%',
                                                                            '2xl': '100%',
                                                                        }}
                                                                    >
                                                                        <Text
                                                                            fontFamily='Inter'
                                                                            fontWeight={500}
                                                                            fontSize={{
                                                                                base: '16px',
                                                                                xl: '18px',
                                                                                '2xl': '20px',
                                                                            }}
                                                                            letterSpacing={{
                                                                                '2xl': '0.3px',
                                                                            }}
                                                                            whiteSpace='nowrap'
                                                                            overflow='hidden'
                                                                            textOverflow='ellipsis'
                                                                            textAlign={{
                                                                                '2xl': 'left',
                                                                            }}
                                                                            sx={{
                                                                                WebkitLineClamp:
                                                                                    '1',
                                                                            }}
                                                                            pl={{ '2xl': '6px' }}
                                                                        >
                                                                            {item.title}
                                                                        </Text>
                                                                    </Box>
                                                                </HStack>
                                                                <Box
                                                                    ml={{ base: '4px' }}
                                                                    mr={{
                                                                        md: '12px',
                                                                        '2xl': '18px',
                                                                    }}
                                                                >
                                                                    <Button
                                                                        bg='transparent'
                                                                        border='1px solid #2DB100'
                                                                        borderRadius='6px'
                                                                        minW='70px'
                                                                        minH='32px'
                                                                        w={{
                                                                            base: '70px',
                                                                            '2xl': '87px',
                                                                        }}
                                                                        h='32px'
                                                                        // cursor='none'
                                                                        position='absolute'
                                                                        right={{
                                                                            base: '12px',
                                                                            xl: '6px',
                                                                            '2xl': '16px',
                                                                        }}
                                                                        top={{
                                                                            base: '12px',
                                                                            xl: '10px',
                                                                        }}
                                                                    >
                                                                        <Text
                                                                            fontFamily='Inter'
                                                                            fontWeight={600}
                                                                            fontSize={{
                                                                                base: '12px',
                                                                                '2xl': '14px',
                                                                            }}
                                                                            color='#2DB100'
                                                                        >
                                                                            Готовить
                                                                        </Text>
                                                                    </Button>
                                                                </Box>
                                                            </HStack>
                                                        </CardBody>
                                                    </Card>
                                                ))}
                                        </VStack>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                        </Grid>
                    </Box>
                </>
            );
        }
    }
}
