import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { LoginRoutes } from '~/components/routes/LoginRoutes';

import { AlertNote } from '../alert/AlertNote';
import { Loader } from '../loader/Loader';

export function LoginLayout() {
    const [isDisplay, setIsDisplay] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        const pathNames = location.pathname.split('/').filter((x) => x);
        if (pathNames[0] === 'login' || pathNames[0] === 'register') {
            setIsDisplay(false);
            return;
        }

        setIsDisplay(true);
    }, [location.pathname]);
    return (
        <Grid
            minH='100vh'
            templateRows={isDisplay ? { base: 'auto 1fr auto' } : { base: '1fr' }}
            maxW={{ xl: 'calc(100vw)' }}
            overflow='hidden'
        >
            <GridItem>
                <LoginRoutes />
            </GridItem>
            <Loader />
            <AlertNote />
        </Grid>
    );
}
