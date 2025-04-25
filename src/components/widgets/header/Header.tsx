import { Box, Card, CardHeader, Heading, Hide, HStack, Icon, Show } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { UserAvatar } from '~/components/features/Avatar/Avatar';
import { Breadcrumbs } from '~/components/features/BreadCrumb/BreadCrumbs';
import { FavouriteNotes, FullLogo, Likes, Logo, Subscribers } from '~/icons/Icon';

import { Metrics } from '../../features/Metrics/Metrics';
import AvatarImg from '../../shared/images/avatarImages/avatar.jpg';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';

interface HeaderMenuProps {
    isBurgerOpen: boolean;
    setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isFilterHidden: boolean;
}

export function Header({ isBurgerOpen, setIsBurgerOpen, isFilterHidden }: HeaderMenuProps) {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);
    const userName = 'Екатерина Константинопольская';
    const userUsername = '@bake_and_pie';
    const marginLeft =
        pathNames[0] === 'Juciest' ? { xl: '48px', '2xl': '55px' } : { xl: '53px', '2xl': '55px' };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsBurgerOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsBurgerOpen]);
    return (
        <Box
            as='header'
            bg={
                isBurgerOpen || isFilterHidden === false
                    ? 'rgba(255,255,255,1)'
                    : 'rgba(255, 255, 211, 1)'
            }
            data-test-id='header'
            w='100%'
            position='fixed'
            top='0'
            maxW={{ base: '1920px', sm: '100vw', xl: '1920px' }}
            zIndex='1200'
            pb='2px'
        >
            <HStack
                spacing={{ base: 0, xl: '7.9rem' }}
                paddingTop={{ base: '11px', md: '10px', xl: '16px', '2xl': '16px' }}
                paddingBottom={{ xl: '16px' }}
                paddingX={{ base: '16px', md: '20px', xl: '20px' }}
                marginRight={{ xl: '56px' }}
                paddingRight={{ xl: '0px' }}
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

                <HStack spacing={0} textAlign='right' maxW={{ xl: '1591px' }} w={{ xl: '100%' }}>
                    <HStack
                        spacing={0}
                        px={{ base: 0, md: 2, lg: 0 }}
                        maxW={{ xl: '1152.8px' }}
                        w='100%'
                    >
                        <Hide above='xl'>
                            <Box
                                w={14}
                                h={6}
                                display={
                                    isBurgerOpen || isFilterHidden === false ? 'none' : 'block'
                                }
                            >
                                <Metrics icon={FavouriteNotes}>185</Metrics>
                            </Box>
                            <Box
                                w='58px'
                                h={6}
                                display={
                                    isBurgerOpen || isFilterHidden === false ? 'none' : 'block'
                                }
                            >
                                <Metrics icon={Subscribers}>589</Metrics>
                            </Box>
                            <Box
                                w='57px'
                                h={6}
                                display={
                                    isBurgerOpen || isFilterHidden === false ? 'none' : 'block'
                                }
                            >
                                <Metrics icon={Likes}>587</Metrics>
                            </Box>
                        </Hide>
                        <Show above='xl'>
                            <Heading
                                fontSize={16}
                                lineHeight={6}
                                fontWeight='400'
                                padding={0}
                                fontFamily='Inter'
                            >
                                <Breadcrumbs pathNames={pathNames} />
                            </Heading>
                        </Show>
                    </HStack>
                    <Box
                        w={{ base: '48px', xl: '432px' }}
                        h={12}
                        pt={{ base: '9px', xl: '0px' }}
                        pr={{ base: '12px', xl: '0px' }}
                    >
                        <Hide above='xl'>
                            <BurgerMenu
                                isOpen={isBurgerOpen}
                                setIsOpen={setIsBurgerOpen}
                            ></BurgerMenu>
                        </Hide>
                        <Show above='xl'>
                            <Card shadow='none' w='432px' bg='transparent'>
                                <CardHeader p={0} bg='transparent'>
                                    <HStack
                                        justifyContent='flex-start'
                                        spacing='12px'
                                        ml={{ base: 0, ...marginLeft }}
                                    >
                                        <UserAvatar
                                            name={userName}
                                            username={userUsername}
                                            imageSrc={AvatarImg}
                                        />
                                    </HStack>
                                </CardHeader>
                            </Card>
                        </Show>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    );
}
