'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        // Observe the container and all reveal elements inside it
        const targets = el.querySelectorAll<HTMLElement>('.reveal');
        targets.forEach((t) => observer.observe(t));
        if (el.classList.contains('reveal')) observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return ref;
}
