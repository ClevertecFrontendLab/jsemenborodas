import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';

import { JuciestOnJuciest } from '~/components/juciest/JuciestOnJuciest';
import { Tabs } from '~/components/tabs/Tabs';
import { VeganKitchen } from '~/components/veganKitchen/veganKitchen';

import { AddRecipe } from '../../addRecipe/AddRecipe';
import { MetricsDesktop } from '../../metrics/MetricsDesktop';
import { NavMenu } from '../../navMenu/NavMenu';
import { SearchForm2 } from '../../searchForm/SearchForm2';

export function VeganKitchenPage() {
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
                            px={{ md: '0px', xl: '0' }}
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
                                <Box as='section' maxW='100vw'>
                                    <Box
                                        px={{ base: '16px', md: '20px', xl: '0px' }}
                                        pt={{ md: '2px', xl: '0px' }}
                                    >
                                        <SearchForm2></SearchForm2>
                                    </Box>

                                    <Box
                                        w={{ xl: '100%' }}
                                        maxW={{ xl: 'calc(100vw - 360px - 208px - 24px)' }}
                                    >
                                        <Tabs></Tabs>
                                    </Box>
                                    <Box
                                        as='section'
                                        ml={{ base: '16px', md: '18px', xl: 0, '2xl': '1px' }}
                                        flexDirection='column'
                                        alignItems='center'
                                        display='flex'
                                        mt={{ base: '24px', md: '25px', xl: '30px', '2xl': '24px' }}
                                        pr={{ base: '16px', md: '18px', xl: 0 }}
                                    >
                                        <JuciestOnJuciest></JuciestOnJuciest>
                                    </Box>
                                    <Box
                                        pl={{ base: '16px', xl: 0 }}
                                        pr={{ base: '16px', xl: '0' }}
                                    >
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
