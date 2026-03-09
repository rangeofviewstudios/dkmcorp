'use client';

import { useReveal } from '@/hooks/useReveal';
import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './Engagement.module.css';

const models = [
    {
        title: 'Retainer + Performance',
        desc: 'Ongoing partnership with aligned incentives tied to measurable outcomes.',
    },
    {
        title: 'Project-Based Execution',
        desc: 'Scoped engagements with clear deliverables, timelines, and accountability.',
    },
    {
        title: 'Long-Term Operational Mandates',
        desc: 'We integrate directly into your operations as a dedicated growth function.',
    },
    {
        title: 'Select Revenue-Share',
        desc: 'For the right opportunities, we align our outcomes directly with yours.',
    },
];

export default function Engagement() {
    const ref = useReveal();

    return (
        <section
            id="engagement"
            className={`section ${styles.engagement}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className="container">
                <div className={`${styles.inner} reveal`}>
                    <div className={styles.top}>
                        <ShinyText
                            text="Engagement Model"
                            className="t-label"
                            speed={8}
                            color="var(--off-white-dim)"
                            shineColor="var(--accent)"
                        />
                        <span className="accent-line" style={{ marginTop: '12px' }} />
                        <h2 className={`t-h1 ${styles.heading}`}>
                            We align with businesses
                            <br />
                            <em>serious about scale.</em>
                        </h2>
                    </div>

                    <div className={`${styles.modelGrid} reveal reveal-delay-2`}>
                        {models.map((m, i) => (
                            <div key={i} className={styles.model}>
                                <span className={styles.modelNum}>0{i + 1}</span>
                                <h3 className={styles.modelTitle}>{m.title}</h3>
                                <p className={`t-body ${styles.modelDesc}`}>{m.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`${styles.cta} reveal reveal-delay-3`}>
                        <p className={styles.ctaText}>
                            We work with a select number of partners at any given time.
                        </p>
                        <a href="#contact" className={styles.ctaBtn}>
                            Enquire About Partnership →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
