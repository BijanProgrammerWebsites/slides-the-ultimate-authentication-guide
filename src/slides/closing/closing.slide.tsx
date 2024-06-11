import {ReactElement} from 'react';

import SimpleIconsAparatIcon from '@/icons/simple-icons-aparat.icon';
import SimpleIconsLinkedinIcon from '@/icons/simple-icons-linkedin.icon';
import SimpleIconsTelegramIcon from '@/icons/simple-icons-telegram.icon';

import styles from './closing.module.scss';

export default function ClosingSlide(): ReactElement {
    return (
        <section>
            <header></header>
            <main className="r-stretch">
                <div className={styles.closing}>
                    <ul className={styles.socials}>
                        <li>
                            <div className={styles.title}>Let&apos;s Get to Know Each Other</div>
                            <a
                                className={styles.link}
                                href="https://www.linkedin.com/in/bijanprogrammer/"
                                target="_blank"
                            >
                                <SimpleIconsLinkedinIcon />
                                BijanProgrammer
                            </a>
                        </li>
                        <li>
                            <div className={styles.title}>Join Our Wonderful Community</div>
                            <a className={styles.link} href="https://t.me/Codective/" target="_blank">
                                <SimpleIconsTelegramIcon />
                                Codective
                            </a>
                        </li>
                        <li>
                            <div className={styles.title}>Watch Some Awesome Content</div>
                            <a className={styles.link} href="https://www.aparat.com/bijanprogrammer/" target="_blank">
                                <SimpleIconsAparatIcon />
                                BijanProgrammer
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
}
