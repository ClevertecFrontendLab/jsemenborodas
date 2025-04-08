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

import { Filter, Search } from '~/icons/SearchInputIcon';

export function SearchForm() {
    return (
        <>
            <VStack mt={{ base: '0', xl: '32px' }}>
                <Box mb='7px'>
                    <Heading
                        as='h3'
                        fontSize={{ base: '1.5rem', xl: '48px' }}
                        fontFamily='Inter'
                        lineHeight={{ base: '32px', xl: '48px' }}
                        textAlign='center'
                        fontWeight={700}
                        letterSpacing={{ base: '0.3px', xl: '1px' }}
                        w='100%'
                        ml={{ xl: '10px', '2xl': '12px' }}
                    >
                        Приятного аппетита!
                    </Heading>
                </Box>
                <Box
                    w='100%'
                    textAlign='center'
                    pl={{ xl: '1.5rem' }}
                    mt={{ xl: '1.1rem' }}
                    minW='284px'
                >
                    <HStack spacing='0.75rem' textAlign='center' justifyContent='center'>
                        <Box>
                            <Button
                                size={{ base: 'sm', xl: 'sm' }}
                                h={{ xl: '48px' }}
                                w={{ base: '32px', xl: '48px' }}
                                borderRadius='6px'
                                border='1px solid rgba(0, 0, 0, 0.48)'
                                p={0}
                                bg='transparent'
                            >
                                <Icon
                                    as={Filter}
                                    w={{ base: '14px', xl: '24px' }}
                                    h={{ base: '14px', xl: '24px' }}
                                ></Icon>
                            </Button>
                        </Box>
                        <Box className='test' maxW={{ sm: '404px', xl: '458px' }} w='100%'>
                            <InputGroup
                                maxWidth={{ sm: '404px', xl: '458px' }}
                                h={{ base: '32px', xl: '48px' }}
                            >
                                <Input
                                    placeholder='Название или ингредиент...'
                                    size='sm'
                                    fontSize={{ base: '14px', xl: '18px' }}
                                    letterSpacing={{ xl: '0.15px' }}
                                    fontFamily='Inter'
                                    fontWeight='400'
                                    px={{ base: '11px', xl: '14px' }}
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    color='rgba(19, 75, 0, 1)'
                                    borderRadius='4px'
                                    _placeholder={{ color: 'rgba(19, 75, 0, 1)' }}
                                    lineHeight='100%'
                                    h={{ xl: '48px' }}
                                    w={{ xl: '458px' }}
                                />
                                <InputRightElement
                                    w={{ base: '32px', xl: '48px' }}
                                    h={{ base: '32px', xl: '48px' }}
                                >
                                    <Icon as={Search} w={{ xl: '40px' }} h={{ xl: '40px' }}></Icon>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </HStack>
                </Box>
                <Show above='xl'>
                    <Box w='518px' h='40px'>
                        <HStack>
                            <Box>
                                <HStack>
                                    <Text>Исключить мои аллергены</Text>
                                    <Switch color='red'></Switch>
                                </HStack>
                            </Box>
                            <Box w='234px' h='40px'>
                                <Select
                                    placeholder='Выберите из списка...'
                                    color='#000000A3'
                                    size='md'
                                    borderRadius='6px'
                                >
                                    <option value='option1'>Select 1</option>
                                    <option value='option2'>Select 2</option>
                                    <option value='option3'>Select 3</option>
                                </Select>
                            </Box>
                        </HStack>
                    </Box>
                </Show>
            </VStack>
        </>
    );
}
