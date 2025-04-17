import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';

import { JuciestOnJuciest } from '~/components/widgets/juciest/JuciestOnJuciest';
import { VeganKitchen } from '~/components/widgets/veganKitchen/veganKitchen';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';
import { SearchForm2 } from '../../widgets/searchForm/SearchForm2';

export function JuciestPage() {
    return (
        <>
            <Box
                as='article'
                w='100%'
                maxW={{ sm: '100vw' }}
                p={0}
                mt={{ base: '64px', sm: '62px', xl: '80px' }}
                position='relative'
            >
                <Grid
                    templateColumns={{ xl: '256px auto 208px' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
                >
                    <GridItem>
                        <Show above='xl'>
                            <Box w='300px' as='nav' bg='red300'>
                                <NavMenu />
                            </Box>
                        </Show>
                    </GridItem>
                    <GridItem minW={{ xl: '880px' }}>
                        {' '}
                        <HStack
                            px={{ md: '20px', xl: '0' }}
                            spacing='0px'
                            justifyContent={{ base: 'center', xl: 'flex-start' }}
                            position='relative'
                            maxW={{ xl: 'calc(1920px - 256px - 24px)' }}
                        >
                            <VStack
                                as='main'
                                w={{
                                    xl: 'calc(880px + (1360 - 880) * ((100vw - 1440px) / (1920 - 1440)))',
                                }}
                                minW={{ xl: '880px' }}
                            >
                                <Box
                                    as='section'
                                    px={{ base: '16px', md: '0px', xl: '0' }}
                                    pl={{ '3xl': '0px' }}
                                    w={{ '3xl': '100%' }}
                                    flexDirection='column'
                                    alignItems='center'
                                    display='flex'
                                >
                                    <SearchForm2></SearchForm2>
                                    <Box mt={{ base: '34px' }} pr={{ base: '32px', xl: '0' }}>
                                        <JuciestOnJuciest></JuciestOnJuciest>
                                    </Box>
                                    <Box pr={{ base: '32px', xl: '0' }}>
                                        <VeganKitchen></VeganKitchen>
                                    </Box>
                                </Box>
                                <Box
                                    w={{ xl: '100%' }}
                                    maxW={{ xl: '1360px' }}
                                    overflow='hidden'
                                ></Box>
                            </VStack>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Show above='xl'>
                            <Box minW='208px' pl='48px' pt='22px' position='fixed'>
                                <MetricsDesktop />
                            </Box>
                            <Box minW='208px' position='fixed' bottom='1px' pl='5px'>
                                <AddRecipe></AddRecipe>
                            </Box>
                        </Show>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
