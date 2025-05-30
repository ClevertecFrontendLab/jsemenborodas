import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { SaveButton } from '../assets/Icons';

export function Buttons() {
    return (
        <>
            <Stack
                mt={{ base: 6, xl: 8 }}
                spacing={{ base: 5 }}
                flexDirection={{ md: 'row' }}
                mx={{ md: 'auto' }}
                w={{ xl: 720, '2xl': 788 }}
            >
                <Button
                    w={{ base: 328, md: 246 }}
                    h={12}
                    bgColor='rgba(255, 255, 255, 0.06)'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                >
                    <HStack as='span'>
                        <Icon as={SaveButton} w={4} h={4}></Icon>
                        <Text
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(0, 0, 0, 0.8)'
                        >
                            Сохранить черновик
                        </Text>
                    </HStack>
                </Button>
                <Button
                    w={{ base: 328, md: 246 }}
                    h={12}
                    bgColor='rgba(0, 0, 0, 0.92)'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                >
                    <HStack as='span'>
                        <Text
                            fontFamily='Inter'
                            fontWeight={600}
                            fontSize={18}
                            lineHeight={7}
                            color='rgba(255, 255, 255, 1)'
                        >
                            Опубликовать рецепт
                        </Text>
                    </HStack>
                </Button>
            </Stack>
        </>
    );
}
