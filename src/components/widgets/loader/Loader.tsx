import { AbsoluteCenter, Box, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { userLoadingSelector } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';
import { resetBurger } from '~/store/reducers/open';

export function Loader() {
    const dispatch = useAppDispatch();
    const sizes =
        useBreakpointValue({
            base: '134px',
            md: '206px',
        }) ?? '134px';
    const isLoading = useSelector(userLoadingSelector);
    if (!isLoading) {
        return null;
    }
    return (
        <>
            <Box
                position='absolute'
                zIndex={11}
                bgColor='#00000029'
                style={{
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
                top={0}
                right={0}
                bottom={0}
                left={0}
                data-test-id='app-loader'
                onClick={() => dispatch(resetBurger())}
            >
                <AbsoluteCenter zIndex={11}>
                    <Box
                        minW={sizes}
                        maxW={sizes}
                        w={sizes}
                        minH={sizes}
                        maxH={sizes}
                        h={sizes}
                        borderRadius='50%'
                        filter='blur(4px)'
                        bg='radial-gradient(circle at center, #C4FF61 0%, transparent 100%);'
                    ></Box>
                    <AbsoluteCenter>
                        <Spinner
                            w={{ base: '24px', md: '37px' }}
                            h={{ base: '24px', md: '37px' }}
                            zIndex={11}
                        ></Spinner>
                    </AbsoluteCenter>
                </AbsoluteCenter>
            </Box>
        </>
    );
}
