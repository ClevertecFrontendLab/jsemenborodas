import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';

import { Filter, Search } from '~/icons/SearchInputIcon';

export function SearchForm() {
    return (
        <>
            <VStack mt={{ base: '22.1px', xl: '35.5px' }}>
                <Box mb='7px' ml={{ xl: '5px' }}>
                    <Heading
                        as='h3'
                        fontSize={{ base: '1.5rem', xl: '48px' }}
                        fontFamily='Inter'
                        lineHeight={{ base: '32px', xl: '48px' }}
                        textAlign='center'
                        fontWeight={700}
                        letterSpacing={{ base: '0.3px', xl: '1px' }}
                    >
                        Приятного аппетита!
                    </Heading>
                </Box>
                <Box w='100%' textAlign='center' pl={{ xl: '0.5rem' }} mt={{ xl: '1.1rem' }}>
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
                                />
                                <InputRightElement
                                    w={{ base: '32px', xl: '48px' }}
                                    h={{ base: '32px', xl: '48px' }}
                                >
                                    <Icon as={Search} w={{ xl: '48px' }} h={{ xl: '48px' }}></Icon>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </>
    );
}
