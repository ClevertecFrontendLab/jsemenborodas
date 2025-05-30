import {
    Hide,
    HStack,
    Icon,
    Input,
    InputGroup,
    Menu,
    MenuButton,
    MenuList,
    Show,
} from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { BlackPlus, Plus } from '../assets/Icons';

export function AddIngridients() {
    const [isMeasureMenuOpen, setIsMeasureMenuOpen] = useState(false);
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
            <Show above='md'>
                <HStack mt={{ base: 3, xl: 4, '2xl': 3 }} mx='auto' w={{ xl: 900, '2xl': 983 }}>
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
            <HStack spacing={{ base: 3, '2xl': 4 }} mx={{ md: 'auto' }} w={{ xl: 866, '2xl': 950 }}>
                {' '}
                <Show above='md'>
                    <InputGroup w={{ md: '241px', xl: '295px' }}>
                        <Input
                            mt={1}
                            w='100%'
                            h={10}
                            pl={4}
                            letterSpacing='0.5px'
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
                        w='100%'
                        placeholder='100'
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
                    onOpen={() => setIsMeasureMenuOpen(true)}
                    onClose={() => setIsMeasureMenuOpen(false)}
                >
                    <MenuButton
                        minW={{ base: '196px', md: '215px' }}
                        h={10}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='6px'
                    >
                        <HStack>
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
                                Единица измерения
                            </Text>
                            <Image
                                src='/src/components/shared/images/icons/arrowDown.png'
                                pr={3}
                                display={isMeasureMenuOpen ? 'none' : ''}
                            />
                            <Image
                                src='/src/components/shared/images/icons/arrowUp.png'
                                pr={3}
                                display={isMeasureMenuOpen ? '' : 'none'}
                            />
                        </HStack>
                    </MenuButton>
                    <MenuList></MenuList>
                </Menu>
                <Icon as={BlackPlus} w={8} h={8}></Icon>
            </HStack>
        </>
    );
}
