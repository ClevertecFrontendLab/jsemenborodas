import {
    Box,
    Button,
    Card,
    CardBody,
    Grid,
    Hide,
    HStack,
    Icon,
    Image,
    Show,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import childTasty from '/public/childTasty.png';
import healthyFood from '/public/healthyEating.png';
import internationalFood from '/public/internationalFood.png';
import leaf from '/public/leaf.png';
// eslint-disable-next-line import/order
import pan from '/public/pan.png';
import { RecipeData } from '~/components/entities/Data/RecipeData';
import { FavouriteNotes, Likes } from '~/icons/Icon';

import { Metrics } from '../../features/Metrics/Metrics';

interface ContentRecipeProps {
    searchValue: string;
    selectedItems: string[];
    customAllergen: string[];
    isDisabled: boolean;
    meatTypes: { title: string; name: string }[];
    sideDishes: { title: string; name: string }[];
    categories: { id: number; title: string; name: string }[];
    authors: string[];
}

export function FilterContentRecipeSearch({
    searchValue,
    selectedItems,
    customAllergen,
    isDisabled,
    meatTypes,
    sideDishes,
    categories,
    // authors,
}: ContentRecipeProps) {
    const navigate = useNavigate();

    const filteredRecipes = RecipeData.filter((item) => {
        if (!item?.title) return false;

        const matchesSearch = item.title.toLowerCase().includes(searchValue.toLowerCase());
        const matchesMeatType =
            meatTypes.length === 0 ||
            (item.meat && meatTypes.some((meat) => meat.name === item.meat));
        const matchesSideDish =
            sideDishes.length === 0 ||
            (item.side && sideDishes.some((side) => side.name === item.side));
        const matchesCategory =
            categories.length === 0 ||
            item.category.some((cat) => categories.some((category) => category.name === cat));

        return matchesSearch && matchesMeatType && matchesSideDish && matchesCategory;
    });

    const categoriesDecrypt: Record<string, string> = {
        'second-dish': 'Вторые блюда',
        national: 'Национальные',
        'child-food': 'Детские блюда',
        vegan: 'Веганская кухня',
        snacks: 'Закуски',
        salads: 'Салаты',
        soups: 'Супы',
    };

    const categoriesTagDecrypt: Record<string, string> = {
        'second-dish': pan,
        national: internationalFood,
        'child-food': childTasty,
        vegan: leaf,
        snacks: healthyFood,
        salads: leaf,
        soups: pan,
    };

    const allAllergens = [...selectedItems, ...customAllergen].map((allergen) =>
        allergen.toLowerCase(),
    );

    const finalFilteredRecipes = filteredRecipes
        .filter((item) => {
            if (isDisabled && allAllergens.length > 0) {
                return !item.ingredients.some((ingredient) =>
                    allAllergens.includes(ingredient.title.toLowerCase()),
                );
            }
            return true;
        })
        .slice(0, 8);

    return (
        <Box w='100%' pl={{ xl: '4px' }} mt='48px'>
            <Grid
                w='100%'
                h='100%'
                gridTemplateRows={{ base: 'repeat(1, 1fr)' }}
                gridTemplateColumns={{
                    md: 'repeat(2, 1fr)',
                    xl: 'repeat(1, 1fr)',
                    '2xl': 'repeat(2, 1fr)',
                }}
                rowGap={{ base: '12px', xl: '16px' }}
                columnGap={{ md: '15px', '2xl': '30px' }}
            >
                {finalFilteredRecipes.map((item) => (
                    <Card
                        key={item.id}
                        border='1px solid #00000014'
                        bg='transparent'
                        w='100%'
                        h={{ base: '128px', xl: '244px' }}
                        borderRadius='8px'
                        overflow='hidden'
                    >
                        <CardBody p={0}>
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
                                        alt={item.title}
                                    />
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
                                                    src={categoriesTagDecrypt[item.category[0]]}
                                                    w='16px'
                                                    h='16px'
                                                    alt='Category icon'
                                                />
                                                <Text
                                                    fontFamily='Inter'
                                                    fontWeight={400}
                                                    lineHeight='20px'
                                                    fontSize='14px'
                                                >
                                                    {categoriesDecrypt[item.category[0]]}
                                                </Text>
                                            </HStack>
                                        </Box>
                                    </Hide>
                                </Box>
                                <Box h={{ base: '126px', xl: '100%' }} position='relative' w='100%'>
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
                                                        src={categoriesTagDecrypt[item.category[0]]}
                                                        w='14px'
                                                        h='14px'
                                                        alt='Category icon'
                                                    />
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontSize='14px'
                                                        fontWeight={500}
                                                        noOfLines={1}
                                                        overflow='hidden'
                                                    >
                                                        {categoriesDecrypt[item.category[0]]}
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
                                                letterSpacing={{ xl: '0.15px' }}
                                            >
                                                {(() => {
                                                    const searchIndex = item.title
                                                        .toLowerCase()
                                                        .indexOf(searchValue.toLowerCase());

                                                    if (searchIndex === -1) {
                                                        return item.title;
                                                    }

                                                    const lastIndex =
                                                        searchIndex + searchValue.length;
                                                    const beforeMatch = item.title.slice(
                                                        0,
                                                        searchIndex,
                                                    );
                                                    const match = item.title.slice(
                                                        searchIndex,
                                                        lastIndex,
                                                    );
                                                    const afterMatch = item.title.slice(lastIndex);

                                                    return (
                                                        <>
                                                            {beforeMatch}
                                                            <span
                                                                style={{
                                                                    color: '#2DB100',
                                                                }}
                                                            >
                                                                {match}
                                                            </span>
                                                            {afterMatch}
                                                        </>
                                                    );
                                                })()}
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
                                                >
                                                    {item.description}
                                                </Text>
                                            </HStack>
                                        </Show>
                                        <HStack
                                            position='absolute'
                                            right={{ base: '9px', xl: '20px' }}
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
                                                    <Icon as={FavouriteNotes} w='12px' />
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
                                                onClick={() => navigate(`/Juciest/${item.id}`)}
                                            >
                                                <HStack spacing='7.5px'>
                                                    <Text
                                                        color='#FFFFFF'
                                                        fontWeight={600}
                                                        fontFamily='Inter'
                                                        fontSize={{ base: '12px', xl: '14px' }}
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
                _hover={{ bg: '#A0EB2D' }}
            >
                Загрузить ещё
            </Button>
        </Box>
    );
}
