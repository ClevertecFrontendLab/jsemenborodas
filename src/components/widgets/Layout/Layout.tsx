import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { AppRoutes } from '~/components/routes/Routes';

import { AlertNote } from '../alert/AlertNote';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Loader } from '../loader/Loader';

export function Layout() {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const [isDisplay, setIsDisplay] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        const pathNames = location.pathname.split('/').filter((x) => x);
        if (pathNames[0] === 'login') {
            setIsDisplay(false);
        }
    }, [location.pathname]);

    return (
        <Grid
            minH='100vh'
            templateRows={isDisplay ? { base: 'auto 1fr auto' } : { base: '1fr' }}
            maxW={{ xl: 'calc(100vw)' }}
            overflow='hidden'
        >
            {isDisplay && <Loader />}
            {isDisplay && <AlertNote />}
            {isDisplay && (
                <GridItem>
                    <Header isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
                </GridItem>
            )}
            <GridItem>
                <AppRoutes isBurgerOpen={isBurgerOpen} />
            </GridItem>
            {isDisplay && (
                <GridItem>
                    <Footer isBurgerOpen={isBurgerOpen} />
                </GridItem>
            )}
        </Grid>
    );
}
