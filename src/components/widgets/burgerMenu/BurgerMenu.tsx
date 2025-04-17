import { Box, Icon } from '@chakra-ui/react';
import { useState } from 'react';

import { Burger, OpenBurger } from '~/icons/Icon';

export function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <Box onClick={toggleMenu}>
                <Icon as={isOpen ? OpenBurger : Burger} w={isOpen ? 3 : 6} h={isOpen ? 3 : 6} />
            </Box>
        </>
    );
}
