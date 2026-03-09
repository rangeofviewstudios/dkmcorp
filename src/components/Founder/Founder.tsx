'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './Founder.module.css';

export default function Founder() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useReveal();

    return (
        <section
            id="founder"
            className={`section ${styles.founder}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className={`container ${styles.inner}`}>
                {/* Left column - Text */}
                <div className={styles.left}>
                    <ShinyText
                        text="The Founder"
                        className="t-label reveal"
                        speed={8}
                        color="var(--off-white-dim)"
                        shineColor="var(--accent)"
                    />
                    <span className="accent-line reveal reveal-delay-1" />

                    <h2 className={`t-h1 ${styles.heading} reveal reveal-delay-1`}>
                        Engineering systems
                        <br />
                        <em>that scale.</em>
                    </h2>

                    <div className={`reveal reveal-delay-2`}>
                        <p className={`t-body ${styles.body}`}>
                            A young entrepreneur at the intersection of technology, operations, and asset management leads ventures in digital transformation, automation, hospitality systems, and infrastructure.
                        </p>

                        <div className={`${styles.moreText} ${isOpen ? styles.open : ''}`}>
                            <div className={styles.moreContent}>
                                <p className={`t-body ${styles.body}`}>
                                    By adopting systems thinking, DKM Corp identifies fragmented industries and implements structured frameworks that integrate software, automation, and data-driven decision-making. This approach transforms traditional operations into efficient, high-performance platforms that facilitate long-term growth.
                                </p>
                                <p className={`t-body ${styles.body}`}>
                                    Across projects, the founder prioritizes DKM Corp to have operational clarity, intelligent automation, and resilient business models. Whether developing AI-driven tools, modernizing service operations, or architecting revenue systems around assets, the objective remains consistent: transforming complex operations into streamlined, technology-supported ecosystems.
                                </p>
                                <p className={`t-body ${styles.body}`}>
                                    Guided by a forward-looking mindset, the focus is not only on building companies, but on engineering durable systems that scale, adapt, and redefine how modern businesses operate.
                                </p>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button
                                className={styles.readMoreBtn}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-expanded={isOpen}
                            >
                                {isOpen ? 'Read Less -' : 'Read More +'}
                            </button>
                            <a href="mailto:miryala@dkmcorp.in" className={styles.email}>
                                miryala@dkmcorp.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column - Image */}
                <div className={`${styles.right} reveal reveal-delay-3`}>
                    <img
                        src="/dheerajpfolio.jpeg"
                        alt="Founder of DKM Corp"
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
