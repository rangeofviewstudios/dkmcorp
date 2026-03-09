'use client';

import { useState, useEffect } from 'react';
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
        if (next) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleClose = () => setMenuOpen(false);

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.inner}`}>
                    <Link href="/" className={styles.wordmark}>
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
