'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './Work.module.css';

const projects = [
    {
        country: 'India',
        tag: 'Asset Monetization',
        status: 'completed',
        headline: 'Farmhouse Revenue Engine',
        summary:
            'Converted privately owned farmhouses into structured short-term rental revenue engines. Designed pricing models, automated guest operations, and implemented full-cycle management systems.',
    },
    {
        country: 'Australia',
        tag: 'Healthcare',
        status: 'ongoing',
        headline: 'Healthcare Digital Transformation',
        summary:
            'Overseeing digital transformation for a healthcare company, including application development and AI-driven voice automation to streamline internal workflows.',
    },
    {
        country: 'United States',
        tag: 'Margin Optimization',
        status: 'completed',
        headline: 'AI Systems & Operational Efficiency',
        summary:
            'Implemented AI systems within an established firm facing geopolitical revenue constraints — reducing payroll dependency and protecting long-term profitability.',
    },
    {
        country: 'Dubai',
        tag: 'Real Estate Marketing',
        status: 'ongoing',
        headline: 'Real Estate & Brand Monetization',
        summary:
            'Providing structured marketing solutions for real estate companies and public-facing brands. Focused on positioning, targeted acquisition, and monetization optimization.',
    },
];

type Filter = 'all' | 'ongoing' | 'completed';

export default function Work() {
    const [filter, setFilter] = useState<Filter>('all');
    const ref = useReveal();

    const filtered = projects.filter(
        (p) => filter === 'all' || p.status === filter
    );

    return (
        <section
            id="work"
            className={`section ${styles.work}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <div className={styles.headerLeft}>
                        <span className="t-label">Selected Work</span>
                        <span className="accent-line" style={{ marginTop: '12px' }} />
                        <h2 className={`t-h1 ${styles.heading}`}>
                            Outcomes across
                            <br />
                            <em>four markets.</em>
                        </h2>
                    </div>
                    <div className={styles.filters}>
                        {(['all', 'ongoing', 'completed'] as Filter[]).map((f) => (
                            <button
                                key={f}
                                className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                                onClick={() => setFilter(f)}
                            >
                                {f.charAt(0).toUpperCase() + f.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={`${styles.grid} reveal`}>
                    {filtered.map((p, i) => (
                        <div
                            key={`${p.country}-${i}`}
                            className={styles.card}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.meta}>
                                    <span className={styles.country}>{p.country}</span>
                                    <span className={styles.tag}>{p.tag}</span>
                                </div>
                                <span
                                    className={`${styles.status} ${p.status === 'ongoing' ? styles.ongoing : styles.completed}`}
                                >
                                    {p.status}
                                </span>
                            </div>
                            <h3 className={`t-h3 ${styles.cardHeadline}`}>{p.headline}</h3>
                            <p className={`t-body ${styles.cardSummary}`}>{p.summary}</p>
                            <div className={styles.cardFoot}>
                                <span className={styles.arrow}>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
