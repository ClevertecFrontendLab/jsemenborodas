import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Icon,
    Image,
    Text,
    Textarea,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';

import { BlackPlus, DefaultImage } from '../assets/Icons';
export function Steps() {
    const [recipeImage, _setRecipeImage] = useState('');
    const [step, setStep] = useState([1]);

    const addStep = () => {
        setStep((prev) => [...prev, prev.length + 1]);
    };
    const recipeImageWidth = useBreakpointValue({
        base: '328px',
        md: '346px',
    });
    const recipeImageHeight = useBreakpointValue({
        base: '160px',
    });
    return (
        <>
            <Text
                fontFamily='Inter'
                fontWeight={600}
                fontSize={{ base: 14, xl: 16 }}
                lineHeight={5}
                textAlign='left'
                w={{ base: '100%', md: 604, xl: 866, '2xl': 950 }}
                mt={{ base: 6, xl: 8 }}
                mx={{ md: 'auto' }}
            >
                Добавьте шаги приготовления{' '}
            </Text>
            <Box mx={{ md: 'auto' }} w={{ xl: '866px', '2xl': 950 }}>
                {step.map((s, index) => (
                    <Card
                        key={`card-${index}`}
                        p={0}
                        mt={{ base: 1.5, xl: 3 }}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius={8}
                        boxShadow='none'
                        w={{ base: '328px', md: '604px', xl: '658px', '2xl': 668 }}
                        h={{ base: '352px', md: '160px' }}
                        display={{ md: 'flex' }}
                        flexDirection={{ md: 'row' }}
                    >
                        <CardHeader p={0} boxShadow='none'>
                            {recipeImage.length ? (
                                <Image
                                    minW={recipeImageWidth}
                                    maxW={recipeImageWidth}
                                    minH={recipeImageHeight}
                                    maxH={recipeImageHeight}
                                    src={recipeImage}
                                    alt='defaultImage'
                                ></Image>
                            ) : (
                                <Box
                                    minW={recipeImageWidth}
                                    maxW={recipeImageWidth}
                                    minH={recipeImageHeight}
                                    maxH={recipeImageHeight}
                                    bgColor='rgba(0, 0, 0, 0.08)'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Icon as={DefaultImage} w={8} h={8}></Icon>
                                </Box>
                            )}
                        </CardHeader>
                        <CardBody boxShadow='none'>
                            <Box
                                w='fit-content'
                                borderRadius='4px'
                                bgColor='rgba(0, 0, 0, 0.06)'
                                py='2px'
                                px={2}
                            >
                                <Text
                                    fontFamily='Inter'
                                    fontWeight={600}
                                    fontSize={12}
                                    lineHeight={4}
                                >
                                    Шаг {s}
                                </Text>
                            </Box>
                            <Textarea
                                placeholder='Шаг'
                                mt={4}
                                p={0}
                                px={2}
                                sx={{
                                    '::placeholder': {
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        color: 'rgba(0, 0, 0, 0.36)',
                                        pt: 2,
                                    },
                                }}
                                size='sm'
                                border='1px solid rgba(226, 232, 240, 1)'
                                borderRadius='6px'
                                h={{ base: '116px', md: '84px' }}
                                maxH={{ base: '130px', md: '100px' }}
                            ></Textarea>
                        </CardBody>
                    </Card>
                ))}
                <Box
                    w={{ base: '98.5%', md: '604px', xl: 658, '2xl': 668 }}
                    textAlign='right'
                    mt={{ base: 4 }}
                >
                    <Button
                        w={{ base: '123px' }}
                        h={{ base: '32px' }}
                        bg='none'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        onClick={() => addStep()}
                    >
                        <HStack as='span'>
                            <Text
                                fontFamily='Inter'
                                fontWeight={600}
                                fontSize='14px'
                                lineHeight={5}
                            >
                                Новый шаг
                            </Text>{' '}
                            <Icon as={BlackPlus} w='14px' h='14px'></Icon>
                        </HStack>
                    </Button>
                </Box>
            </Box>
        </>
    );
}
