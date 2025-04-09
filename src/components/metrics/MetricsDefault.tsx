import { HStack, Icon, StackProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface MetricProps extends StackProps {
    icon: ElementType;
}
export function MetricsDefault(props: MetricProps) {
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
