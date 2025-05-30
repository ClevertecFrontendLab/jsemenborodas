import { Box, Button, VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import Notes from '../../../assets/images/Notes.png';
export function AddRecipe() {
    const navigate = useNavigate();
    return (
        <>
            <Box w='208px' h='208px'>
                <Button
                    onClick={() => navigate('/new-recipe')}
                    w='100%'
                    h='100%'
                    _hover={{ background: 'normal' }}
                    bg='radial-gradient(circle 75px at center, rgba(196, 255, 97, 0.5) 0%, #FFFFFF 100%)'
                >
                    <VStack>
                        <Box
                            bg='black'
                            borderRadius='50%'
                            w='48px'
                            h='48px'
                            transform='translateY(25%)'
                        >
                            <VStack>
                                <Image
                                    src={Notes}
                                    w='24px'
                                    h='24px'
                                    color='red'
                                    transform='translateY(50%)'
                                    zIndex='11'
                                ></Image>
                            </VStack>
                        </Box>
                        <Box>
                            <Text
                                fontFamily='Inter'
                                lineHeight='16px'
                                fontSize='12px'
                                fontWeight={400}
                                transform='translateY(12px)'
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
