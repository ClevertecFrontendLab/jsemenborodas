import { HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface MetricProps extends StackProps {
    icon: ElementType;
    iconSize?: string | number;
}

export function Metrics({ icon, children, iconSize = 3, ...rest }: MetricProps) {
    return (
        <HStack {...rest} spacing='6px'>
            <Icon as={icon} w={iconSize} h={iconSize} />
            <Text color='rgba(45, 177, 0, 1)' fontFamily='Inter' fontSize={12} fontWeight='600'>
                {children}
            </Text>
        </HStack>
    );
}
