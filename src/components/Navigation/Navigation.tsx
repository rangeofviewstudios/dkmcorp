'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);

        // Enable smooth transition between themes
        document.documentElement.classList.add('theme-transition');

        if (next) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }

        // Remove transition class after animation completes
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 500);
    };

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleClose = () => setMenuOpen(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleTrapFocus = useCallback((e: KeyboardEvent) => {
        if (!menuOpen || !overlayRef.current) return;

        if (e.key === 'Escape') {
            setMenuOpen(false);
            return;
        }

        if (e.key !== 'Tab') return;

        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('keydown', handleTrapFocus);
            // Focus first link when overlay opens
            const timer = setTimeout(() => {
                overlayRef.current?.querySelector<HTMLElement>('a')?.focus();
            }, 100);
            return () => {
                document.removeEventListener('keydown', handleTrapFocus);
                clearTimeout(timer);
            };
        }
    }, [menuOpen, handleTrapFocus]);

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.inner}`}>
                    <Link
                        href="/"
                        className={styles.wordmark}
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        DKM Corp
                    </Link>

                    <ul className={styles.links}>
                        {navLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} className={styles.link}>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>

                    <a href="#contact" className={styles.cta}>
                        Let&apos;s Talk
                    </a>

                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                        onClick={() => setMenuOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div
                ref={overlayRef}
                className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
                aria-hidden={!menuOpen}
            >
                <ul className={styles.overlayLinks}>
                    {navLinks.map((l, i) => (
                        <li
                            key={l.label}
                            style={{ transitionDelay: `${i * 60}ms` }}
                            className={menuOpen ? styles.overlayItemVisible : ''}
                        >
                            <a href={l.href} onClick={handleClose} className={styles.overlayLink}>
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li
                        style={{ transitionDelay: `240ms` }}
                        className={menuOpen ? styles.overlayItemVisible : ''}
                    >
                        <a href="#contact" onClick={handleClose} className={styles.overlayCta}>
                            Let&apos;s Talk
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
