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
        <HStack {...rest} spacing='6px'>
            <Icon as={icon} w={3} h={3} />
            <Text color='rgba(45, 177, 0, 1)' fontFamily='Inter' fontSize={12} fontWeight='600'>
                {children}
            </Text>
        </HStack>
    );
}

export function Metrics() {
    return (
        <>
            <Box w={14} h={6}>
                <Metric icon={FavouriteNotes}>185</Metric>
            </Box>
            <Box w='58px' h={6}>
                <Metric icon={Subscribers}>589</Metric>
            </Box>
            <Box w='57px' h={6}>
                <Metric icon={Likes}>587</Metric>
            </Box>
        </>
    );
}
