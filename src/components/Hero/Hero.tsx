'use client';

import { useEffect, useRef } from 'react';
import ShinyText from '@/components/ShinyText/ShinyText';
import TextType from '@/components/TextType/TextType';
import styles from './Hero.module.css';

export default function Hero() {
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate the horizontal rule on load
        const t = setTimeout(() => {
            if (lineRef.current) lineRef.current.classList.add(styles.lineVisible);
        }, 600);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className={styles.hero} id="hero">
            {/* Background grid lines — decorative */}
            <div className={styles.gridLines} aria-hidden="true">
                <span /><span /><span /><span /><span />
            </div>

            <div className={`container ${styles.content}`}>
                {/* Upper-left label */}
                <ShinyText
                    text="Private Growth & Operations Partner"
                    className={`t-label ${styles.label}`}
                    speed={8}
                    color="var(--off-white-dim)"
                    shineColor="var(--accent)"
                />

                {/* Main headline */}
                <div className={styles.headlineWrap}>
                    <h1 className={`t-display ${styles.headline}`}>
                        We Design.<br />
                        We Market.<br />
                        We Operate.
                    </h1>

                    {/* Right secondary statement */}
                    <div className={styles.secondary}>
                        <TextType
                            as="p"
                            className={styles.secondaryText}
                            text={"Execution-first.\nStrategy to outcome."}
                            typingSpeed={40}
                            showCursor={true}
                            cursorCharacter="_"
                            loop={false}
                        />
                        <p className={`t-body ${styles.secondaryBody}`}>
                            We identify performance bottlenecks — whether revenue stagnation,
                            operational inefficiency, or margin compression — and install
                            structured systems to solve them.
                        </p>
                        <a href="#contact" className={styles.ctaBtn}>
                            Start a Conversation
                        </a>
                    </div>
                </div>

                {/* Animated line */}
                <div ref={lineRef} className={styles.line} aria-hidden="true" />

                {/* Geography tags */}
                <div className={styles.geo}>
                    <span className={`t-label ${styles.geoLabel}`}>Operating in</span>
                    <ul className={styles.geoList}>
                        {['India', 'Australia', 'United States', 'Dubai'].map((g) => (
                            <li key={g} className={styles.geoItem}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator} aria-hidden="true">
                <div className={styles.scrollLine} />
                <span className={styles.scrollText}>scroll</span>
            </div>
        </section>
    );
}
