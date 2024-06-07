import {ReactElement} from 'react';

import clearCookieImage from '@/assets/images/sign-out/clear-cookie.webp';

import ImageSlide from '@/slides/image/image.slide';

export default function SignOutChapter(): ReactElement {
    const heading = 'Sign Out' as const;

    return (
        <section>
            <ImageSlide heading={heading} imageSrc={clearCookieImage.src} caption="Clear Cookie" />
        </section>
    );
}
