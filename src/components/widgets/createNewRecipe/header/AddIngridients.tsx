import {
    Box,
    Hide,
    HStack,
    Icon,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetMeasureUnitsQuery } from '~/query/services/measureUnits';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    selectorIsSaveDraftStarted,
    selectorIsValidateStarted,
    setIngridients,
    setStep3,
} from '~/store/reducers/createRecipe';

import { BlackPlus, DeleteButton, Plus } from '../assets/Icons';

type Ingredient = {
    title: string;
    count: number;
    measureUnit: string;
};

export function AddIngridients() {
    const dispatch = useAppDispatch();
    const isValidateStarted = useAppSelector(selectorIsValidateStarted);
    const [isNameOfIngridienstValid, setIsNameOfIngridienstValid] = useState<boolean[]>([true]);
    const [isMeasureUnitesValid, setIsMeasureUnitsValid] = useState<boolean[]>([true]);
    const isSaveDraftStarted = useAppSelector(selectorIsSaveDraftStarted);
    const [ingredients, setIngredientsLocal] = useState<Ingredient[]>([
        { title: '', count: 100, measureUnit: '' },
    ]);
    const [isMeasureMenuOpen, setIsMeasureMenuOpen] = useState<boolean[]>(
        Array(ingredients.length).fill(false),
    );
    const [isCountValid, setIsCountValid] = useState<boolean[]>([true]);
    const addIngridients = () => {
        setIngredientsLocal((prev) => [...prev, { title: '', count: 100, measureUnit: '' }]);
        setIsMeasureMenuOpen((prev) => [...prev, false]);
        setIsNameOfIngridienstValid((prev) => [...prev, true]);
        setIsCountValid((prev) => [...prev, true]);
    };

    const deleteIngridient = (index: number) => {
        setIngredientsLocal((prevIngredients) => prevIngredients.filter((_, i) => i !== index));
        setIsMeasureMenuOpen((prev) => prev.filter((_, i) => i !== index));
        setIsNameOfIngridienstValid((prev) => prev.filter((_, i) => i !== index));
        setIsCountValid((prev) => prev.filter((_, i) => i !== index));
    };

    const handleIngredientChange = (index: number, field: string, value: string) => {
        setIngredientsLocal((prevIngredients) =>
            prevIngredients.map((ingredient, i) =>
                i === index
                    ? {
                          ...ingredient,
                          [field]: field === 'count' ? Number(value) : value,
                      }
                    : ingredient,
            ),
        );
    };

    const toggleMenu = (index: number, value: boolean) => {
        setIsMeasureMenuOpen((prev) => prev.map((state, i) => (i === index ? value : state)));
    };

    const { data: measureUnits } = useGetMeasureUnitsQuery();
    useEffect(() => {
        if (isValidateStarted) {
            setIsNameOfIngridienstValid(
                ingredients.map((i) => i.title.length <= 50 && i.title.length !== 0),
            );
            setIsCountValid(
                ingredients.map((i) => Number.isInteger(Number(i.count)) && Number(i.count) > 0),
            );

            setIsMeasureUnitsValid(ingredients.map((i) => i.measureUnit.length > 0));
        }
    }, [isValidateStarted, ingredients]);

    if (
        ingredients.every((i) => i.title.length && Number.isInteger(Number(i.count))) &&
        isNameOfIngridienstValid.every((i) => i === true) &&
        isCountValid.every((i) => Number.isInteger(Number(i))) &&
        isMeasureUnitesValid.every((i) => i === true)
    ) {
        dispatch(setStep3(true));
        dispatch(setIngridients(ingredients));
    } else {
        dispatch(setStep3(false));
    }
    if (isSaveDraftStarted) {
        dispatch(setIngridients(ingredients));
    }
    return (
        <>
            <HStack
                w={{ base: '100%', md: '83%', xl: '74.7%', '2xl': '58%' }}
                mt={{ base: 8, xl: 10, '2xl': '44px' }}
                mx='auto'
            >
                <Text
                    fontFamily='Inter'
                    fontWeight={600}
                    fontSize={{ base: 14, xl: 16 }}
                    lineHeight={5}
                    textAlign='left'
                >
                    Добавьте ингредиенты рецепта, нажав на
                </Text>
                <Icon as={Plus}></Icon>
            </HStack>

            <Show above='md'>
                <HStack
                    mt={{ base: 3, xl: 4, '2xl': 3 }}
                    mx={{ md: 'auto' }}
                    w={{ xl: 900, '2xl': 983 }}
                >
                    <Text
                        w='295px'
                        h='24px'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize='12px'
                        lineHeight={4}
                        color='rgba(45, 177, 0, 1)'
                        textAlign='left'
                        pl='42px'
                        letterSpacing='0.5px'
                    >
                        Ингредиент
                    </Text>
                    <Text
                        w='125px'
                        h='24px'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize='12px'
                        lineHeight={4}
                        color='rgba(45, 177, 0, 1)'
                        textAlign='left'
                        pl={8}
                        letterSpacing='0.5px'
                    >
                        Количество
                    </Text>
                    <Text
                        w='203px'
                        h='24px'
                        fontFamily='Inter'
                        fontWeight={700}
                        fontSize='12px'
                        lineHeight={4}
                        color='rgba(45, 177, 0, 1)'
                        textAlign='left'
                        pl={5}
                        letterSpacing='0.5px'
                    >
                        Единица измерения
                    </Text>
                </HStack>
            </Show>
            {ingredients.map((ingredient, index) => (
                <Box w='fit-content' mx='auto'>
                    <Hide above='md'>
                        <InputGroup>
                            <Input
                                w={{ base: '328px', md: '83%' }}
                                textAlign='left'
                                mt={1}
                                h={10}
                                placeholder='Ингредиент'
                                sx={{
                                    '::placeholder': {
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: 'rgba(0, 0, 0, 0.64)',
                                        pt: 2,
                                    },
                                }}
                            ></Input>
                        </InputGroup>
                    </Hide>
                    <HStack
                        spacing={{ base: 3, '2xl': 4 }}
                        mx={{ md: 'auto' }}
                        w={{ xl: 866, '2xl': 950 }}
                    >
                        <Show above='md'>
                            <InputGroup w={{ md: '241px', xl: '295px' }}>
                                <Input
                                    mt={1}
                                    border={
                                        isNameOfIngridienstValid[index]
                                            ? '1px solid rgba(0, 0, 0, 0.08)'
                                            : '1px solid red'
                                    }
                                    w='100%'
                                    h={10}
                                    pl={4}
                                    letterSpacing='0.5px'
                                    value={ingredient.title}
                                    onChange={(e) =>
                                        handleIngredientChange(index, 'title', e.target.value)
                                    }
                                    placeholder='Ингредиент'
                                    sx={{
                                        '::placeholder': {
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: 'rgba(0, 0, 0, 0.64)',
                                            pt: 2,
                                        },
                                    }}
                                ></Input>
                            </InputGroup>
                        </Show>
                        <InputGroup w={{ base: '80px' }}>
                            <Input
                                mt={1}
                                h={10}
                                value={ingredient.count}
                                w='100%'
                                placeholder='100'
                                border={
                                    isCountValid[index]
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid red'
                                }
                                onChange={(e) =>
                                    handleIngredientChange(index, 'count', e.target.value)
                                }
                                sx={{
                                    '::placeholder': {
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: 'rgba(0, 0, 0, 0.64)',
                                        pt: 2,
                                    },
                                }}
                            ></Input>
                        </InputGroup>
                        <Menu
                            onOpen={() => toggleMenu(index, true)}
                            onClose={() => toggleMenu(index, false)}
                        >
                            <MenuButton
                                minW={{ base: '196px', md: '215px' }}
                                h={10}
                                border={
                                    isMeasureUnitesValid[index]
                                        ? '1px solid rgba(0, 0, 0, 0.08)'
                                        : '1px solid red'
                                }
                                borderRadius='6px'
                            >
                                <HStack position='relative'>
                                    <Text
                                        fontFamily='Inter'
                                        fontWeight={400}
                                        fontSize={16}
                                        lineHeight='24px'
                                        color='rgba(0, 0, 0, 0.64)'
                                        textAlign='left'
                                        whiteSpace='nowrap'
                                        textOverflow='ellipsis'
                                        overflow='hidden'
                                        pl={4}
                                    >
                                        {ingredient.measureUnit || 'Единица измерения'}
                                    </Text>
                                    <Image
                                        src='/src/components/shared/images/icons/arrowDown.png'
                                        position='absolute'
                                        right={3}
                                        display={isMeasureMenuOpen[index] ? 'none' : ''}
                                    />
                                    <Image
                                        src='/src/components/shared/images/icons/arrowUp.png'
                                        position='absolute'
                                        right={3}
                                        display={isMeasureMenuOpen[index] ? '' : 'none'}
                                    />
                                </HStack>
                            </MenuButton>
                            <MenuList>
                                {measureUnits?.map((mu) => (
                                    <MenuItem
                                        onClick={() =>
                                            handleIngredientChange(index, 'measureUnit', mu.name)
                                        }
                                    >
                                        {mu.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        {index !== ingredients.length - 1 && (
                            <Icon
                                ml={2}
                                as={DeleteButton}
                                w='14px'
                                h='14px'
                                onClick={() => deleteIngridient(index)}
                            ></Icon>
                        )}
                        {index === ingredients.length - 1 && (
                            <Icon as={BlackPlus} w={8} h={8} onClick={addIngridients}></Icon>
                        )}
                    </HStack>
                </Box>
            ))}
        </>
    );
}
