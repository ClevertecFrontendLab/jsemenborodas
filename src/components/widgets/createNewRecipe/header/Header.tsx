import {
    Box,
    Checkbox,
    Flex,
    FlexProps,
    HStack,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Textarea,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
    selectorIsSaveDraftStarted,
    selectorIsValidateStarted,
    setCategoriesIds,
    setDescriptionn,
    setPortions,
    setStep2,
    setTime,
    setTitle,
} from '~/store/reducers/createRecipe';
import { addCategory, removeCategory, selectCategories } from '~/store/reducers/search';
export function Header() {
    const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
    const isSaveDraftStarted = useAppSelector(selectorIsSaveDraftStarted);
    const [isCategoryValid, setIsCategoryValid] = useState(true);
    const [isDescriptionValid, setIsDecriptionValid] = useState(true);
    const [description, setDescription] = useState('');
    const [nameOfRecipe, setNameOfRecipe] = useState('');
    const [isNameOfRecipeValid, setIsNameOfRecipeValid] = useState(true);
    const dispatch = useAppDispatch();
    const isValidateStarted = useAppSelector(selectorIsValidateStarted);
    const [peopleCounter, setPeopleCounter] = useState(1);
    const [isPeopleCounterValid, setIsPeopleCounterValid] = useState(true);
    const [timeCounter, setTimeCounter] = useState(1);
    const [isTimeCounterValid, setIsTimeCounterValid] = useState(true);
    const { data: categoriesResponse } = useGetCategoriesQuery({});
    const handleCategories = (category: string) => {
        if (categories?.includes(category)) {
            dispatch(removeCategory(category));
            return;
        }
        dispatch(addCategory(category));
    };

    const categories = useAppSelector(selectCategories);
    const catData = categoriesResponse?.length ? categoriesResponse : [];
    const handlePeopleChange = (valueString: string) => {
        const valueNumber = parseInt(valueString, 10);
        setPeopleCounter(valueNumber);
    };
    const handleTimeChange = (valueString: string) => {
        const valueNumber = parseInt(valueString, 10);
        setTimeCounter(valueNumber);
    };
    const changeNameOfRecipe = (value: string) => {
        setNameOfRecipe(value);
    };
    const changeDescription = (value: string) => {
        setDescription(value);
    };
    const [subStep1, setSubStep1] = useState(false);
    const [subStep2, setSubStep2] = useState(false);
    const [subStep3, setSubStep3] = useState(false);
    const [subStep4, setSubStep4] = useState(false);
    const [subStep5, setSubStep5] = useState(false);
    const flexDirection = useBreakpointValue<FlexProps['direction']>({
        base: 'column',
    });
    const visibleItemsCount = useBreakpointValue({ base: 1, xl: 2 });
    useEffect(() => {
        if (isValidateStarted) {
            if (categories && categories?.length < 3) {
                setIsCategoryValid(false);
                return;
            }
            setIsCategoryValid(true);
        }
    }, [isValidateStarted, categories]);

    useEffect(() => {
        if (isValidateStarted) {
            if (nameOfRecipe?.length > 50 || nameOfRecipe?.length === 0) {
                setIsNameOfRecipeValid(false);
                return;
            }
            setIsNameOfRecipeValid(true);
        }
    }, [isValidateStarted, nameOfRecipe]);
    useEffect(() => {
        if (isValidateStarted) {
            if (description?.length > 500 || description?.length === 0) {
                setIsDecriptionValid(false);
                return;
            }
            setIsDecriptionValid(true);
        }
    }, [isValidateStarted, description]);
    useEffect(() => {
        console.log(Number.isInteger(peopleCounter));
        if (isValidateStarted) {
            if (Number.isInteger(peopleCounter) && peopleCounter <= 10000) {
                setIsPeopleCounterValid(true);
                return;
            }
            setIsPeopleCounterValid(false);
        }
    }, [isValidateStarted, peopleCounter]);

    useEffect(() => {
        if (isValidateStarted) {
            if (Number.isInteger(timeCounter) && timeCounter <= 10000) {
                setIsTimeCounterValid(true);
                return;
            }
            setIsTimeCounterValid(false);
        }
    }, [isValidateStarted, timeCounter]);

    useEffect(() => {
        if (categories && categories.length && isCategoryValid) {
            setSubStep1(true);
            return;
        }
        setSubStep1(false);
    }, [categories, isCategoryValid]);

    useEffect(() => {
        if (nameOfRecipe && nameOfRecipe.length && isNameOfRecipeValid) {
            setSubStep2(true);
            return;
        }
        setSubStep2(false);
    }, [nameOfRecipe, isNameOfRecipeValid]);
    useEffect(() => {
        if (description && description.length && isDescriptionValid) {
            setSubStep3(true);
            return;
        }
        setSubStep3(false);
    }, [description, isDescriptionValid]);
    useEffect(() => {
        if (peopleCounter && isPeopleCounterValid) {
            setSubStep4(true);
            return;
        }
        setSubStep4(false);
    }, [peopleCounter, isPeopleCounterValid]);
    useEffect(() => {
        if (timeCounter && isTimeCounterValid) {
            setSubStep5(true);
            return;
        }
        setSubStep5(false);
    }, [timeCounter, isTimeCounterValid]);

    if (subStep1 && subStep2 && subStep3 && subStep4 && subStep5) {
        dispatch(setTitle(nameOfRecipe));
        dispatch(
            setCategoriesIds(
                catData
                    .filter((c) => c.subCategories !== undefined && categories?.includes(c.title))
                    .map((c) => c.subCategories[0]._id),
            ),
        );
        dispatch(setDescriptionn(description));
        dispatch(setPortions(peopleCounter));
        dispatch(setTime(timeCounter));
        dispatch(setStep2(true));
    } else {
        dispatch(setStep2(false));
    }

    if (isSaveDraftStarted) {
        dispatch(setTitle(nameOfRecipe));
        dispatch(
            setCategoriesIds(
                catData
                    .filter((c) => c.subCategories !== undefined && categories?.includes(c.title))
                    .map((c) => c.subCategories[0]._id),
            ),
        );
        dispatch(setDescriptionn(description));
        dispatch(setPortions(peopleCounter));
        dispatch(setTime(timeCounter));
    }
    return (
        <>
            <Flex
                direction={flexDirection}
                gap={0}
                ml={{ md: 4 }}
                w={{ base: '328px', md: '480px', xl: '575px', '2xl': 668 }}
                pl={{ xl: 2 }}
            >
                <HStack mt={{ base: 4, md: 0 }} gap={4} minW={{ md: '480px', xl: '575px' }}>
                    <Text
                        minW={{ md: '232px', xl: '201px', '2xl': '294px' }}
                        maxW={{ xl: '201px', '2xl': '294px' }}
                        textAlign='left'
                        fontFamily='Inter'
                        fontWeight={600}
                        fontSize={{ base: 14, xl: 16 }}
                        lineHeight={{ base: 5, xl: 6 }}
                    >
                        Выберите не менее 3-х тегов
                    </Text>
                    <Menu
                        closeOnSelect={false}
                        onOpen={() => setIsTagMenuOpen(true)}
                        onClose={() => setIsTagMenuOpen(false)}
                    >
                        <MenuButton
                            minW={{ base: '196px', md: '232px', xl: '350px' }}
                            h={10}
                            border={
                                isCategoryValid ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid red'
                            }
                        >
                            <HStack
                                spacing={{ md: 2 }}
                                overflow='hidden'
                                pl={2}
                                position='relative'
                            >
                                {categories && categories.length ? (
                                    categories.slice(0, visibleItemsCount).map((cat) => (
                                        <Box
                                            border='1px solid #B1FF2E'
                                            borderRadius='6px'
                                            h='24px'
                                            px={2}
                                            py='2px'
                                            whiteSpace='nowrap'
                                        >
                                            <Text
                                                lineHeight='16px'
                                                fontSize='12px'
                                                fontWeight={500}
                                                fontFamily='Inter'
                                                color='#2DB100'
                                            >
                                                {cat}
                                            </Text>
                                        </Box>
                                    ))
                                ) : (
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
                                        pr={{ base: 42 }}
                                        pl={
                                            categories?.length
                                                ? { base: 4, xl: 6 }
                                                : { base: 2, xl: 6 }
                                        }
                                    >
                                        Выберите из списка...
                                    </Text>
                                )}
                                {categories &&
                                    visibleItemsCount &&
                                    categories?.length > visibleItemsCount && (
                                        <Box
                                            lineHeight='16px'
                                            fontSize='12px'
                                            fontWeight={500}
                                            fontFamily='Inter'
                                            color='#2DB100'
                                            border='1px solid #B1FF2E'
                                            borderRadius='6px'
                                            h='24px'
                                            px={2}
                                            py='2px'
                                            whiteSpace='nowrap'
                                        >
                                            <Text
                                                lineHeight='16px'
                                                fontSize='12px'
                                                fontWeight={500}
                                                fontFamily='Inter'
                                                color='#2DB100'
                                            >
                                                +{categories.length - visibleItemsCount}
                                            </Text>
                                        </Box>
                                    )}
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    position='absolute'
                                    right={{ base: 3, xl: 1 }}
                                    display={isTagMenuOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    position='absolute'
                                    right={{ base: 3, xl: 1 }}
                                    display={isTagMenuOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList>
                            {catData &&
                                catData
                                    ?.filter((cat) => cat.subCategories !== undefined)
                                    .map((item, index) => (
                                        <MenuItem
                                            bg={index % 2 === 0 ? '#0000000F' : '#FFFFFF'}
                                            key={`filter-${item._id}`}
                                        >
                                            <Checkbox
                                                isChecked={categories?.includes(item.title)}
                                                onChange={() => {
                                                    handleCategories(item.title);
                                                }}
                                            >
                                                <Text
                                                    data-test-id={
                                                        item.category === 'vegan'
                                                            ? 'checkbox-веганская кухня'
                                                            : ''
                                                    }
                                                >
                                                    {item.title}
                                                </Text>
                                            </Checkbox>
                                        </MenuItem>
                                    ))}
                        </MenuList>
                    </Menu>
                </HStack>
                <InputGroup>
                    <Input
                        placeholder='Название рецепта'
                        value={nameOfRecipe}
                        onChange={(e) => {
                            changeNameOfRecipe(e.target.value);
                        }}
                        w='100%'
                        h='48px'
                        border={
                            isNameOfRecipeValid
                                ? '1px solid rgba(215, 255, 148, 1)'
                                : '1px solid red'
                        }
                        borderRadius='1px'
                        mt={{ base: 4, xl: 8 }}
                        sx={{
                            '::placeholder': {
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '150%',
                                color: 'rgba(0, 0, 0, 0.64)',
                            },
                        }}
                    ></Input>
                </InputGroup>
                <Textarea
                    placeholder='Краткое описание рецепта'
                    value={description}
                    onChange={(e) => changeDescription(e.target.value)}
                    mt={{ base: 4, xl: 6 }}
                    p={0}
                    px={2.5}
                    sx={{
                        '::placeholder': {
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: 'rgba(0, 0, 0, 0.64)',
                            pt: 2,
                        },
                    }}
                    size='sm'
                    border={
                        isDescriptionValid ? '1px solid rgba(226, 232, 240, 1)' : '1px solid red'
                    }
                    borderRadius='6px'
                ></Textarea>
                <HStack mt={{ base: 4, xl: 6 }} spacing={{ base: 3, md: 4, xl: 6 }}>
                    <Text
                        fontFamily='Inter'
                        fontWeight={600}
                        fontSize={{ base: 14, xl: 16 }}
                        lineHeight={5}
                        textAlign='left'
                    >
                        На сколько человек ваш рецепт?
                    </Text>
                    <NumberInput
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight={6}
                        value={peopleCounter}
                        onChange={handlePeopleChange}
                        minW={{ base: '90px', md: '90px' }}
                        maxW={{ base: '90px', md: '90px' }}
                        step={1}
                        min={1}
                        max={100001}
                    >
                        <NumberInputField
                            border={
                                isPeopleCounterValid
                                    ? '1px solid rgba(226, 232, 240, 1)'
                                    : '1px solid red'
                            }
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
                <HStack mt={{ base: 4, xl: 6 }} spacing={{ base: 3, md: 4, xl: 6 }}>
                    <Text
                        fontFamily='Inter'
                        fontWeight={600}
                        fontSize={{ base: 14, xl: 16 }}
                        lineHeight={5}
                        textAlign='left'
                    >
                        Сколько времени готовить в минутах?
                    </Text>
                    <NumberInput
                        fontFamily='Inter'
                        fontWeight={400}
                        fontSize='16px'
                        lineHeight={6}
                        value={timeCounter}
                        textAlign='left'
                        onChange={handleTimeChange}
                        minW={{ base: '90px', md: '90px' }}
                        maxW={{ base: '90px', md: '90px' }}
                        step={1}
                        min={1}
                        max={100001}
                    >
                        <NumberInputField
                            border={
                                isTimeCounterValid
                                    ? '1px solid rgba(226, 232, 240, 1)'
                                    : '1px solid red'
                            }
                        />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
            </Flex>
        </>
    );
}
