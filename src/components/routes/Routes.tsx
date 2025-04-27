import { useState } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { FilteredPage } from '../Pages/filteredPage/filteredPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';

interface RoutesMenuProps {
    isBurgerOpen: boolean;
    isFilterHidden: boolean;
    setIsFilterHidden: (value: boolean) => void;
}

export function AppRoutes({ isBurgerOpen, isFilterHidden, setIsFilterHidden }: RoutesMenuProps) {
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<
        { id: number; title: string; name: string }[]
    >([]);
    return (
        <>
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
                <Route
                    path='/filtered'
                    element={
                        <FilteredPage
                            isBurgerOpen={isBurgerOpen}
                            isFilterHidden={isFilterHidden}
                            setIsFilterHidden={setIsFilterHidden}
                            selectedFilterCategory={selectedFilterCategory}
                            setSelectedFilterCategory={setSelectedFilterCategory}
                        />
                    }
                />
            </RouterRoutes>
        </>
    );
}
