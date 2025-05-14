import { Progress, VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { useAppSelector } from '~/store/hooks';
import { progressSelect } from '~/store/reducers/user';
export function RegisterStep() {
    const progressBar = useAppSelector(progressSelect);
    return (
        <VStack w='100%' alignItems='flex-start' spacing={0}>
            <Text fontFamily='Inter' fontWeight={400} fontSize={16} lineHeight={6}>
                Шаг 1. Личная информация
            </Text>
            <Progress
                value={
                    (Object.values(progressBar).filter((item) => item === true).length / 6) * 100
                }
                w='100%'
                colorScheme='blackAlpha'
                hasStripe
                bg='rgba(0, 0, 0, 0.06)'
                h={2}
            />
        </VStack>
    );
}
