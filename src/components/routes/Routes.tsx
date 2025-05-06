import { useEffect, useState } from 'react';
import { Route, Routes as RouterRoutes, useLocation } from 'react-router';

import { useAppDispatch } from '~/store/hooks';
import { resetSearchState } from '~/store/reducers/search';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { ErrorPage } from '../Pages/errorPage/ErrorPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';
import { AlertNote } from '../widgets/alert/AlertNote';

interface RoutesMenuProps {
    isBurgerOpen: boolean;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
}

export function AppRoutes({ isBurgerOpen, isFilterHidden, setIsFilterHidden }: RoutesMenuProps) {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<
        { id: number; title: string; name: string }[]
    >([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(resetSearchState());
    }, [pathSegments, dispatch]);
    return (
        <>
            <AlertNote></AlertNote>
            <RouterRoutes>
                <Route
                    path='/'
                    element={
                        <Main
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                            selectedFilterCategory={selectedFilterCategory}
                            setSelectedFilterCategory={setSelectedFilterCategory}
                        />
                    }
                />
                <Route
                    path='/the-juiciest'
                    element={
                        <JuciestPage
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                        />
                    }
                />
                <Route
                    path='/the-juiciest/:t'
                    element={
                        <RecipePage
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                        />
                    }
                />
                <Route
                    path='/Vegan/:t'
                    element={
                        <VeganKitchenPage
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                            selectedFilterCategory={selectedFilterCategory}
                            setSelectedFilterCategory={setSelectedFilterCategory}
                        />
                    }
                />

                <Route
                    path='*'
                    element={
                        <DefaultPage
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                            selectedFilterCategory={selectedFilterCategory}
                            setSelectedFilterCategory={setSelectedFilterCategory}
                        />
                    }
                />
                <Route path='/:t/:t/:t/*' element={<RecipePage isBurgerOpen={isBurgerOpen} />} />
                <Route path='/not-found/*' element={<ErrorPage isBurgerOpen={isBurgerOpen} />} />
            </RouterRoutes>
        </>
    );
}
