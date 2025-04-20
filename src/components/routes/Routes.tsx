import { Route, Routes as RouterRoutes } from 'react-router';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { RecipePage } from '../Pages/RecipePage/RecipePage';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';

interface RoutesMenuProps {
    isBurgerOpen: boolean;
}

export function AppRoutes({ isBurgerOpen }: RoutesMenuProps) {
    return (
        <>
            <RouterRoutes>
                <Route path='/' element={<Main isBurgerOpen={isBurgerOpen} />} />
                <Route path='/Juciest' element={<JuciestPage isBurgerOpen={isBurgerOpen} />} />
                <Route path='/Juciest/:t' element={<RecipePage isBurgerOpen={isBurgerOpen} />} />
                <Route
                    path='/Vegan/:t'
                    element={<VeganKitchenPage isBurgerOpen={isBurgerOpen} />}
                />

                <Route path='*' element={<DefaultPage isBurgerOpen={isBurgerOpen} />} />
                <Route path='/:t/:t/:t/*' element={<RecipePage isBurgerOpen={isBurgerOpen} />} />
            </RouterRoutes>
        </>
    );
}
