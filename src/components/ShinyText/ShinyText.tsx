import React, { useState, useRef, useEffect } from 'react';
import './ShinyText.css';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    color?: string;
    shineColor?: string;
    spread?: number;
    yoyo?: boolean;
    pauseOnHover?: boolean;
    direction?: 'left' | 'right';
    delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 2,
    className = '',
    color = '#b5b5b5',
    shineColor = '#ffffff',
    spread = 120,
    yoyo = false,
    pauseOnHover = false,
    direction = 'left',
    delay = 0
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const isPaused = disabled || !isVisible || (isHovered && pauseOnHover);
    const animDir = direction === 'left'
        ? (yoyo ? 'alternate-reverse' : 'reverse')
        : (yoyo ? 'alternate' : 'normal');

    return (
        <span
            ref={ref}
            className={`shiny-text ${isPaused ? 'shiny-text--paused' : ''} ${className}`}
            style={{
                '--shine-speed': `${speed}s`,
                '--shine-color': color,
                '--shine-highlight': shineColor,
                '--shine-spread': `${spread}deg`,
                '--shine-direction': animDir,
            } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </span>
    );
};

export default ShinyText;
