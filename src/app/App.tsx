import './App.css';

import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import { Footer } from '~/components/widgets/footer/Footer';
import { Header } from '~/components/widgets/header/Header';

import { AppRoutes } from '../components/routes/Routes';
import { CursorTracker } from '../components/widgets/cursorTracker/CursorTracker';
import { theme } from './theme';
function App() {
    return (
        <>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <CursorTracker></CursorTracker>
                    <Grid
                        minH='100vh'
                        templateRows={{ base: 'auto 1fr auto' }}
                        maxW={{ xl: 'calc(100vw)' }}
                        overflow='hidden'
                    >
                        <GridItem>
                            <Header></Header>
                        </GridItem>
                        <GridItem>
                            <AppRoutes></AppRoutes>
                        </GridItem>
                        <GridItem>
                            <Footer></Footer>
                        </GridItem>
                    </Grid>
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
