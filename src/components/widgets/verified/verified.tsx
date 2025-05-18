import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { setAppError, setAppSuccess } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';
import { toggleIsAlertOpen } from '~/store/reducers/authModals';

export function Verified() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailVerified = queryParams.get('emailVerified');
        if (emailVerified === 'true') {
            navigate('/login');
            dispatch(setAppSuccess('VerificatioinGreat'));
            return;
        }
        navigate('/register');
        dispatch(setAppError('EmailRegistrationError'));
        dispatch(toggleIsAlertOpen());
    });
    return <></>;
}
