import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export function CursorTracker() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const elementsRef = useRef<Element[]>([]);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1280);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (cursorRef.current && isDesktop) {
            Object.assign(cursorRef.current.style, {
                position: 'fixed',
                width: '40px',
                height: '40px',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: '1',

                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='rgba(18, 79, 233, 0.2)'/%3E%3Cpath d='M12.9832 13.7877L17.5311 25.9156C17.576 26.0353 17.6564 26.1383 17.7616 26.2108C17.8668 26.2833 17.9917 26.3218 18.1195 26.3212C18.2472 26.3205 18.3717 26.2808 18.4762 26.2072C18.5806 26.1336 18.66 26.0298 18.7037 25.9098L20.5257 20.8993C20.5569 20.8135 20.6065 20.7356 20.6711 20.671C20.7357 20.6064 20.8136 20.5568 20.8995 20.5256L25.9099 18.7036C26.03 18.6599 26.1338 18.5805 26.2073 18.4761C26.2809 18.3716 26.3207 18.2471 26.3213 18.1193C26.3219 17.9916 26.2834 17.8667 26.2109 17.7615C26.1384 17.6563 26.0354 17.5759 25.9158 17.531L13.7878 12.983C13.6754 12.9409 13.5533 12.932 13.436 12.9574C13.3188 12.9828 13.2113 13.0414 13.1264 13.1263C13.0416 13.2112 12.9829 13.3186 12.9575 13.4359C12.9321 13.5532 12.941 13.6753 12.9832 13.7877Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.6719 20.6707L26.2511 26.2499' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg>")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            });
        }
    }, [isDesktop]);

    useEffect(() => {
        if (cursorRef.current && isDesktop) {
            cursorRef.current.style.left = `${position.x}px`;
            cursorRef.current.style.top = `${position.y}px`;
            cursorRef.current.style.opacity = isHovering ? '0.8' : '0';
        }
    }, [position, isHovering, isDesktop]);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest('.custom-cursor')) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest('.custom-cursor')) {
                setIsHovering(false);
            }
        };

        elementsRef.current = Array.from(document.getElementsByClassName('custom-cursor'));

        elementsRef.current.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            (element as HTMLElement).style.cursor = 'none';
        });

        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            elementsRef.current.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                (element as HTMLElement).style.cursor = '';
            });

            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDesktop]);

    return isDesktop ? <Box ref={cursorRef} /> : null;
}
