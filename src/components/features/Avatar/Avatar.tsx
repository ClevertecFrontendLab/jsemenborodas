import { Avatar as ChakraAvatar, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

interface UserAvatarProps {
    name: string;
    username: string;
    imageSrc?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, username, imageSrc }) => (
    <HStack justifyContent='flex-start' spacing='12px'>
        <ChakraAvatar p={0} name={name} src={imageSrc} bg='transparent' />
        <Box>
            <VStack spacing={0} alignItems='flex-start'>
                <Heading
                    fontSize='18.2px'
                    fontWeight='500'
                    lineHeight='28px'
                    fontFamily='Inter'
                    letterSpacing='0%'
                    pt='0.5px'
                >
                    {name}
                </Heading>
                <Text
                    color='rgba(0, 0, 0, 0.64)'
                    lineHeight='20px'
                    fontFamily='Inter'
                    fontSize='14px'
                    mt='-1px'
                >
                    {username}
                </Text>
            </VStack>
        </Box>
    </HStack>
);
