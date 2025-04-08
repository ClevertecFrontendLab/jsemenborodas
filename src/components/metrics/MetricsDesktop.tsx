import { Box, HStack, Icon, StackProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ElementType } from 'react';

import { FavouriteNotes, Likes, Subscribers } from '~/icons/Icon';
interface MetricProps extends StackProps {
    icon: ElementType;
}
function Metric(props: MetricProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='8px'>
            <Icon as={icon} w={4} h={4} />
            <Text
                color='rgba(45, 177, 0, 1)'
                fontFamily='Inter'
                fontSize={16}
                fontWeight='600'
                letterSpacing='0%'
            >
                {children}
            </Text>
        </HStack>
    );
}

export function MetricsDesktop() {
    return (
        <>
            <Box position='absolute' right='35px' top='25px'>
                <Box w='85px' h={10} mb='23px'>
                    <Metric icon={FavouriteNotes}>185</Metric>
                </Box>
                <Box w='87px' h={10} mb='23px'>
                    <Metric icon={Subscribers}>589</Metric>
                </Box>
                <Box w='86px' h={10}>
                    <Metric icon={Likes}>587</Metric>
                </Box>
            </Box>
        </>
    );
}
