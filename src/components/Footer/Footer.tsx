'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const TIMEZONES = [
    { label: 'India', zone: 'Asia/Kolkata' },
    { label: 'Atlanta', zone: 'America/New_York' },
    { label: 'Dubai', zone: 'Asia/Dubai' },
    { label: 'Australia', zone: 'Australia/Sydney' },
];

function ClockStrip() {
    const [times, setTimes] = useState<string[]>([]);

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTimes(
                TIMEZONES.map((tz) =>
                    now.toLocaleTimeString('en-US', {
                        timeZone: tz.zone,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true,
                    })
                )
            );
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className={`container ${styles.clockStrip}`}>
            {TIMEZONES.map((tz, i) => (
                <div key={tz.zone} className={styles.clockItem}>
                    <span className={styles.clockLabel}>{tz.label}</span>
                    <span className={styles.clockTime} suppressHydrationWarning>
                        {times[i] || '--:--:-- --'}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.left}>
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
                    <p className={`t-body ${styles.tagline}`}>
                        We Design. We Market. We Operate.
                    </p>
                    <p className={styles.geo}>
                        India · Australia · United States · Dubai
                    </p>
                </div>

                <div className={styles.right}>
                    <p className={`t-label ${styles.connectLabel}`}>Connect</p>
                    <ul className={styles.contactList}>
                        <li>
                            <a
                                href="mailto:info@dkmcorp.in"
                                className={styles.contactLink}
                            >
                                info@dkmcorp.in
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/917093939312"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                +91 7093939312 (WhatsApp)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <ClockStrip />

            <div className={`container ${styles.bottom}`}>
                <div className={styles.bottomLeft}>
                    <p className={styles.copy}>
                        &copy; {year} DKM Corp. All rights reserved.
                    </p>
                    <p className={styles.copy}>
                        Private growth &amp; operations partner.
                    </p>
                </div>
                <div className={styles.curator}>
                    <span className={styles.copy}>Curated with intention by</span>
                    <a href="https://www.rovstudios.com/" target="_blank" rel="noopener noreferrer" className={styles.curatorLogos}>
                        <img
                            src="/Black_Logo_BG_removed.png"
                            alt="ROV Logo"
                            className={styles.logoLight}
                        />
                        <img
                            src="/rovbrownlogo.png"
                            alt="ROV Logo"
                            className={styles.logoDark}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
