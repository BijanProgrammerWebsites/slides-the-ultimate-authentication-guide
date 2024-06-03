import {ReactElement} from 'react';

import qrCodeImage from '@/assets/images/qr-code.svg';

import styles from './cover.module.scss';

type Props = {
    heading: string;
    basePath: string;
};

export default function CoverSlide({heading, basePath}: Props): ReactElement {
    return (
        <section className={styles.cover}>
            <div>
                <h1>{heading}</h1>
                <div>
                    by{' '}
                    <a href="https://www.linkedin.com/in/bijanprogrammer/" target="_blank">
                        BijanProgrammer
                    </a>
                </div>
            </div>
            <div className={styles.link}>
                <img className="qr-code" src={qrCodeImage.src} alt="QR Code" />
                <a href={`https://schort.ir${basePath}`} target="_blank">
                    schort.ir{basePath}
                </a>
            </div>
        </section>
    );
}
