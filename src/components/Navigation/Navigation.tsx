'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
