'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import ShinyText from '@/components/ShinyText/ShinyText';
import styles from './Services.module.css';

const services = [
    {
        num: '01',
        title: 'Digital Infrastructure & Web Systems',
        subtitle: 'Branded. Premium. Built to convert.',
        description:
            'In partnership with ROV Studios, we engineer luxury-grade digital infrastructure for businesses where every pixel, interaction, and system is designed with one goal: client conversion. From the first impression to the final sale, we build web experiences that carry the weight of a premium brand.',
        bullets: [
            'Premium Website Development — Custom-coded, mobile-first builds with luxury-level UI/UX and zero compromise on speed.',
            'UI/UX and Visual Design — Branded interfaces crafted with precision, covering illustration, 3D design, motion, and every design discipline in between.',
            'Funnel Architecture — Strategic, conversion-engineered user journeys that guide your visitors toward a decision.',
            'Backend System Integration — Seamless connectivity across tools, databases, and platforms, built to scale without breaking a sweat.',
            'CRM and Workflow Structuring — Clean pipelines that keep your operations organised and easy to track.',
            'Performance Optimisation — SEO & GEO ready structure, fast load times, and ongoing technical health so nothing slips through the cracks.',
        ],
    },
    {
        num: '02',
        title: 'AI and Intelligent Automation',
        subtitle: 'Luxury operations. Intelligent by design.',
        description:
            `The most high-performing businesses aren\u2019t just well-branded, they\u2019re well-built on the inside. In partnership with ROV Studios, we put together intelligent automation systems that save your team real time and build infrastructure that actually generates revenue. If a process is repetitive, we automate it. If a system can be smarter, we build it that way.`,
        bullets: [
            'Custom Chatbots — Branded conversion-focused chatbots built to engage visitors, qualify leads, and represent your business at the highest level, around the clock, without any human dependency.',
            'Workflow Automation — End-to-end automation pipelines that connect your full tech stack, cut out the manual work, and keep every department running lean.',
            'AI Agent Development — Autonomous agents that think, decide, and act, handling complex multi-step operations so your team can focus on things that actually need them.',
            'RAG Chatbots — Retrieval-Augmented Generation systems trained on your own data, documentation, and knowledge base, so your AI gives precise, context-aware responses rather than generic ones.',
            'Voice Agents — AI-powered voice agents handle inbound communication around the clock, professionally and consistently, with no drop in quality.',
            'Custom AI Solutions — Every business has problems no off-the-shelf tool can touch. We build bespoke AI systems designed specifically around your operations, your data, and your goals.',
        ],
    },
    {
        num: '03',
        title: 'Growth Marketing Systems',
        subtitle: 'Structured acquisition engines. Marketing is engineered growth.',
        description: '',
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
        description: '',
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
                    <ShinyText
                        text="What We Do"
                        className="t-label"
                        speed={14}
                        color="var(--off-white-dim)"
                        shineColor="var(--accent)"
                    />
                    <span className="accent-line" style={{ marginTop: '12px' }} />
                    <h2 className={`t-h1 ${styles.heading}`}>
                        Four pillars of
                        <br />
                        <em>structured growth.</em>
                    </h2>
                </div>

                <div className={`${styles.grid} reveal`}>
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className={`${styles.card} ${openIndex === i ? styles.cardOpen : ''}`}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openIndex === i}
                            aria-controls={`service-panel-${i}`}
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

                            <div id={`service-panel-${i}`} role="region" className={styles.bullets}>
                                {svc.description && (
                                    <p className={styles.description}>{svc.description}</p>
                                )}
                                <ul>
                                    {svc.bullets.map((b, j) => {
                                        const sepIdx = b.indexOf(' — ');
                                        const title = sepIdx !== -1 ? b.slice(0, sepIdx) : null;
                                        const rest  = sepIdx !== -1 ? b.slice(sepIdx) : b;
                                        return (
                                            <li key={j} className={styles.bullet}>
                                                <span className={styles.bulletDot} />
                                                <span>
                                                    {title && (
                                                        <strong className={styles.bulletTitle}>{title}</strong>
                                                    )}
                                                    <span className={i === 2 || i === 3 ? styles.bulletTitle : ''}>
                                                        {rest}
                                                    </span>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {(i === 0 || i === 1) && (
                                    <a
                                        href="https://www.rovstudios.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.partnerBadge}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span className={styles.partnerContent}>
                                            <span className={styles.partnerLabel}>Delivered in partnership with</span>
                                            <span className={styles.partnerLink}>
                                                <img
                                                    src="/Black_Logo_BG_removed.png"
                                                    alt="ROV Studios"
                                                    className={styles.partnerLogoLight}
                                                />
                                                <img
                                                    src="/rovbrownlogo.png"
                                                    alt="ROV Studios"
                                                    className={styles.partnerLogoDark}
                                                />
                                            </span>
                                        </span>
                                        <span className={styles.partnerArrow}>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
