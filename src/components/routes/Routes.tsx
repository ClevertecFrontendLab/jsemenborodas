import { Route, Routes as RouterRoutes } from 'react-router';

import { JuciestPage } from '../Pages/juciest/JuciestPage';
import { Main } from '../Pages/main/Main';
import { VeganKitchenPage } from '../Pages/veganKitchen/VeganKitchenPage';

export function AppRoutes() {
    return (
        <>
            <RouterRoutes>
                <Route path='/' element={<Main />} />
                <Route path='/Juciest' element={<JuciestPage />} />
                <Route path='/VeganKitchen/SecondDelicious' element={<VeganKitchenPage />} />
            </RouterRoutes>
        </>
    );
}
