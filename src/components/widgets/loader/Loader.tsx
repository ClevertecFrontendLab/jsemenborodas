import { AbsoluteCenter, Box, Spinner, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { userLoadingSelector } from '~/store/app-slice';

export function Loader() {
    const sizes = useBreakpointValue({
        base: '134px',
        md: '206px',
    });
    const isLoading = useSelector(userLoadingSelector);
    if (!isLoading) {
        return null;
    }
    return (
        <>
            <Box
                position='fixed'
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
