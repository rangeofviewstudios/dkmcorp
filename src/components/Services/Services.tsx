'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './Services.module.css';

const services = [
    {
        num: '01',
        title: 'Digital Infrastructure & Web Systems',
        subtitle: 'Conversion-focused digital infrastructure, built to perform.',
        bullets: [
            'Premium website development',
            'Funnel architecture',
            'Backend system integration',
            'CRM and workflow structuring',
            'Performance optimization',
        ],
    },
    {
        num: '02',
        title: 'AI & Intelligent Automation',
        subtitle: 'Automation frameworks that reduce cost and increase efficiency.',
        bullets: [
            'AI workflow integration',
            'Voice agents & conversational automation',
            'Process automation',
            'Payroll optimization through intelligent systems',
            'Operational streamlining',
        ],
    },
    {
        num: '03',
        title: 'Growth Marketing Systems',
        subtitle: 'Structured acquisition engines. Marketing is engineered growth.',
        bullets: [
            'Performance marketing',
            'Lead generation frameworks',
            'Brand positioning',
            'Market entry structuring',
            'Revenue funnel optimization',
        ],
    },
    {
        num: '04',
        title: 'Business Operations & Performance Management',
        subtitle: "We don't just implement — we oversee and manage performance.",
        bullets: [
            'Process restructuring',
            'Vendor coordination',
            'KPI tracking',
            'Cost analysis',
            'Revenue model optimization',
            'Strategic expansion planning',
        ],
    },
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useReveal();

    return (
        <section
            id="services"
            className={`section ${styles.services}`}
            ref={ref as React.RefObject<HTMLElement>}
        >
            <div className="container">
                <div className={`${styles.header} reveal`}>
                    <span className="t-label">What We Do</span>
                    <span className="accent-line" style={{ marginTop: '12px' }} />
                    <h2 className={`t-h1 ${styles.heading}`}>
                        Four pillars of
                        <br />
                        <em>structured growth.</em>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className={`${styles.card} ${openIndex === i ? styles.cardOpen : ''} reveal reveal-delay-${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openIndex === i}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setOpenIndex(openIndex === i ? null : i);
                                }
                            }}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.num}>{svc.num}</span>
                                <div className={styles.titleWrap}>
                                    <h3 className={`t-h3 ${styles.title}`}>{svc.title}</h3>
                                    <p className={`t-body ${styles.subtitle}`}>{svc.subtitle}</p>
                                </div>
                                <span className={`${styles.toggle} ${openIndex === i ? styles.toggleOpen : ''}`}>
                                    <span />
                                    <span />
                                </span>
                            </div>

                            <div className={styles.bullets}>
                                <ul>
                                    {svc.bullets.map((b, j) => (
                                        <li key={j} className={styles.bullet}>
                                            <span className={styles.bulletDot} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
