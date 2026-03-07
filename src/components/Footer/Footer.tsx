import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.left}>
                    <p className={styles.wordmark}>DKM Corp</p>
                    <p className={`t-body ${styles.tagline}`}>
                        We Design. We Market. We Operate.
                    </p>
                    <p className={styles.geo}>
                        India &nbsp;·&nbsp; Australia &nbsp;·&nbsp; United States &nbsp;·&nbsp; Dubai
                    </p>
                </div>

                <div className={styles.right}>
                    <p className="t-label" style={{ marginBottom: '20px' }}>Connect</p>
                    <ul className={styles.contactList}>
                        <li>
                            <a
                                href="mailto:hello@dkmcorp.com"
                                className={styles.contactLink}
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/message/dkmcorp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/company/dkmcorp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <p className={styles.copy}>
                    &copy; {year} DKM Corp. All rights reserved.
                </p>
                <p className={styles.copy}>
                    Private growth &amp; operations partner.
                </p>
            </div>
        </footer>
    );
}
