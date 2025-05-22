import { Box, HStack, Icon, StackProps } from '@chakra-ui/react';
import { ElementType } from 'react';

interface MetricProps extends StackProps {
    icon: ElementType;
    iconSize?: string | number;
    iconSizeXL?: string | number;
    spacingXL?: string | number;
}

export function Metrics({
    icon,
    children,
    iconSize = 3,
    iconSizeXL = 3,
    spacingXL = '6px',
    ...rest
}: MetricProps) {
    return (
        <HStack {...rest} spacing={{ base: '6px', '2xl': spacingXL }}>
            <Icon
                as={icon}
                w={{ base: iconSize, '2xl': iconSizeXL }}
                h={{ base: iconSize, '2xl': iconSizeXL }}
            />
            <Box
                as='span'
                color='rgba(45, 177, 0, 1)'
                fontFamily='Inter'
                fontSize={12}
                fontWeight='600'
            >
                {children}
            </Box>
        </HStack>
    );
}
