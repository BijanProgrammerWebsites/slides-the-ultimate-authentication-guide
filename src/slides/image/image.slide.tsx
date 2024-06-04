import {ReactElement} from 'react';

import BaseSlide, {BaseSlideProps} from '@/slides/base/base.slide';

import styles from './image.module.scss';

type Props = BaseSlideProps & {
    imageSrc: string;
    caption: string;
};

export default function ImageSlide({imageSrc, caption, ...baseSlideProps}: Props): ReactElement {
    return (
        <BaseSlide {...baseSlideProps}>
            <figure className={styles.figure}>
                <figcaption>{caption}</figcaption>
                <img src={imageSrc} alt="" />
            </figure>
        </BaseSlide>
    );
}
