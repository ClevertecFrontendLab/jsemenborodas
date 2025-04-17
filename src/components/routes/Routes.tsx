import { Route, Routes as RouterRoutes } from 'react-router';

import { DefaultPage } from '../Pages/defaultPage/DefaultPage';
import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';

export function AppRoutes() {
    return (
        <>
            <RouterRoutes>
                <Route path='/' element={<Main />} />
                <Route path='/Juciest' element={<JuciestPage />} />
                <Route path='/VeganKitchen/:t' element={<VeganKitchenPage />} />
                <Route path='*' element={<DefaultPage />} />
            </RouterRoutes>
        </>
    );
}
