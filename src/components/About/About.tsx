'use client';

import { useReveal } from '@/hooks/useReveal';
import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './About.module.css';

const stats = [
    { value: '4', label: 'Countries' },
    { value: '3+', label: 'Verticals' },
    { value: '100%', label: 'Execution' },
];

export default function About() {
    const ref = useReveal();

    return (
        <section
            id="about"
            className={`section ${styles.about}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className={`container ${styles.inner}`}>
                {/* Left column */}
                <div className={styles.left}>
                    <ShinyText
                        text="About DKM Corp"
                        className="t-label reveal"
                        speed={8}
                        color="var(--off-white-dim)"
                        shineColor="var(--accent)"
                    />
                    <span className="accent-line reveal reveal-delay-1" />
                    <h2 className={`t-h1 ${styles.heading} reveal reveal-delay-1`}>
                        A private growth &amp;
                        <br />
                        <em>operations partner.</em>
                    </h2>
                    <p className={`t-body ${styles.body} reveal reveal-delay-2`}>
                        DKM Corp works across India, Australia, United States, and Dubai.
                        We identify performance bottlenecks — whether revenue stagnation,
                        operational inefficiency, or margin compression — and install
                        structured systems to solve them.
                    </p>
                    <p className={`t-body ${styles.body} reveal reveal-delay-2`}>
                        Our model is execution-first. We design the strategy, deploy the
                        team, implement automation, and oversee outcomes.
                    </p>
                    <blockquote className={`${styles.pullQuote} reveal reveal-delay-3`}>
                        &ldquo;If a process is repetitive, we automate it.
                        <br />
                        If a role is replaceable, we optimize it.&rdquo;
                    </blockquote>
                </div>

                {/* Right column — stats */}
                <div className={styles.right}>
                    <div className={`${styles.statGrid} reveal reveal-delay-2`}>
                        {stats.map((s, i) => (
                            <div key={i} className={styles.stat}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
