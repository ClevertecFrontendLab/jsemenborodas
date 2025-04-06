import { Box, HStack, Icon, StackProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ElementType } from 'react';

import { Burger, FavouriteNotes, Likes, Logo, Subscribers } from '~/icons/Icon';

interface MetricProps extends StackProps {
    icon: ElementType;
}
function Metric(props: MetricProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='6px'>
            <Icon as={icon} w={3} h={3} />
            <Text color='rgba(45, 177, 0, 1)' fontFamily='Inter' fontSize={12} fontWeight='600'>
                {children}
            </Text>
        </HStack>
    );
}

export function Header() {
    return (
        <>
            <Box as='header' bg='rgba(255, 255, 211, 1)'>
                <HStack
                    spacing={0}
                    paddingTop={{ base: '11px', md: '11px', lg: '16px' }}
                    paddingX='16px'
                    justifyContent='space-between'
                >
                    <Box>
                        <Icon as={Logo} w={8} h={8} />
                    </Box>
                    <HStack spacing={0} textAlign='right'>
                        <HStack spacing={0}>
                            <Box w={14} h={6}>
                                <Metric icon={FavouriteNotes}>185</Metric>
                            </Box>
                            <Box w='58px' h={6}>
                                <Metric icon={Subscribers}>589</Metric>
                            </Box>
                            <Box w='57px' h={6}>
                                <Metric icon={Likes}>587</Metric>
                            </Box>
                        </HStack>
                        <Box w={12} h={12} pt='10px' pr='12px'>
                            <Icon as={Burger} w={6} h={6} />
                        </Box>
                    </HStack>
                </HStack>
            </Box>
        </>
    );
}
