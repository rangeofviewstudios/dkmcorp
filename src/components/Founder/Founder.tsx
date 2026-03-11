'use client';

import { useState } from 'react';
import Image from 'next/image';
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
                {/* Heading block */}
                <div className={styles.headingBlock}>
                    <span className="reveal">
                        <ShinyText
                            text="The Founder"
                            className="t-label"
                            speed={14}
                            color="var(--off-white-dim)"
                            shineColor="var(--accent)"
                        />
                    </span>
                    <span className="accent-line reveal reveal-delay-1" />

                    <h2 className={`t-h1 ${styles.heading} reveal reveal-delay-1`}>
                        <ShinyText
                            text="Dheeraj Kumar Miryala"
                            speed={14}
                            color="var(--accent)"
                            shineColor="#fff"
                        />
                    </h2>
                </div>

                {/* Image */}
                <div className={`${styles.right} reveal reveal-delay-3`}>
                    <Image
                        src="/dheerajpfolio.jpeg"
                        alt="Dheeraj Kumar Miryala - Founder of DKM Corp"
                        width={480}
                        height={600}
                        className={styles.image}
                        loading="lazy"
                    />
                </div>

                {/* Email - mobile only */}
                <div className={`${styles.emailBlock} reveal reveal-delay-2`}>
                    <a href="mailto:miryala@dkmcorp.in" className={styles.email}>
                        miryala@dkmcorp.in
                    </a>
                </div>

                {/* Body text */}
                <div className={`${styles.textBlock} reveal reveal-delay-2`}>
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
                        <a href="mailto:miryala@dkmcorp.in" className={`${styles.email} ${styles.emailInline}`}>
                            miryala@dkmcorp.in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
