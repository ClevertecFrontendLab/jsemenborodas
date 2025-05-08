import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect } from 'react';

import { scrollController } from '~/components/shared/utils/scrollController';
import { ErrorComponent } from '~/components/widgets/error/Error';

import { AddRecipe } from '../../widgets/addRecipe/AddRecipe';
import { MetricsDesktop } from '../../widgets/metricsDesktop/MetricsDesktop';
import { NavMenu } from '../../widgets/navMenu/NavMenu';

interface PageMenuProps {
    isBurgerOpen: boolean;
}

export function ErrorPage({ isBurgerOpen }: PageMenuProps) {
    useEffect(() => {
        if (isBurgerOpen) {
            scrollController.disabledScroll();
            return;
        }
        scrollController.enabledScroll();
    }, [isBurgerOpen]);
    return (
        <>
            <Box
                as='article'
                w='100%'
                maxW={{ sm: '100vw' }}
                p={0}
                mt={{ base: '64px', sm: '62px', xl: '80px' }}
                position='relative'
                filter={isBurgerOpen ? 'blur(4px)' : ''}
                bg={isBurgerOpen ? 'rgba(0, 0, 0, 0.16)' : ''}
            >
                <Grid
                    templateColumns={{ xl: '256px auto 208px' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
                    overflow='hidden'
                >
                    <GridItem>
                        <Show above='xl'>
                            <Box w='300px' as='nav' bg='red300'>
                                <NavMenu />
                            </Box>
                        </Show>
                    </GridItem>
                    <GridItem
                        minW={{ xl: '880px' }}
                        h={{
                            base: 'calc(100vh - 84px - 16px)',
                            md: 'calc(100vh - 84px - 42px)',
                            xl: 'calc(100vh - 80px)',
                        }}
                    >
                        <ErrorComponent />
                    </GridItem>
                    <GridItem>
                        <Show above='xl'>
                            <Box minW='208px' pl='48px' pt='22px' position='fixed'>
                                <MetricsDesktop />
                            </Box>
                            <Box minW='208px' position='fixed' bottom='1px' pl='5px'>
                                <AddRecipe />
                            </Box>
                        </Show>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
