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
import { useState } from 'react';

import { useGetMeasureUnitsQuery } from '~/query/services/measureUnits';

import { BlackPlus, DeleteButton, Plus } from '../assets/Icons';

type Ingredient = {
    ingredient: string;
    count: string;
    measure: string;
};

export function AddIngridients() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { ingredient: '', count: '', measure: '' },
    ]);
    const [isMeasureMenuOpen, setIsMeasureMenuOpen] = useState<boolean[]>(
        Array(ingredients.length).fill(false),
    );
    const addIngridients = () => {
        setIngredients((prev) => [...prev, { ingredient: '', count: '', measure: '' }]);
        setIsMeasureMenuOpen((prev) => [...prev, false]);
    };

    const deleteIngridient = (index: number) => {
        setIngredients((prevIngredients) => prevIngredients.filter((_, i) => i !== index));
        setIsMeasureMenuOpen((prev) => prev.filter((_, i) => i !== index));
    };

    const handleIngredientChange = (index: number, field: string, value: string) => {
        setIngredients((prevIngredients) =>
            prevIngredients.map((ingredient, i) =>
                i === index ? { ...ingredient, [field]: value } : ingredient,
            ),
        );
    };

    const toggleMenu = (index: number, value: boolean) => {
        setIsMeasureMenuOpen((prev) => prev.map((state, i) => (i === index ? value : state)));
    };

    const { data: measureUnits } = useGetMeasureUnitsQuery();

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
                                    w='100%'
                                    h={10}
                                    pl={4}
                                    letterSpacing='0.5px'
                                    value={ingredient.ingredient}
                                    onChange={(e) =>
                                        handleIngredientChange(index, 'ingredient', e.target.value)
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
                                border='1px solid rgba(0, 0, 0, 0.08)'
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
                                        {ingredient.measure || 'Единица измерения'}
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
                                            handleIngredientChange(index, 'measure', mu.name)
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
