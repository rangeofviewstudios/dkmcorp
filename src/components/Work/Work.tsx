'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './Work.module.css';

const projects = [
    {
        country: 'India',
        tag: 'Asset Monetization',
        status: 'completed',
        headline: 'Property Revenue Engine',
        link: 'https://larosa.co.in',
        summary:
            'Positioned privately owned farmhouses as high-performing short-term rental assets by introducing structured revenue strategies and operational frameworks. Implemented dynamic pricing models, streamlined guest experience workflows, and integrated automated management systems to ensure seamless day-to-day operations while maximizing asset performance and long-term value creation.',
    },
    {
        country: 'Australia',
        tag: 'Healthcare',
        status: 'ongoing',
        headline: 'Healthcare Digital Transformation',
        link: 'https://revoltcare.com.au',
        summary:
            'Supporting the evolution of a modern healthcare NDIS services provider by integrating digital infrastructure and intelligent automation. The engagement focuses on developing scalable applications and deploying AI-driven voice systems to streamline workflows, enhance coordination, and reduce friction.\n\nBy aligning technology with service delivery, the initiative enables responsive operations, improved efficiency, and a digital foundation capable of adapting to the rapidly advancing healthcare landscape.',
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

const ProjectCard = ({ p }: { p: typeof projects[0] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Limit characters for the truncated preview
    const MAX_LENGTH = 140;
    const isLong = p.summary.length > MAX_LENGTH;
    const displaySummary = (!isExpanded && isLong)
        ? p.summary.slice(0, MAX_LENGTH).trim() + '...'
        : p.summary;

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating if wrapped in an anchor link
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const CardWrapper = p.link ? 'a' : 'div';
    const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <CardWrapper
            className={styles.card}
            {...linkProps}
            style={{ display: 'block', textDecoration: 'none' }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.meta}>
                    <span className={styles.country}>{p.country}</span>
                    <span className={styles.tag}>{p.tag}</span>
                </div>
            </div>
            <h3 className={`t-h3 ${styles.cardHeadline}`}>{p.headline}</h3>
            <p className={`t-body ${styles.cardSummary}`} style={{ whiteSpace: 'pre-wrap' }}>
                {displaySummary}
            </p>
            {isLong && (
                <div style={{ marginTop: 'auto', paddingBottom: '16px' }}>
                    <span
                        onClick={handleToggle}
                        style={{
                            color: 'var(--accent)',
                            cursor: 'pointer',
                            display: 'inline-block',
                            fontWeight: 500,
                            fontSize: '0.82rem',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase'
                        }}
                    >
                        {isExpanded ? 'Read Less -' : 'Read More +'}
                    </span>
                </div>
            )}
            <div className={styles.cardFoot}>
                {p.link ? (
                    <span className={styles.arrow} style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}>→</span>
                ) : (
                    <span className={styles.arrow}>→</span>
                )}
            </div>
        </CardWrapper>
    );
};

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
                        <ShinyText
                            text="Selected Work"
                            className="t-label"
                            speed={8}
                            color="var(--off-white-dim)"
                            shineColor="var(--accent)"
                        />
                        <span className="accent-line" style={{ marginTop: '12px' }} />
                        <h2 className={`t-h1 ${styles.heading}`}>
                            <ShinyText
                                text="Outcomes across"
                                speed={8}
                                color="var(--off-white)"
                                shineColor="var(--accent)"
                            />
                            <br />
                            <em>
                                <ShinyText
                                    text="four markets."
                                    speed={8}
                                    color="var(--off-white-dim)"
                                    shineColor="var(--accent)"
                                />
                            </em>
                        </h2>
                    </div>
                </div>

                <div className={`${styles.grid} reveal`}>
                    {filtered.map((p, i) => (
                        <ProjectCard key={`${p.country}-${i}`} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
