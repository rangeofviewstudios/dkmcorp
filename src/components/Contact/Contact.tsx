'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Contact.module.css';

const contacts = [
    {
        label: 'Email',
        href: 'mailto:hello@dkmcorp.com',
        description: 'hello@dkmcorp.com',
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/message/dkmcorp',
        description: 'Message us directly',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/dkmcorp',
        description: 'DKM Corp',
    },
];

export default function Contact() {
    const ref = useReveal();

    return (
        <section
            id="contact"
            className={`section ${styles.contact}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className="container">
                <div className={styles.inner}>
                    {/* Left: Headline */}
                    <div className={styles.left}>
                        <span className="t-label reveal">Contact</span>
                        <span className="accent-line reveal reveal-delay-1" />
                        <h2 className={`t-h1 ${styles.heading} reveal reveal-delay-1`}>
                            If you are building,
                            <br />
                            scaling, or restructuring —
                            <br />
                            <em>let&apos;s talk.</em>
                        </h2>
                        <p className={`t-body ${styles.sub} reveal reveal-delay-2`}>
                            We work with a select number of partners at any given time.
                            Reach out to explore whether there is alignment.
                        </p>
                    </div>

                    {/* Right: Contact methods */}
                    <div className={`${styles.right} reveal reveal-delay-2`}>
                        {contacts.map((c, i) => (
                            <a
                                key={i}
                                href={c.href}
                                target={c.href.startsWith('http') ? '_blank' : undefined}
                                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={styles.contactCard}
                            >
                                <div className={styles.contactLabel}>{c.label}</div>
                                <div className={styles.contactDesc}>{c.description}</div>
                                <span className={styles.contactArrow}>→</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
