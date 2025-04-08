import { Box, VStack } from '@chakra-ui/react';

import { SearchForm } from '../searchForm/SearchForm';
export function Main() {
    return (
        <>
            <Box as='article' w='100%' p={0}>
                <VStack>
                    <Box as='section' w='100%' px={{ base: '16px', md: '20px', xl: '0' }}>
                        <SearchForm></SearchForm>
                    </Box>
                    <Box as='section'></Box>
                    <Box as='section'></Box>
                    <Box as='section'></Box>
                    <Box as='section'></Box>
                </VStack>
            </Box>
        </>
    );
}
