import { Box, Center, Spinner, useBreakpointValue } from '@chakra-ui/react';

export function ComponentLoader() {
    const sizes = useBreakpointValue({
        base: '134px',
    });
    return (
        <>
            <Center zIndex={999999} position='relative'>
                {' '}
                <Box
                    data-test-id='loader-search-block'
                    minW={sizes}
                    maxW={sizes}
                    w={sizes}
                    minH={sizes}
                    maxH={sizes}
                    h={sizes}
                    borderRadius='50%'
                    filter='blur(4px)'
                    bg='radial-gradient(50px circle at center, #C4FF61 0%, transparent 100%);'
                ></Box>
                <Spinner
                    w={{ base: '24px' }}
                    h={{ base: '24px' }}
                    zIndex={99999999}
                    position='absolute'
                ></Spinner>
            </Center>
        </>
    );
}
