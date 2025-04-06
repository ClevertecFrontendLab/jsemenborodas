import {
    Avatar,
    Box,
    Card,
    CardHeader,
    Heading,
    Hide,
    HStack,
    Icon,
    Show,
    StackProps,
    VStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ElementType } from 'react';

import { Burger, FavouriteNotes, FullLogo, Likes, Logo, Subscribers } from '~/icons/Icon';

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
                    spacing={{ base: 0, xl: '128px' }}
                    paddingTop={{ base: '11px', md: '11px', lg: '16px' }}
                    paddingBottom={{ lg: '12px' }}
                    paddingX={{ base: '16px', md: '20px' }}
                    justifyContent={{ base: 'space-between', xl: 'normal' }}
                >
                    <Box>
                        <Hide above='md'>
                            <Icon as={Logo} w={8} h={8} />
                        </Hide>
                        <Show above='md'>
                            <Icon
                                as={FullLogo}
                                w={{ lg: '135.11px', xl: '135.2px' }}
                                h={8}
                                mt={{ xl: '4px' }}
                            />
                        </Show>
                    </Box>

                    <HStack
                        spacing={0}
                        textAlign='right'
                        maxW={{ xl: '1591px' }}
                        w={{ xl: '100%' }}
                    >
                        <HStack
                            spacing={0}
                            px={{ base: 0, md: 2, lg: 0 }}
                            maxW={{ xl: '1152.8px' }}
                            w='100%'
                        >
                            <Hide above='xl'>
                                <Box w={14} h={6}>
                                    <Metric icon={FavouriteNotes}>185</Metric>
                                </Box>
                                <Box w='58px' h={6}>
                                    <Metric icon={Subscribers}>589</Metric>
                                </Box>
                                <Box w='57px' h={6}>
                                    <Metric icon={Likes}>587</Metric>
                                </Box>
                            </Hide>
                            <Show above='xl'>
                                <Heading
                                    fontSize={15.75}
                                    lineHeight={6}
                                    fontWeight='400'
                                    padding={0}
                                    fontFamily='Inter'
                                >
                                    Главная
                                </Heading>
                            </Show>
                        </HStack>
                        <Box
                            w={{ base: '48px', xl: '432px' }}
                            h={12}
                            pt={{ base: '9px', xl: '0px' }}
                            pr='12px'
                        >
                            <Hide above='xl'>
                                <Icon as={Burger} w={6} h={6} />
                            </Hide>
                            <Show above='xl'>
                                <Card
                                    shadow='none'
                                    w='432px'
                                    pl={{ '2xl': '28px' }}
                                    bg='transparent'
                                >
                                    <CardHeader p={0} bg='rgba(255, 255, 211, 1)'>
                                        <HStack
                                            justifyContent='flex-start'
                                            px={{
                                                xl: '19.8px',
                                                '2xl': 'clamp(19.8px, 1.25vw, 24px)',
                                            }}
                                            spacing='11px'
                                        >
                                            <Avatar
                                                p={0}
                                                name='Екатерина Константинопольская'
                                                src='./avatar.jpg'
                                                bg='transparent'
                                            ></Avatar>
                                            <Box>
                                                <VStack spacing={0} alignItems='flex-start'>
                                                    <Heading
                                                        fontSize='17.8px'
                                                        fontWeight='500'
                                                        lineHeight='28px'
                                                        fontFamily='Inter'
                                                        letterSpacing='0%'
                                                    >
                                                        Екатерина Константинопольская
                                                    </Heading>
                                                    <Text
                                                        color='rgba(0, 0, 0, 0.64)'
                                                        lineHeight='20px'
                                                        fontFamily='Inter'
                                                        fontSize='13.8px'
                                                    >
                                                        @bake_and_pie
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </CardHeader>
                                </Card>
                            </Show>
                        </Box>
                    </HStack>
                </HStack>
            </Box>
        </>
    );
}
