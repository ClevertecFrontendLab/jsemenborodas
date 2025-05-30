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
import { useState } from 'react';

import { useGetCategoriesQuery } from '~/query/services/categories';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { addCategory, removeCategory, selectCategories } from '~/store/reducers/search';
export function Header() {
    const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
    const dispatch = useAppDispatch();
    const [peopleCounter, setPeopleCounter] = useState(1);
    const [timeCounter, setTimeCounter] = useState(1);
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
    const flexDirection = useBreakpointValue<FlexProps['direction']>({
        base: 'column',
    });
    const visibleItemsCount = useBreakpointValue({ base: 1, xl: 2 });
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
                            border='1px solid rgba(0, 0, 0, 0.08)'
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
                        w='100%'
                        h='48px'
                        border='1px solid rgba(215, 255, 148, 1)'
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
                    border='1px solid rgba(226, 232, 240, 1)'
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
                        max={100}
                    >
                        <NumberInputField />
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
                        max={100}
                    >
                        <NumberInputField />
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
