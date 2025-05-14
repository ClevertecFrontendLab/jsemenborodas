import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { useRegisterUserMutation } from '~/query/services/auth';
import { useAppSelector } from '~/store/hooks';
import {
    progressSelect,
    userEmailSelect,
    userFirstNameSelect,
    userLastNameSelect,
    userLoginSelect,
    userPasswordSelect,
} from '~/store/reducers/user';

import { RegisterButton } from './RegisterButton';
import { RegisterFormPasswordInputs } from './RegisterFormPasswordInputs';
import { RegisterFormPersonalInputs } from './RegisterFormPersonalInputs';
import { RegisterStep } from './RegisterStep';
export function RegisterFormRegister() {
    const sliderWidth = useBreakpointValue({
        base: '328px',
        sm: '355px',
        xl: '451px',
        '2xl': '461px',
    });
    const firstName = useAppSelector(userFirstNameSelect);
    const lastName = useAppSelector(userLastNameSelect);
    const email = useAppSelector(userEmailSelect);
    const login = useAppSelector(userLoginSelect);
    const password = useAppSelector(userPasswordSelect);
    const swiperRef = useRef<SwiperType | null>(null);
    const progressBar = useAppSelector(progressSelect);
    const [getRegister] = useRegisterUserMutation();

    const handleOnSubmit = async () => {
        if (Object.values(progressBar).filter((i) => i === true).length === 6) {
            try {
                await getRegister({
                    email: email,
                    login: login,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                });
                console.log(
                    getRegister({
                        email: email,
                        login: login,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                    }),
                );
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <>
            <Box as='form' w={{ base: '100%' }} ml={{ '2xl': '24px' }}>
                <VStack w='100%' spacing='112px'>
                    <Swiper
                        slidesPerView={1}
                        style={{ maxWidth: sliderWidth, minWidth: sliderWidth }}
                        allowTouchMove={false}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        <SwiperSlide style={{ width: '100%' }}>
                            <VStack w='100%'>
                                <RegisterStep />
                                <RegisterFormPersonalInputs />
                                <RegisterButton onClick={() => swiperRef?.current?.slideNext()} />
                            </VStack>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '100%' }}>
                            <VStack w='100%'>
                                <RegisterStep />
                                <RegisterFormPasswordInputs />
                                <RegisterButton step={1} onClick={() => handleOnSubmit()} />
                            </VStack>
                        </SwiperSlide>
                    </Swiper>
                </VStack>
            </Box>
        </>
    );
}
