import { AbsoluteCenter, Box, Spinner, useBreakpointValue } from '@chakra-ui/react';

export function Loader() {
    const sizes = useBreakpointValue({
        base: '134px',
        md: '206px',
    });
    return (
        <>
            <Box
                position='fixed'
                zIndex={9999999}
                bgColor='#00000029'
                style={{
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                }}
                top={0}
                right={0}
                bottom={0}
                left={0}
            >
                <AbsoluteCenter zIndex={999999}>
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
                            zIndex={99999999}
                        ></Spinner>
                    </AbsoluteCenter>
                </AbsoluteCenter>
            </Box>
        </>
    );
}
