import { AbsoluteCenter, Box, Heading, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import * as BreakfastPng from './assets/Breakfast.png';
export function ErrorComponent() {
    const imageSizes = useBreakpointValue({
        base: '108px',
        xl: '206px',
    });
    const navigate = useNavigate();
    return (
        <>
            <AbsoluteCenter>
                <VStack spacing='32px' pl={{ xl: '72%' }}>
                    <Box
                        w={imageSizes}
                        minW={imageSizes}
                        maxW={imageSizes}
                        minH={imageSizes}
                        h={imageSizes}
                        maxH={imageSizes}
                    >
                        <Image
                            src={BreakfastPng.default}
                            w={imageSizes}
                            minW={imageSizes}
                            maxW={imageSizes}
                            minH={imageSizes}
                            h={imageSizes}
                            maxH={imageSizes}
                        ></Image>
                    </Box>
                    <VStack w={{ base: '220px', xl: '396px' }} textAlign='center' spacing='16px'>
                        <Heading
                            fontFamily='Inter'
                            fontSize='24px'
                            fontWeight='700'
                            lineHeight='32px'
                            letterSpacing={{ base: 0, xl: '0.5px' }}
                            as='h1'
                        >
                            Упс! Такой страницы нет
                        </Heading>
                        <Text
                            fontFamily='Inter'
                            fontSize='16px'
                            fontWeight='400'
                            lineHeight='24px'
                            letterSpacing={0}
                        >
                            Можете поискать другой рецепт{' '}
                            <Box
                                as='span'
                                textDecoration='underline'
                                onClick={() => navigate('/')}
                                _hover={{
                                    cursor: 'pointer',
                                }}
                                data-test-id='error-page-go-home'
                            >
                                здесь.
                            </Box>
                        </Text>
                    </VStack>
                </VStack>
            </AbsoluteCenter>
        </>
    );
}
