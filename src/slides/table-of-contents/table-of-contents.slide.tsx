import {ReactElement} from 'react';

import styles from './table-of-contents.module.scss';

type Props = {
    contents: string[];
};

export default function TableOfContentsSlide({contents}: Props): ReactElement {
    return (
        <section className={styles['table-of-contents']}>
            <header>
                <h2>Table of Contents</h2>
            </header>
            <main className="r-stretch">
                <ul>
                    {contents.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            </main>
        </section>
    );
}
