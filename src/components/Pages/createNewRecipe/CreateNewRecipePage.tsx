import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import { useEffect } from 'react';

import { scrollController } from '~/components/shared/utils/scrollController';
import { CreateNewRecipe } from '~/components/widgets/createNewRecipe/CreateNewRecipe';
import { useAppSelector } from '~/store/hooks';
import { selectorIsBurgerOpen, selectorIsFilterOpen } from '~/store/reducers/open';

import { NavMenu } from '../../widgets/navMenu/NavMenu';

export function CreateNewRecipePage() {
    const isBurgerOpen = useAppSelector(selectorIsBurgerOpen);
    const isFilterOpen = useAppSelector(selectorIsFilterOpen);
    useEffect(() => {
        if (isBurgerOpen || isFilterOpen) {
            scrollController.disabledScroll();
            return;
        }
        scrollController.enabledScroll();
    }, [isBurgerOpen, isFilterOpen]);
    return (
        <>
            <Box
                as='article'
                w='100%'
                maxW={{ sm: '100vw' }}
                p={0}
                mt={{ xl: '80px' }}
                position='relative'
                filter={isBurgerOpen ? 'blur(4px)' : ''}
                bg={isBurgerOpen ? 'rgba(0, 0, 0, 0.16)' : ''}
            >
                <Grid
                    templateColumns={{ xl: '256px auto ' }}
                    maxW='100vw'
                    gap={{ xl: '24px' }}
                    overflow='visible'
                >
                    <GridItem>
                        <Show above='xl'>
                            <Box w='300px' as='nav' bg='red300'>
                                <NavMenu />
                            </Box>
                        </Show>
                    </GridItem>
                    <GridItem minW={{ xl: '880px' }}>
                        <CreateNewRecipe />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}
