import { Box, HStack, Show, VStack } from '@chakra-ui/react';

import { MetricsDesktop } from '../metrics/MetricsDesktop';
import { NavMenu } from '../navMenu/NavMenu';
import { SearchForm2 } from '../searchForm/SearchForm2';
export function Main() {
    return (
        <>
            <Box
                as='article'
                w='100%'
                p={0}
                mt={{ base: '64px', sm: '62px', xl: '80px' }}
                position='relative'
            >
                <Show above='xl'>
                    <Box w='300px' as='nav' bg='red300'>
                        <NavMenu />
                    </Box>
                </Show>
                <HStack
                    spacing='0px'
                    justifyContent={{ base: 'center', sm: 'flex-end' }}
                    position='relative'
                    maxW='1920px'
                >
                    <VStack
                        as='main'
                        w={{
                            xl: 'calc(880px + (1360 - 880) * ((100vw - 1440px) / (1920 - 1440)))',
                        }}
                    >
                        <Box as='section' px={{ base: '0px', md: '0px', xl: '0' }}>
                            <SearchForm2></SearchForm2>
                        </Box>
                        <Box as='section'></Box>
                        <Box as='section'></Box>
                        <Box as='section'></Box>
                        <Box as='section'></Box>
                    </VStack>
                    <Show above='xl'>
                        <Box minW='208px' ml='72px' pl='48px' pt='22px'>
                            <MetricsDesktop />
                        </Box>
                    </Show>
                </HStack>
            </Box>
        </>
    );
}
