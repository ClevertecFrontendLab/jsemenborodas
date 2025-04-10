import { Box, Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';

import { AddRecipe } from '../addRecipe/AddRecipe';
import { CookBlog } from '../cookBlog/cookBlog';
import { Juciest } from '../juciest/Juciest';
import { MetricsDesktop } from '../metrics/MetricsDesktop';
import { NavMenu } from '../navMenu/NavMenu';
import { NewRecipe } from '../newRecipe/NewRecipe';
import { SearchForm2 } from '../searchForm/SearchForm2';
import { VeganKitchen } from '../veganKitchen/veganKitchen';
export function Main() {
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
                                <Box as='section' px={{ base: '0px', md: '0px', xl: '0' }}>
                                    <SearchForm2></SearchForm2>
                                </Box>
                                <Box w={{ xl: '100%' }} maxW={{ xl: '1360px' }} overflow='hidden'>
                                    <Box as='section' overflow='hidden'>
                                        <NewRecipe></NewRecipe>
                                    </Box>
                                    <Box as='section' overflow='hidden'>
                                        <Juciest></Juciest>
                                    </Box>
                                    <Box as='section' overflow='hidden'>
                                        <CookBlog></CookBlog>
                                    </Box>
                                    <Box as='section' overflow='hidden'>
                                        <VeganKitchen></VeganKitchen>
                                    </Box>
                                </Box>
                            </VStack>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Show above='xl'>
                            <Box minW='208px' pl='48px' pt='22px' position='fixed'>
                                <MetricsDesktop />
                            </Box>
                            <Box minW='208px' position='fixed' bottom='-12px' pl='3px'>
                                <AddRecipe></AddRecipe>
                            </Box>
                        </Show>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
