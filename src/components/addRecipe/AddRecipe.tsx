import { Box, Button, VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import Notes from './Notes.png';
export function AddRecipe() {
    return (
        <>
            <Box w='208px' h='208px'>
                <Button w='100%' h='100%' bg='radial-gradient(circle, #C4FF61 0%, #FFFFFF 50%)'>
                    <VStack>
                        <Box bg='black' borderRadius='50%' w='48px' h='48px'>
                            <VStack>
                                <Image
                                    src={Notes}
                                    w='24px'
                                    h='24px'
                                    color='red'
                                    transform='translateY(50%)'
                                ></Image>
                            </VStack>
                        </Box>
                        <Box>
                            <Text
                                fontFamily='Inter'
                                lineHeight='16px'
                                fontSize='12px'
                                fontWeight={400}
                                mt='4px'
                            >
                                Записать рецепт
                            </Text>
                        </Box>
                    </VStack>
                </Button>
            </Box>
        </>
    );
}
