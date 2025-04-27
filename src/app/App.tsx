import './App.css';

import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';

import { Footer } from '~/components/widgets/footer/Footer';
import { Header } from '~/components/widgets/header/Header';

import { AppRoutes } from '../components/routes/Routes';
import { CursorTracker } from '../components/widgets/cursorTracker/CursorTracker';
import { theme } from './theme';
function App() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isfilterHidden, setIsFilterHidden] = useState(true);
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
                            <Header
                                isBurgerOpen={isBurgerOpen}
                                isFilterHidden={isfilterHidden}
                                setIsBurgerOpen={setIsBurgerOpen}
                            ></Header>
                        </GridItem>
                        <GridItem>
                            <AppRoutes
                                isBurgerOpen={isBurgerOpen}
                                isFilterHidden={isfilterHidden}
                                setIsFilterHidden={setIsFilterHidden}
                            ></AppRoutes>
                        </GridItem>
                        <GridItem>
                            <Footer
                                isBurgerOpen={isBurgerOpen}
                                isFilterHidden={isfilterHidden}
                            ></Footer>
                        </GridItem>
                    </Grid>
                </ChakraProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
