import {
    Flex,
    FlexProps,
    HStack,
    Input,
    InputGroup,
    Menu,
    MenuButton,
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
export function Header() {
    const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
    const [peopleCounter, setPeopleCounter] = useState(1);
    const [timeCounter, setTimeCounter] = useState(1);
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
                        onOpen={() => setIsTagMenuOpen(true)}
                        onClose={() => setIsTagMenuOpen(false)}
                    >
                        <MenuButton
                            minW={{ base: '196px', md: '232px', xl: '350px' }}
                            h={10}
                            border='1px solid rgba(0, 0, 0, 0.08)'
                        >
                            <HStack spacing={{ md: 3 }} justifyContent={{ xl: 'space-between' }}>
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
                                    pl={{ base: 4, xl: 6 }}
                                >
                                    Выберите из списка...
                                </Text>
                                <Image
                                    src='/src/components/shared/images/icons/arrowDown.png'
                                    pr={{ base: 3, xl: 1 }}
                                    display={isTagMenuOpen ? 'none' : ''}
                                />
                                <Image
                                    src='/src/components/shared/images/icons/arrowUp.png'
                                    pr={{ base: 3, xl: 1 }}
                                    display={isTagMenuOpen ? '' : 'none'}
                                />
                            </HStack>
                        </MenuButton>
                        <MenuList></MenuList>
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
