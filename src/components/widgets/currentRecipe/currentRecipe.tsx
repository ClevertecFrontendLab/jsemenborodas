import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    VStack,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { RecipeData } from '~/components/entities/Data/RecipeData';
import { Metrics } from '~/components/features/Metrics/Metrics';
import { FavouriteNotes, Likes } from '~/icons/Icon';

// interface PageMenuProps {
//     isBurgerOpen: boolean;
// }
import childTasty from '../../../../public/childTasty.png';
import internationalFood from '../../../../public/internationalFood.png';
import pan from '../../../../public/pan.png';
import BookMarks from '../../shared/images/icons/bookmarks.png';
import BsAlarm from '../../shared/images/icons/BsAlarm.png';
import LoveSmile from '../../shared/images/icons/loveSmile.png';
export function CurrentRecipe() {
    // { isBurgerOpen }: PageMenuProps
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const recipeId = pathSegments[pathSegments.length - 1];
    const recipe = RecipeData.find((recipe) => recipe.id === recipeId);
    const allCategories: string[] = [];
    allCategories.push(...(recipe?.category.map((item) => item.toString()) || []));
    const categoriesDecrypt: { [key: string]: string } = {
        'second-dish': 'Вторые блюда',
        national: 'Национальные',
        'child-food': 'Детские блюда',
    };
    const categoriesTagDecrypt: { [key: string]: string } = {
        'second-dish': pan,
        national: internationalFood,
        'child-food': childTasty,
    };

    const [inputValue, setInputValue] = useState(1);

    const handleChange = (valueString: string) => {
        const valueNumber = parseInt(valueString, 10);
        setInputValue(valueNumber);
        console.log(valueNumber);
    };
    return (
        <>
            {recipe && (
                <Box
                    h={{ base: '2796px', md: '2292px', xl: '3462px', '3xl': '3442px' }}
                    w={{ base: 'calc( 100% - 32px )', md: '100%' }}
                    mt={{ base: '16px', md: '18px', xl: '56px' }}
                    borderRadius='8px'
                    mb={{ base: '16px', xl: '5px' }}
                    ml={{ xl: '3px' }}
                >
                    <Grid
                        templateColumns={{
                            md: '31.8% auto',
                            xl: '40.12% auto',
                            '3xl': '40.79% auto',
                        }}
                    >
                        <Image
                            src={recipe.image}
                            objectFit='fill'
                            objectPosition='center'
                            w={{
                                base: '100%',
                            }}
                            h={{ base: '224px', xl: '410px' }}
                            borderRadius='8px'
                        ></Image>
                        <Box mt={{ base: '16px', md: '0px' }}>
                            <HStack justifyContent='space-between' w='100%' alignItems='flex-start'>
                                <Flex
                                    textAlign='left'
                                    flexWrap={{ base: 'wrap' }}
                                    ml={{ md: '16px', xl: '24px', '3xl': '22px' }}
                                >
                                    {allCategories.map((item) => (
                                        <Box
                                            key={item}
                                            w='fit-content'
                                            mb={{ base: '8px' }}
                                            mr={{ base: '8px', md: '10px', '3xl': '17px' }}
                                            alignItems='flex-start'
                                        >
                                            <HStack bg='#FFFFD3' p='2px 8px'>
                                                <Image
                                                    src={categoriesTagDecrypt[item]}
                                                    w='16px'
                                                    h='16px'
                                                ></Image>
                                                <Text
                                                    fontFamily='Inter'
                                                    fontSize='14px'
                                                    lineHeight='20px'
                                                    fontWeight='400'
                                                    letterSpacing={0}
                                                    whiteSpace='nowrap'
                                                >
                                                    {categoriesDecrypt[item]}
                                                </Text>
                                            </HStack>
                                        </Box>
                                    ))}
                                </Flex>
                                <Box
                                    h='100%'
                                    mt={{ base: '2.5px', '3xl': '6px' }}
                                    mr={{ base: '5px', '3xl': '11px' }}
                                >
                                    <HStack h='100%' spacing={{ base: 4, '3xl': 8 }}>
                                        {recipe.bookmarks > 0 && (
                                            <Metrics
                                                icon={FavouriteNotes}
                                                iconSizeXL='14px'
                                                spacingXL='8px'
                                            >
                                                <Text fontSize={{ base: '12px', '3xl': '14px' }}>
                                                    {recipe.bookmarks}
                                                </Text>
                                            </Metrics>
                                        )}
                                        {recipe.likes > 0 && (
                                            <Metrics icon={Likes} iconSizeXL='14px' spacingXL='8px'>
                                                <Text fontSize={{ base: '12px', '3xl': '14px' }}>
                                                    {recipe.likes}
                                                </Text>
                                            </Metrics>
                                        )}
                                    </HStack>
                                </Box>
                            </HStack>
                            <VStack
                                mt={{ base: '24px', xl: '23px', '3xl': '32px' }}
                                alignItems='flex-start'
                                ml={{ md: '16px', xl: '24px', '3xl': '22px' }}
                                minW={{ '3xl': '650px' }}
                            >
                                <HStack>
                                    <Heading
                                        fontFamily='Inter'
                                        fontWeight={700}
                                        lineHeight={{ base: '32px', xl: '48px' }}
                                        fontSize={{ base: '24px', xl: '48px' }}
                                        letterSpacing={{
                                            base: '0.25px',
                                            xl: '1.16px',
                                        }}
                                        textAlign='left'
                                        w={{ xl: '437px' }}
                                    >
                                        {recipe.title}
                                    </Heading>
                                </HStack>
                                <HStack
                                    mt={{ base: '8px', xl: '18px', '3xl': '16px' }}
                                    w={{ '3xl': '540px' }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                        textAlign='left'
                                        letterSpacing='0.02px'
                                    >
                                        {recipe.description}
                                    </Text>
                                </HStack>
                            </VStack>
                            <Flex
                                flexWrap='wrap'
                                mt={{ base: '24px', xl: '128px', '3xl': '138px' }}
                                alignItems='flex-start'
                                justifyContent={{ md: 'space-between' }}
                            >
                                <HStack
                                    bg='#0000000F'
                                    borderRadius='4px'
                                    p='2px 8px'
                                    h={{ base: '24px' }}
                                    mb={{ base: '12px' }}
                                    mr={{ base: '13px', md: '0px' }}
                                    ml={{ md: '16px', xl: '24px', '3xl': '22px' }}
                                    mt={{ xl: '8px', '3xl': '24px' }}
                                >
                                    <Image src={BsAlarm} w='16px' h='16px'></Image>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                    >
                                        {recipe.time}
                                    </Text>
                                </HStack>
                                <HStack
                                    spacing={{ base: '13px', '3xl': '19px' }}
                                    mr={{ md: '1px', xl: '0px' }}
                                    pr='0px'
                                >
                                    <HStack
                                        borderRadius='6px'
                                        border='1px solid #0000007A'
                                        p={{ base: '0px 8px', xl: '0px 12px', '3xl': '0px 24px' }}
                                        h={{ base: '24px', xl: '32px', '3xl': '48px' }}
                                        spacing={{ base: '5px', xl: '8px' }}
                                    >
                                        <Image
                                            src={LoveSmile}
                                            w={{ base: '12px', xl: '14px', '3xl': '16px' }}
                                            h={{ base: '12px', xl: '14px', '3xl': '16px' }}
                                        ></Image>
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={600}
                                            fontSize={{ base: '12px', xl: '14px', '3xl': '18px' }}
                                            lineHeight={{ base: '16px', xl: '20px', '3xl': '28px' }}
                                            color='#000000CC'
                                        >
                                            Оценить рецепт
                                        </Text>
                                    </HStack>
                                    <HStack
                                        borderRadius='6px'
                                        bg='#B1FF2E'
                                        p={{ base: '0px 8px', xl: '0px 12px', '3xl': '0px 24px' }}
                                        h={{ base: '24px', xl: '32px', '3xl': '48px' }}
                                        spacing={{ base: '5px', xl: '8px' }}
                                    >
                                        <Image
                                            src={BookMarks}
                                            w={{ base: '12px', xl: '14px', '3xl': '16px' }}
                                            h={{ base: '12px', xl: '14px', '3xl': '16px' }}
                                        ></Image>
                                        <Text
                                            fontFamily='Inter'
                                            fontWeight={600}
                                            fontSize={{ base: '12px', xl: '14px', '3xl': '18px' }}
                                            lineHeight={{ base: '16px', xl: '20px', '3xl': '28px' }}
                                        >
                                            Сохранить в закладки
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Flex>
                        </Box>
                    </Grid>
                    <Box
                        mt={{ base: '24px', md: '12px', xl: '28px' }}
                        w={{ base: '100%', xl: '578px', '3xl': '668px' }}
                        mx={{ xl: 'auto' }}
                    >
                        <Text
                            fontFamily='Inter'
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='20px'
                            textAlign='left'
                        >
                            * Калорийность на 1 порцию
                        </Text>
                        <Grid
                            gap={{ base: '12px', '2xl': '24px' }}
                            w={{ base: '100%', md: '728px' }}
                            mx={{ md: 'auto' }}
                            mt={{ base: '12px', md: '20px' }}
                            templateColumns={{
                                md: '173px 173px 173px 173px',
                                xl: '135px 135px 135px 135px',
                                '2xl': '149px 149px 149px 149px',
                            }}
                        >
                            <GridItem
                                w={{ base: '100%' }}
                                h={{ base: '64px', md: '136px' }}
                                borderRadius='16px'
                                border='1px solid #00000014'
                                p={{ base: '16px 12px' }}
                            >
                                <Flex
                                    justifyContent={{ base: 'space-between', md: 'center' }}
                                    flexWrap={{ md: 'wrap' }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                        color='#0000007A'
                                        w={{ base: '117.5px', md: '141px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        mt={{ base: '5px', md: 0 }}
                                        justifyContent={{ md: 'flex-start' }}
                                    >
                                        калорийность
                                    </Text>
                                    <Text
                                        color='#134B00'
                                        fontSize={{ base: '24px', md: '36px' }}
                                        fontFamily='Inter'
                                        lineHeight={{ base: '32px', md: '40px' }}
                                        fontWeight='500'
                                        w={{ base: '117.5px', md: '141px' }}
                                        ml={{ base: '3px' }}
                                        mt={{ md: '12px' }}
                                        letterSpacing={{ md: '2px' }}
                                    >
                                        {recipe.nutritionValue.calories}
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize={{ base: '12px', md: '14px' }}
                                        fontWeight={600}
                                        lineHeight={{ base: '16px', md: '20px' }}
                                        w={{ base: '61px', md: '141px' }}
                                        mt={{ base: '8px', md: '12px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        ml={{ base: '6px', md: '0' }}
                                    >
                                        ККАЛ
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem
                                w={{ base: '100%' }}
                                h={{ base: '64px', md: '136px' }}
                                borderRadius='16px'
                                border='1px solid #00000014'
                                p={{ base: '16px 12px' }}
                            >
                                <Flex
                                    justifyContent={{ base: 'space-between', md: 'center' }}
                                    flexWrap={{ md: 'wrap' }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                        color='#0000007A'
                                        w={{ base: '117.5px', md: '141px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        mt={{ base: '5px', md: 0 }}
                                        justifyContent={{ md: 'flex-start' }}
                                    >
                                        белки
                                    </Text>
                                    <Text
                                        color='#134B00'
                                        fontSize={{ base: '24px', md: '36px' }}
                                        fontFamily='Inter'
                                        lineHeight={{ base: '32px', md: '40px' }}
                                        fontWeight='500'
                                        w={{ base: '117.5px', md: '141px' }}
                                        ml={{ base: '3px' }}
                                        mt={{ md: '12px' }}
                                        letterSpacing={{ md: '2px' }}
                                    >
                                        {recipe.nutritionValue.proteins}
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize={{ base: '12px', md: '14px' }}
                                        fontWeight={600}
                                        lineHeight={{ base: '16px', md: '20px' }}
                                        w={{ base: '61px', md: '141px' }}
                                        mt={{ base: '8px', md: '12px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        ml={{ base: '6px', md: '0' }}
                                    >
                                        ГРАММ
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem
                                w={{ base: '100%' }}
                                h={{ base: '64px', md: '136px' }}
                                borderRadius='16px'
                                border='1px solid #00000014'
                                p={{ base: '16px 12px' }}
                            >
                                <Flex
                                    justifyContent={{ base: 'space-between', md: 'center' }}
                                    flexWrap={{ md: 'wrap' }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                        color='#0000007A'
                                        w={{ base: '117.5px', md: '141px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        mt={{ base: '5px', md: 0 }}
                                        justifyContent={{ md: 'flex-start' }}
                                    >
                                        жиры
                                    </Text>
                                    <Text
                                        color='#134B00'
                                        fontSize={{ base: '24px', md: '36px' }}
                                        fontFamily='Inter'
                                        lineHeight={{ base: '32px', md: '40px' }}
                                        fontWeight='500'
                                        w={{ base: '117.5px', md: '141px' }}
                                        ml={{ base: '3px' }}
                                        mt={{ md: '12px' }}
                                        letterSpacing={{ md: '2px' }}
                                    >
                                        {recipe.nutritionValue.fats}
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize={{ base: '12px', md: '14px' }}
                                        fontWeight={600}
                                        lineHeight={{ base: '16px', md: '20px' }}
                                        w={{ base: '61px', md: '141px' }}
                                        mt={{ base: '8px', md: '12px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        ml={{ base: '6px', md: '0' }}
                                    >
                                        ГРАММ
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem
                                w={{ base: '100%' }}
                                h={{ base: '64px', md: '136px' }}
                                borderRadius='16px'
                                border='1px solid #00000014'
                                p={{ base: '16px 12px' }}
                            >
                                <Flex
                                    justifyContent={{ base: 'space-between', md: 'center' }}
                                    flexWrap={{ md: 'wrap' }}
                                >
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize='14px'
                                        lineHeight='20px'
                                        color='#0000007A'
                                        w={{ base: '117.5px', md: '141px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        mt={{ base: '5px', md: 0 }}
                                        justifyContent={{ md: 'flex-start' }}
                                    >
                                        углеводы
                                    </Text>
                                    <Text
                                        color='#134B00'
                                        fontSize={{ base: '24px', md: '36px' }}
                                        fontFamily='Inter'
                                        lineHeight={{ base: '32px', md: '40px' }}
                                        fontWeight='500'
                                        w={{ base: '117.5px', md: '141px' }}
                                        ml={{ base: '3px' }}
                                        mt={{ md: '12px' }}
                                        letterSpacing={{ md: '2px' }}
                                    >
                                        {recipe.nutritionValue.carbohydrates}
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        fontSize={{ base: '12px', md: '14px' }}
                                        fontWeight={600}
                                        lineHeight={{ base: '16px', md: '20px' }}
                                        w={{ base: '61px', md: '141px' }}
                                        mt={{ base: '8px', md: '12px' }}
                                        textAlign={{ base: 'left', md: 'center' }}
                                        ml={{ base: '6px', md: '0' }}
                                    >
                                        ГРАММ
                                    </Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box
                        mt={{ base: '24px', xl: '40px' }}
                        w={{ base: '100%', md: '604px', xl: '578px', '2xl': '668px' }}
                        mx={{ md: 'auto' }}
                    >
                        <TableContainer minW={0} maxW='100%' overflowX='auto'>
                            <Table variant='striped' colorScheme='gray' layout='fixed'>
                                <Thead h='56px'>
                                    <Tr>
                                        <Th
                                            fontFamily='Inter'
                                            fontWeight={700}
                                            color='#2DB100'
                                            fontSize={{ base: '12px' }}
                                            lineHeight={{ base: '16px' }}
                                            textAlign='left'
                                            p={0}
                                            pl={{ base: '7px', md: '23px' }}
                                        >
                                            ИНГРЕДИЕНТЫ
                                        </Th>
                                        <Th
                                            fontFamily='Inter'
                                            fontWeight={700}
                                            color='#2DB100'
                                            fontSize={{ base: '12px' }}
                                            lineHeight={{ base: '16px' }}
                                            textAlign='left'
                                            p={0}
                                        >
                                            <HStack
                                                justifyContent='flex-end'
                                                spacing={{ base: '8px', md: '13px' }}
                                            >
                                                <Text pr={{ base: '2px' }}>ПОРЦИЙ</Text>
                                                <NumberInput
                                                    value={inputValue}
                                                    onChange={handleChange}
                                                    w={{ base: '73px', md: '90px' }}
                                                    step={1}
                                                    defaultValue={1}
                                                    min={1}
                                                    max={100}
                                                >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                            </HStack>
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody p={0} minW={0}>
                                    {recipe.ingredients.map((ingridient) => (
                                        <Tr
                                            h={{ base: '40px', xl: '52px' }}
                                            w='100%'
                                            p={0}
                                            minW={0}
                                        >
                                            <Td
                                                w='50%'
                                                p={0}
                                                textAlign='left'
                                                pl={{ base: '8px', md: '24px' }}
                                                fontFamily='Inter'
                                                fontWeight={500}
                                                fontSize='14px'
                                                lineHeight='20px'
                                            >
                                                {ingridient.title}
                                            </Td>
                                            <Td
                                                w='50%'
                                                p={0}
                                                textAlign='right'
                                                minW={0}
                                                maxW='50%'
                                                fontFamily='Inter'
                                                fontWeight={500}
                                                fontSize='14px'
                                                lineHeight='20px'
                                            >
                                                <HStack
                                                    justifyContent='flex-end'
                                                    spacing='2px'
                                                    pr={{ base: '13px', md: '25px' }}
                                                >
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={500}
                                                        fontSize='14px'
                                                        lineHeight='20px'
                                                    >
                                                        {Number(ingridient.count) * inputValue}
                                                    </Text>
                                                    <Text
                                                        fontFamily='Inter'
                                                        fontWeight={500}
                                                        fontSize='14px'
                                                        lineHeight='20px'
                                                    >
                                                        {ingridient.measureUnit}
                                                    </Text>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <VStack
                        alignItems='flex-start'
                        mt={{ base: '23.5px', xl: '39px' }}
                        w={{ base: '100%', md: '604px', xl: '578px', '2xl': '668px' }}
                        mx={{ md: 'auto' }}
                    >
                        <Heading
                            fontFamily='Inter'
                            fontWeight={500}
                            fontSize={{ base: '24px', xl: '48px' }}
                            lineHeight={{ base: '32px', xl: '48px' }}
                            letterSpacing={{ base: '0.5px', xl: '1.6px' }}
                        >
                            Шаги приготовления
                        </Heading>
                        {recipe.steps.map((step) => (
                            <HStack
                                mt={{ base: '12px' }}
                                w={{ base: '100%' }}
                                h={step.image !== '' ? { base: '128px' } : { base: '88px' }}
                                border='1px solid #00000014'
                                borderRadius='8px'
                                overflow='hidden'
                            >
                                {step.image !== '' && (
                                    <Box minW='48.2%'>
                                        <Image
                                            src={step.image}
                                            borderLeftRadius='8px'
                                            w='100%'
                                            h='128px'
                                        ></Image>
                                    </Box>
                                )}
                                <VStack alignItems='flex-start' overflow='hidden'>
                                    <Text
                                        textAlign='left'
                                        fontFamily='Inter'
                                        fontSize='14px'
                                        lineHeight='20px'
                                        fontWeight={400}
                                        w='100%'
                                        h='24px'
                                    >
                                        Шаг {step.stepNumber}
                                    </Text>
                                    <Text
                                        w='100%'
                                        h={step.image !== '' ? '80px' : '40px'}
                                        textAlign='left'
                                        fontFamily='Inter'
                                        fontSize='14px'
                                        lineHeight='20px'
                                        fontWeight={400}
                                    >
                                        {step.description}
                                    </Text>
                                </VStack>
                            </HStack>
                        ))}
                    </VStack>
                </Box>
            )}
        </>
    );
}
