import {ReactElement} from 'react';

import styles from './versus.module.scss';

type Column = {
    heading: string;
    imageSrc: string;
    description: string;
};

type Props = {
    heading: string;
    columns: [Column, Column];
};

export default function VersusSlide({heading, columns}: Props): ReactElement {
    return (
        <section>
            <header>
                <h2>{heading}</h2>
            </header>
            <main className="r-stretch">
                <div className={styles.versus}>
                    {columns.map((column, index) => (
                        <div key={index} className="column">
                            <div className="heading">{column.heading}</div>
                            <img src={column.imageSrc} alt="" />
                            <p>{column.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}
