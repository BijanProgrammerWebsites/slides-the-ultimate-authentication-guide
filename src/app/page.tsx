import {ReactElement} from 'react';

import CoverSlide from '@/slides/cover/cover.slide';

export default function Home(): ReactElement {
    return (
        <>
            <CoverSlide heading="The Ultimate Authentication Guide" basePath="/tuag" />
        </>
    );
}
