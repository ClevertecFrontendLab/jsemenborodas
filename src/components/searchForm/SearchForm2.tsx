import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Show,
    Switch,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import { Filter, Search } from '~/icons/SearchInputIcon';
export function SearchForm2() {
    const location = useLocation();
    const Name: Record<string, string> = {
        '/': 'Приятного аппетита!',
        Juciest: 'Самое сочное',
        VeganKitchen: 'Веганская кухня',
    };

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const title = Name[firstSegment] || 'Приятного аппетита!';
    return (
        <>
            <Box
                mt={{ base: '17px', xl: '32px', '2xl': '32px' }}
                ml={{ xl: '5px' }}
                w={{
                    base: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                    md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                    xl: '100%',
                }}
                mx={{ base: 'auto' }}
                mr={{ base: '32px', xl: '0' }}
            >
                <VStack>
                    <Box mb={{ xl: '16px' }}>
                        <Heading
                            fontWeight='700'
                            fontFamily='Inter'
                            fontSize={{ base: '24px', xl: '48px' }}
                            lineHeight={{ base: '32px', xl: '48px' }}
                            letterSpacing={{ base: '0.3px', xl: '1px' }}
                        >
                            {title}
                        </Heading>
                    </Box>
                    {title === 'Веганская кухня' && (
                        <Box>
                            <Text
                                fontFamily='Inter'
                                color='#0000007A'
                                fontWeight={500}
                                fontSize={{ base: '14px', xl: '16px' }}
                                w={{ base: '328px', md: '727px', xl: '696px' }}
                                textAlign='center'
                                mt={{ base: '4px', md: '6px', xl: '-12px' }}
                                letterSpacing={{ xl: '0.1px' }}
                                mb={{ xl: '16px' }}
                            >
                                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                                попробовать вегетарианскую диету и готовить вкусные вегетарианские
                                блюда.
                            </Text>
                        </Box>
                    )}

                    <Box
                        mt={{ base: '7px' }}
                        w={{
                            base: 'calc(328px + (448 - 328) * ((100vw - 360px) / (480 - 360)))',
                            sm: 'calc(328px + (727 - 328) * ((100vw - 360px) / (768 - 360)))',
                            md: 'calc(727px + (880 - 727) * ((100vw - 768px) / (1440 - 768)))',
                            xl: '518px',
                        }}
                    >
                        <HStack spacing='12px' justifyContent='center'>
                            <Button
                                bg='transparent'
                                border='1px solid #0000007A'
                                borderRadius='6px'
                                size={{ base: 'sm' }}
                                h={{ base: '32px', xl: '48px' }}
                                w={{ base: '32px', xl: '48px' }}
                            >
                                <Icon
                                    as={Filter}
                                    w={{ base: '14px', xl: '24px' }}
                                    h={{ base: '14px', xl: '24px' }}
                                ></Icon>
                            </Button>
                            <InputGroup
                                w={{
                                    base: 'calc(284px + (404 - 284) * ((100vw - 360px) / (480 - 360)))',
                                    sm: '404px',
                                    xl: '458px',
                                }}
                                h={{ base: '32px', xl: '48px' }}
                            >
                                <Input
                                    borderColor='#0000007A'
                                    placeholder='Название или ингредиент...'
                                    h={{ base: '32px', xl: '48px' }}
                                    _placeholder={{ color: 'rgba(19, 75, 0, 1)' }}
                                    fontSize={{ base: '14px', xl: '18px' }}
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    letterSpacing={{ xl: '0.15px' }}
                                    pl={{ base: '12px', xl: '16px' }}
                                ></Input>
                                <InputRightElement
                                    w={{ base: '32px', xl: '48px' }}
                                    h={{ base: '32px', xl: '48px' }}
                                >
                                    <Icon
                                        as={Search}
                                        w={{ base: '32px', xl: '40px' }}
                                        h={{ base: '32px', xl: '40px' }}
                                    ></Icon>
                                </InputRightElement>
                            </InputGroup>
                        </HStack>
                    </Box>
                    <Show above='xl'>
                        <Box mt={{ xl: '8px' }} ml={{ xl: '8px' }}>
                            <HStack>
                                <Box w='268px' h='36px'>
                                    <HStack spacing='14px'>
                                        <Text
                                            fontSize='16px'
                                            fontFamily='Inter'
                                            lineHeight='24px'
                                            fontWeight='500'
                                            pt={{ xl: '6px' }}
                                        >
                                            Исключить мои аллергены
                                        </Text>
                                        <Switch pt={{ xl: '6px' }}></Switch>
                                    </HStack>
                                </Box>
                                <Box>
                                    <Select
                                        placeholder='Выберите из списка...'
                                        color='#000000A3'
                                        w='234px'
                                        h='40px'
                                        borderRadius='6px'
                                        border='1px solid #00000014'
                                        fontFamily='Inter'
                                        fontSize='16px'
                                        lineHeight='24px'
                                    ></Select>
                                </Box>
                            </HStack>
                        </Box>
                    </Show>
                </VStack>
            </Box>
        </>
    );
}
